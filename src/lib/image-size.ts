// Reads intrinsic width/height of JPEG and PNG files in public/ at build time,
// so every <img> can carry width/height attributes (prevents layout shift)
// without hand-maintaining dimensions. No dependencies.
import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface Size {
  width: number;
  height: number;
}

const cache = new Map<string, Size>();

function parse(buf: Buffer): Size | null {
  // PNG: IHDR width/height at bytes 16–23
  if (buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  // JPEG: walk markers until a Start-Of-Frame segment
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      const isSof = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
      if (isSof) return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      i += 2 + len;
    }
  }
  return null;
}

// `src` is a public path such as "/assets/images/logo.png"
export function imageSize(src: string): Size {
  const hit = cache.get(src);
  if (hit) return hit;
  const size = parse(readFileSync(join(process.cwd(), "public", src.split("?")[0])));
  if (!size) throw new Error(`imageSize: unsupported image format for ${src}`);
  cache.set(src, size);
  return size;
}
