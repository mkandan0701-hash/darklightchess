// Converts a local weekly time to Indian Standard Time (UTC+5:30, no daylight
// saving). Used on the country pages to show families what their preferred
// slot is in India — computed, never hand-typed, so the tables can't drift.
const IST_OFFSET = 5.5;
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const formatTime = (hours: number) => {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
};

// "+5:30", "−4", "+9:30"
export const formatOffset = (offset: number) => {
  const sign = offset < 0 ? "−" : "+";
  const abs = Math.abs(offset);
  const h = Math.floor(abs);
  const m = Math.round((abs - h) * 60);
  return `UTC${sign}${h}${m ? ":" + String(m).padStart(2, "0") : ""}`;
};

// Hours India is ahead (positive) or behind (negative) a given UTC offset.
export const istDifference = (offset: number) => IST_OFFSET - offset;

export const describeDifference = (offset: number) => {
  const diff = istDifference(offset);
  const abs = Math.abs(diff);
  const label = Number.isInteger(abs) ? `${abs}` : `${Math.floor(abs)}½`;
  if (diff === 0) return "Same time as India";
  return diff > 0 ? `India is ${label} h ahead` : `India is ${label} h behind`;
};

export function toIst(day: string, hour: number, offset: number) {
  const dayIndex = DAYS.indexOf(day);
  if (dayIndex < 0) throw new Error(`toIst: unknown day ${day}`);
  let t = hour + istDifference(offset);
  let d = dayIndex;
  while (t >= 24) { t -= 24; d = (d + 1) % 7; }
  while (t < 0) { t += 24; d = (d + 6) % 7; }
  return `${DAYS[d]} ${formatTime(t)}`;
}
