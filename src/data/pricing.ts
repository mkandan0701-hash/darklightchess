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

// Owner-set North American prices (NOT conversions). Leave a value as null until
// the academy confirms it: null tiers are not rendered anywhere and are never
// put into schema. Once all three of a currency's tiers are set, the USA/Canada
// pages and /pricing/ show them instead of the indicative rupee conversion.
export interface RegionalPrice {
  currency: "USD" | "CAD";
  symbol: string;
  groupPerClass: number | null; // one live group class (about 60 minutes)
  privatePerHour: number | null; // one-to-one, per hour
  siblingDiscountPercent: number | null;
}

export const regionalPrices: Record<"USD" | "CAD", RegionalPrice> = {
  USD: { currency: "USD", symbol: "$", groupPerClass: null, privatePerHour: null, siblingDiscountPercent: null },
  CAD: { currency: "CAD", symbol: "CA$", groupPerClass: null, privatePerHour: null, siblingDiscountPercent: null },
};

/** The regional price for a currency, only when every tier has been confirmed. */
export const confirmedRegionalPrice = (code: string): RegionalPrice | undefined => {
  const p = regionalPrices[code as "USD" | "CAD"];
  if (!p) return undefined;
  return p.groupPerClass !== null && p.privatePerHour !== null && p.siblingDiscountPercent !== null ? p : undefined;
};

/** "about £9" style string for a currency code. */
export const approxPrice = (code: string) => {
  const c = currencies[code];
  return `about ${c.symbol}${c.approx}`;
};
