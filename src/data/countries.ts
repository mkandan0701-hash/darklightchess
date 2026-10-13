// Countries shown in the homepage "Our Global Presence" marquee.
// Add a country by appending one entry — the marquee repeats items as needed.
export interface Country {
  flag: string;
  name: string;
}

export const globalCountries: Country[] = [
  { flag: "🇮🇳", name: "India" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇦🇪", name: "United Arab Emirates" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇦🇺", name: "Australia" },
];
