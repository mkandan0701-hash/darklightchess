// Pricing facts. The ONLY confirmed price is INR 1,000 per hour (owner-confirmed
// 2026-11-05). Other currencies are indicative conversions, labelled as such
// everywhere they appear. Re-check the rounded figures against live exchange
// rates before relying on them, and update PRICING_UPDATED when you do.
export const PRICE_INR_PER_HOUR = 1000;
export const PRICING_UPDATED = "2026-11-05";

export interface CurrencyApprox {
  code: string;
  label: string;
  symbol: string;
  approx: number; // rounded indicative figure for INR 1,000
}

export const currencies: Record<string, CurrencyApprox> = {
  GBP: { code: "GBP", label: "British pounds", symbol: "£", approx: 9 },
  AED: { code: "AED", label: "UAE dirhams", symbol: "AED ", approx: 42 },
  QAR: { code: "QAR", label: "Qatari riyals", symbol: "QAR ", approx: 41 },
  SAR: { code: "SAR", label: "Saudi riyals", symbol: "SAR ", approx: 42 },
  KWD: { code: "KWD", label: "Kuwaiti dinars", symbol: "KWD ", approx: 3.5 },
  BHD: { code: "BHD", label: "Bahraini dinars", symbol: "BHD ", approx: 4.2 },
  OMR: { code: "OMR", label: "Omani rials", symbol: "OMR ", approx: 4.3 },
  EUR: { code: "EUR", label: "euros", symbol: "€", approx: 10 },
  CHF: { code: "CHF", label: "Swiss francs", symbol: "CHF ", approx: 9.5 },
  NOK: { code: "NOK", label: "Norwegian kroner", symbol: "NOK ", approx: 115 },
  USD: { code: "USD", label: "US dollars", symbol: "$", approx: 11 },
  CAD: { code: "CAD", label: "Canadian dollars", symbol: "CA$", approx: 15 },
};

export const inr = `₹${PRICE_INR_PER_HOUR.toLocaleString("en-IN")}`;

/** "about £9" style string for a currency code. */
export const approxPrice = (code: string) => {
  const c = currencies[code];
  return `about ${c.symbol}${c.approx}`;
};
