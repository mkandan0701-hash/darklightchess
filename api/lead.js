// Server-side relay for website enquiries → Darklight CRM lead-capture webhook.
// The webhook secret lives only in Vercel's environment, never in the browser.
//
// Required env vars (Vercel → Project → Settings → Environment Variables):
//   CRM_WEBHOOK_SECRET  the CRM's lead-capture secret (rotate the old one: it was public)
// Optional:
//   CRM_WEBHOOK_URL     defaults to the production CRM endpoint below
const DEFAULT_URL = "https://darklightchess-aios.vercel.app/api/webhooks/lead-capture";
const ALLOWED_HOSTS = new Set(["www.darklightchess.com", "darklightchess.com", "localhost"]);

const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

function originAllowed(origin) {
  if (!origin) return true; // same-origin fetches may omit Origin
  try {
    const host = new URL(origin).hostname;
    // Production, local dev, and this project's own Vercel preview deployments.
    return ALLOWED_HOSTS.has(host) || (host.startsWith("darklightchess") && host.endsWith(".vercel.app"));
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }
  if (!originAllowed(req.headers.origin)) {
    return res.status(403).json({ ok: false, error: "Forbidden" });
  }

  const secret = process.env.CRM_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[lead] CRM_WEBHOOK_SECRET is not set; lead not forwarded");
    return res.status(503).json({ ok: false, error: "CRM not configured" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: "Invalid JSON" });
    }
  }
  body = body || {};

  const lead = {
    name: str(body.name, 100),
    email: str(body.email, 200),
    phone: str(body.phone, 25),
    source: "website",
    available_days: Array.isArray(body.available_days)
      ? body.available_days.filter((d) => typeof d === "string").slice(0, 7).map((d) => d.slice(0, 3))
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    available_time: str(body.available_time, 50) || "Flexible",
    notes: str(body.notes, 2000),
  };

  if (lead.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email) || !/^\+?[0-9]{7,15}$/.test(lead.phone)) {
    return res.status(400).json({ ok: false, error: "Invalid lead" });
  }

  try {
    const upstream = await fetch(process.env.CRM_WEBHOOK_URL || DEFAULT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-lead-webhook-secret": secret },
      body: JSON.stringify(lead),
    });
    if (!upstream.ok) console.error("[lead] CRM rejected lead", upstream.status);
    return res.status(upstream.ok ? 200 : 502).json({ ok: upstream.ok });
  } catch (err) {
    console.error("[lead] CRM request failed", err);
    return res.status(502).json({ ok: false });
  }
}
