// Countries shown in the homepage "Our Global Presence" marquee.
// Add a country by appending one entry — the first half of the list scrolls in
// the top row, the second half in the bottom row.
export interface Country {
  flag: string;
  name: string;
}

// Headline figure used in "Students from N+ Countries" and the stats band.
export const countriesServed = 30;

export const globalCountries: Country[] = [
  { flag: "🇮🇳", name: "India" },
  { flag: "🇦🇪", name: "United Arab Emirates" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇴🇲", name: "Oman" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇱🇰", name: "Sri Lanka" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇳🇬", name: "Nigeria" },
  { flag: "🇳🇴", name: "Norway" },
  { flag: "🇨🇭", name: "Switzerland" },
  { flag: "🇶🇦", name: "Qatar" },
  { flag: "🇨🇮", name: "Côte d'Ivoire" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇧🇭", name: "Bahrain" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇧🇪", name: "Belgium" },
  { flag: "🇨🇳", name: "China" },
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇰🇼", name: "Kuwait" },
];
