// Single source of truth for the homepage stats band. The final number is
// rendered into the server HTML (crawlers and no-JS users see it); main.js only
// animates it as a progressive enhancement.
import { countriesServed } from "./countries";

export interface Stat {
  value: number;
  label: string;
}

export const stats: Stat[] = [
  { value: 70, label: "Active Students" },
  { value: 25, label: "Chess Coaches" },
  { value: countriesServed, label: "Countries" },
  { value: 80, label: "Clients" },
];
