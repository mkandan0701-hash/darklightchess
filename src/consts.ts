// Single source of truth for NAP (Name/Address/Phone) and other business
// identity data. Every component/page should import from here instead of
// hardcoding these values, so they can never drift out of sync again.

export const SITE_NAME = "Darklight Chess Academy";
export const SITE_URL = "https://www.darklightchess.com";
export const SITE_TAGLINE = "Because every move matters.";

export const PHONE_DISPLAY = "+91 83001 55259";
export const PHONE_TEL = "+918300155259";
export const WHATSAPP_NUMBER = "918300155259";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "darklightchess64@gmail.com";

export interface Branch {
  id: string;
  label: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  mapEmbedSrc: string;
  directionsUrl: string;
}

// NOTE: 641011 confirmed correct for the Saibaba Colony branch (2026-09-05).
// The site previously had a mismatch here — printed text said 641011 while
// both "Get Directions" links pointed to 641038. Keep this single value as
// the only source for that postal code going forward.
export const BRANCH_SAIBABA_COLONY: Branch = {
  id: "saibaba-colony",
  label: "Branch 1 — Saibaba Colony",
  streetAddress: "4th Street, NSR Rd, Saibaba Colony",
  addressLocality: "Coimbatore",
  addressRegion: "Tamil Nadu",
  postalCode: "641011",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=DARKLIGHT+CHESS+ACADEMY,+4th+Street,+NSR+Rd,+Saibaba+Colony,+Coimbatore&z=16&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=DARKLIGHT+CHESS+ACADEMY,+4th+Street,+NSR+Rd,+Saibaba+Colony,+Coimbatore,+Tamil+Nadu+641011",
};

export const BRANCH_SOWRIPALAYAM: Branch = {
  id: "sowripalayam",
  label: "Branch 2 — Sowripalayam",
  streetAddress: "VV Complex, 14, Sowripalayam Rd, opp. Kendriya Vidyalaya, Rukmani Nagar",
  addressLocality: "Coimbatore",
  addressRegion: "Tamil Nadu",
  postalCode: "641028",
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Darklight+Chess+Academy+Puliyakulam@10.9973279,76.989445&z=17&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Darklight+Chess+Academy+-+Puliyakulam,+VV+COMPLEX,+14,+Sowripalayam+Rd,+Rukmani+Nagar,+Coimbatore,+Tamil+Nadu+641028&destination_place_id=ChIJvZZJk6JZuDsRVCl1kDZbLsc",
};

export const BRANCHES: Branch[] = [BRANCH_SAIBABA_COLONY, BRANCH_SOWRIPALAYAM];

// Chosen as the single primary LocalBusiness location per owner decision (2026-09-05).
export const PRIMARY_BRANCH: Branch = BRANCH_SAIBABA_COLONY;

// TODO: confirm actual weekly opening hours with the business owner before
// adding an `openingHoursSpecification` to LocalBusiness schema. Do not
// invent hours — none are published anywhere on the current site.
export const OPENING_HOURS: string[] | null = null;

export const SOCIALS = {
  instagram: "https://www.instagram.com/darklightchessacademy_official/",
  facebook: "https://www.facebook.com/profile.php?id=61561127117854",
  youtube: "https://www.youtube.com/@DarklightChess-64",
  linkedin: "https://www.linkedin.com/company/103071749/",
};

export const LOGO_PATH = "/assets/images/logo.png";
export const DEFAULT_OG_IMAGE = "/assets/images/hero-kid-web.jpg";
