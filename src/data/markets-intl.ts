// New Gulf and Europe country pages, kept separate from markets.ts for size.
// Same rules apply: only facts the business has confirmed or that are
// checkable (time zones, federations). Prices come from src/data/pricing.ts.
import type { Market } from "./markets";

const UPDATED = "2026-11-05";
const T = `<a href="/tournament-chess-coaching/">tournament coaching</a>`;
const CREDS = `Marimuthu K represented India at the Olympiad in Greece in 2021, and Mega Chakraborty is an Asian silver medalist who represented India at the World Women Championship in 2024.`;
const COACHES = `${CREDS} Meet all <a href="/coaches/">our coaches</a>.`;
const INTL = "Online (International batch)" as const;

export const intlMarkets: Market[] = [
  {
    slug: "uae",
    path: "/online-chess-classes-uae/",
    published: true,
    countryName: "United Arab Emirates",
    hreflang: "en-AE",
    ogLocale: "en_AE",
    title: "Online Chess Classes in Dubai & UAE | Darklight Chess Academy",
    description:
      "Live online chess classes for kids in Dubai, Abu Dhabi and Sharjah. Only 1½ hours behind India, so after-school slots are easy. Free demo class.",
    eyebrow: "Online Chess Classes · UAE",
    heroTitle: "Online Chess Classes for Kids in Dubai and the <span class='gold'>UAE</span>",
    heroSubtitle:
      "Live coaching from our team in India. The UAE is just 1½ hours behind, so classes fit comfortably after school.",
    answer:
      "Darklight Chess Academy teaches live online chess classes to children in Dubai, Abu Dhabi, Sharjah and across the UAE. India is only 1½ hours ahead of UAE time, so after-school slots are easy to arrange. Lessons start from ₹1,000 per hour (about AED 42), and the first demo class is free.",
    quickFacts: [
      "<strong>Format:</strong> live online, small groups or 1-to-1, on a shared digital board",
      "<strong>Time difference:</strong> UAE (GST, UTC+4) is 1½ hours behind India, with no daylight saving",
      "<strong>Timings:</strong> flexible, set around your child's school day",
      "<strong>Fees:</strong> from ₹1,000 per hour (about AED 42, indicative)",
      "<strong>Levels:</strong> complete beginner to tournament preparation",
      "<strong>Language:</strong> English",
      "<strong>First step:</strong> free demo class with a level assessment",
    ],
    intro: [
      "Darklight Chess Academy is based in Coimbatore, India, and coaches students in the UAE entirely online. Every class is live with a coach on a shared board, not a recorded video, and follows the same structured curriculum we teach at our centres in Coimbatore.",
      "For families in Dubai, Abu Dhabi, Sharjah, Ajman and Al Ain, the biggest practical advantage is the clock. The UAE does not use daylight saving, and the gap to India never changes: India is 1½ hours ahead all year.",
    ],
    sections: [
      {
        eyebrow: "Scheduling",
        heading: "What time are online chess classes for UAE students?",
        paragraphs: [
          "Classes are booked in UAE time and our timings are flexible. A 5:00 pm lesson in Dubai is 6:30 pm in India, so weekday after-school and weekend slots are straightforward. Tell us your child's school hours and preferred days when you book the demo and we will suggest what is open.",
          "School calendars differ between curricula and emirates, so we do not fix a rigid timetable. We plan around yours, including exam periods and school holidays.",
        ],
      },
      {
        eyebrow: "Dubai, Abu Dhabi and Sharjah",
        heading: "Do you teach children in Dubai, Abu Dhabi and Sharjah?",
        paragraphs: [
          `Yes. Because classes are online, the lesson is identical wherever your child lives in the UAE. What differs is where they can play. The UAE Chess Federation and local clubs run tournaments for juniors, and our ${T} can be built around an event your child has entered, with the games reviewed afterwards.`,
          "Many Indian families in the Emirates choose us because the coaches are Indian players who understand the school pressures and the goals of parents who want a structured programme.",
        ],
      },
    ],
    timeZones: [{ zone: "UAE (GST)", standard: 4, note: "No daylight saving time" }],
    exampleZone: "UAE (GST)",
    examples: [
      { day: "Wednesday", hour: 17 },
      { day: "Friday", hour: 16 },
      { day: "Saturday", hour: 10 },
    ],
    chessContext: {
      heading: "Chess Ratings and Events in the UAE",
      paragraphs: [
        "Competitive chess in the UAE is organised through the UAE Chess Federation and local clubs, and international events are rated by FIDE, the world federation. Junior players usually start in age-group tournaments before moving to FIDE-rated play.",
        `Our coaches include ${COACHES}`,
      ],
    },
    proof: { heading: "", items: [] },
    currencies: ["AED"],
    lastUpdated: UPDATED,
    faqs: [
      {
        question: "How much do online chess classes cost in Dubai and the UAE?",
        answer:
          "Lessons start from ₹1,000 per hour, which is about AED 42 at recent exchange rates. The rupee amount is the fixed figure, so the dirham total varies slightly. Siblings learning together get a discount, and the first demo class is free.",
      },
      {
        question: "What time are the classes for students in the UAE?",
        answer:
          "Timings are flexible and booked in UAE time. India is 1½ hours ahead all year, so a 5:00 pm class in Dubai is 6:30 pm in India. Weekday after-school and weekend slots are easy to arrange.",
      },
      {
        question: "Are the classes live or recorded?",
        answer:
          "Live. A coach teaches on a shared digital board and the student plays and asks questions in real time, as a small group or one-to-one.",
      },
      {
        question: "Can beginners join?",
        answer:
          "Yes. We start children at about age 5 with no experience. The free demo includes a level assessment so we can place your child correctly.",
      },
      {
        question: "Do you prepare students for tournaments in the UAE?",
        answer:
          "Yes. Our tournament coaching can be tailored to an event your child has entered, with coaches reviewing the games played afterwards.",
      },
      {
        question: "Do you teach adults too?",
        answer: "Yes. Adults can join as a beginner or improving player in a group batch or one-to-one.",
      },
      {
        question: "How do I book the free demo class?",
        answer:
          "Use the form on this page, which already selects the UAE, or message us on WhatsApp. We confirm a time in UAE time and a coach assesses your child's level.",
      },
    ],
    formMode: INTL,
  },
  {
    slug: "qatar",
    path: "/online-chess-classes-qatar/",
    published: true,
    countryName: "Qatar",
    hreflang: "en-QA",
    ogLocale: "en_QA",
    title: "Online Chess Classes in Qatar | Darklight Chess Academy",
    description:
      "Live online chess classes for children in Doha and across Qatar, timed for Arabia Standard Time. Free demo class, group or 1-to-1.",
    eyebrow: "Online Chess Classes · Qatar",
    heroTitle: "Online Chess Classes for Kids in Doha and <span class='gold'>Qatar</span>",
    heroSubtitle: "Live coaching from India, just 2½ hours apart, so lessons slot in after school.",
    answer:
      "Darklight Chess Academy teaches live online chess classes to children in Doha and across Qatar. Qatar runs on Arabia Standard Time, 2½ hours behind India all year, so after-school lessons are easy to schedule. Lessons start from ₹1,000 per hour (about QAR 41), with a free demo class first.",
    quickFacts: [
      "<strong>Format:</strong> live online, groups or 1-to-1",
      "<strong>Time difference:</strong> Qatar (AST, UTC+3) is 2½ hours behind India, no daylight saving",
      "<strong>Timings:</strong> flexible, around your child's school day",
      "<strong>Fees:</strong> from ₹1,000 per hour (about QAR 41, indicative)",
      "<strong>Levels:</strong> beginner to tournament preparation",
      "<strong>Language:</strong> English",
    ],
    intro: [
      "Families in Doha, Al Rayyan, Al Wakrah and the rest of Qatar learn with Darklight Chess Academy online. Lessons are live with a coach on a shared digital board and follow a structured curriculum from the first moves to tournament play.",
      "Qatar does not change its clocks, so scheduling is simple and stable through the year. A 5:00 pm lesson in Doha is 7:30 pm in India.",
    ],
    sections: [
      {
        eyebrow: "Scheduling",
        heading: "What time are online chess classes for Qatar students?",
        paragraphs: [
          "Our timings are flexible. Most families choose a weekday after-school window or a weekend morning, and we confirm the slot in Qatar time when you book the free demo. Because there is no daylight saving change on either end, the arrangement stays the same all year.",
        ],
      },
      {
        eyebrow: "Local chess",
        heading: "Can my child play tournaments in Qatar while learning online?",
        paragraphs: [
          `Yes. Learning online does not limit where your child competes. The Qatar Chess Association is the national body, and we can focus our ${T} on an event your child is entering.`,
        ],
      },
    ],
    timeZones: [{ zone: "Qatar (AST)", standard: 3, note: "No daylight saving time" }],
    exampleZone: "Qatar (AST)",
    examples: [
      { day: "Wednesday", hour: 17 },
      { day: "Friday", hour: 16 },
      { day: "Saturday", hour: 10 },
    ],
    chessContext: {
      heading: "Chess in Qatar",
      paragraphs: [`The Qatar Chess Association runs the national chess scene, and FIDE rates international events. Our coaches include ${COACHES}`],
    },
    proof: { heading: "", items: [] },
    currencies: ["QAR"],
    lastUpdated: UPDATED,
    faqs: [
      {
        question: "How much are online chess classes in Qatar?",
        answer:
          "Lessons start from ₹1,000 per hour, about QAR 41 at recent rates. The rupee figure is fixed, so the riyal amount can vary slightly. Siblings get a discount and the demo is free.",
      },
      {
        question: "What time are classes in Qatar?",
        answer: "Timings are flexible and in Qatar time. India is 2½ hours ahead, so 5:00 pm in Doha is 7:30 pm in India.",
      },
      {
        question: "Are classes live?",
        answer: "Yes, live with a coach on a shared digital board, in a small group or one-to-one.",
      },
      {
        question: "What age can my child start?",
        answer: "From about age 5. Complete beginners are welcome, and the demo includes a level assessment.",
      },
      {
        question: "How do I book a trial class?",
        answer: "Use the form on this page, which already selects Qatar, or message us on WhatsApp.",
      },
    ],
    formMode: INTL,
  },
  {
    slug: "saudi-arabia",
    path: "/online-chess-classes-saudi-arabia/",
    published: true,
    countryName: "Saudi Arabia",
    hreflang: "en-SA",
    ogLocale: "en_SA",
    title: "Online Chess Classes in Saudi Arabia | Darklight Chess Academy",
    description:
      "Live online chess classes for children in Riyadh, Jeddah, Dammam and across Saudi Arabia, in Arabia Standard Time. Free demo class.",
    eyebrow: "Online Chess Classes · Saudi Arabia",
    heroTitle: "Online Chess Classes for Kids in <span class='gold'>Saudi Arabia</span>",
    heroSubtitle: "Live coaching from India for families in Riyadh, Jeddah, Dammam and beyond.",
    answer:
      "Darklight Chess Academy teaches live online chess classes to children in Riyadh, Jeddah, Dammam and across Saudi Arabia. Saudi time is 2½ hours behind India all year, so after-school lessons are easy to arrange. Lessons start from ₹1,000 per hour (about SAR 42), and the first demo class is free.",
    quickFacts: [
      "<strong>Format:</strong> live online, groups or 1-to-1",
      "<strong>Time difference:</strong> Saudi Arabia (AST, UTC+3) is 2½ hours behind India, no daylight saving",
      "<strong>Timings:</strong> flexible, around school and your family's week",
      "<strong>Fees:</strong> from ₹1,000 per hour (about SAR 42, indicative)",
      "<strong>Language:</strong> English",
    ],
    intro: [
      "Families in Riyadh, Jeddah, Dammam, Al Khobar and across the Kingdom learn with Darklight Chess Academy online. Classes are live on a shared digital board and follow a structured curriculum from beginner to tournament level.",
      "Saudi Arabia does not use daylight saving, so a lesson at 5:00 pm in Riyadh is 7:30 pm in India, all year.",
    ],
    sections: [
      {
        eyebrow: "Scheduling",
        heading: "What time are online chess classes for students in Riyadh and Jeddah?",
        paragraphs: [
          "Timings are flexible. Many families prefer Friday or Saturday sessions or a weekday evening. We confirm the exact slot in Saudi time when you book the demo.",
        ],
      },
      {
        eyebrow: "Local chess",
        heading: "Which events can students prepare for?",
        paragraphs: [
          `The Saudi Chess Federation is the national body, and FIDE rates international events. Online coaching does not limit where your child plays. Our ${T} can be built around any event your child enters.`,
        ],
      },
    ],
    timeZones: [{ zone: "Saudi Arabia (AST)", standard: 3, note: "No daylight saving time" }],
    exampleZone: "Saudi Arabia (AST)",
    examples: [
      { day: "Friday", hour: 16 },
      { day: "Saturday", hour: 10 },
      { day: "Monday", hour: 18 },
    ],
    chessContext: {
      heading: "Chess in Saudi Arabia",
      paragraphs: [`Our coaches include ${COACHES}`],
    },
    proof: { heading: "", items: [] },
    currencies: ["SAR"],
    lastUpdated: UPDATED,
    faqs: [
      {
        question: "How much are online chess lessons in Saudi Arabia?",
        answer:
          "Lessons start from ₹1,000 per hour, about SAR 42 at recent rates. The rupee figure is fixed, so the riyal amount varies slightly. Siblings get a discount and the demo is free.",
      },
      {
        question: "What time are classes in Riyadh and Jeddah?",
        answer:
          "Flexible, in Saudi time. India is 2½ hours ahead, so 5:00 pm in Riyadh is 7:30 pm in India. Many families choose Friday or Saturday or a weekday evening.",
      },
      {
        question: "Are the lessons live?",
        answer: "Yes, a live coach on a shared digital board in small groups or one-to-one.",
      },
      {
        question: "Can beginners join?",
        answer: "Yes, from about age 5. A level assessment is part of the free demo.",
      },
      {
        question: "How do I book?",
        answer: "Use the form on this page, which selects Saudi Arabia, or message us on WhatsApp.",
      },
    ],
    formMode: INTL,
  },
  {
    slug: "kuwait-bahrain-oman",
    path: "/online-chess-classes-kuwait-bahrain-oman/",
    published: true,
    countryName: "Oman",
    hreflang: "",
    ogLocale: "en_OM",
    title: "Chess Classes in Kuwait, Bahrain & Oman | Darklight",
    description:
      "Live online chess classes for kids in Kuwait, Bahrain and Muscat, Oman. 1½ to 2½ hours behind India. Free demo class.",
    eyebrow: "Online Chess Classes · Kuwait, Bahrain, Oman",
    heroTitle: "Online Chess Classes in <span class='gold'>Kuwait, Bahrain and Oman</span>",
    heroSubtitle: "Live coaching from India for families across the Gulf, in your own time zone.",
    answer:
      "Darklight Chess Academy teaches live online chess classes to children in Kuwait, Bahrain and Oman. India is 2½ hours ahead of Kuwait and Bahrain and 1½ hours ahead of Oman, and none of them observe daylight saving. Lessons start from ₹1,000 per hour, and the first demo class is free.",
    quickFacts: [
      "<strong>Kuwait and Bahrain:</strong> UTC+3, 2½ hours behind India",
      "<strong>Oman:</strong> UTC+4, 1½ hours behind India",
      "<strong>Timings:</strong> flexible, set around your child's school",
      "<strong>Fees:</strong> from ₹1,000 per hour (about KWD 3.5, BHD 4.2, OMR 4.3, indicative)",
      "<strong>Language:</strong> English",
    ],
    intro: [
      "Students from Oman and the wider Gulf learn with us online. Classes are live, on a shared digital board, and follow a structured curriculum from the basics to tournament preparation.",
      "This is one combined page because the situation is the same in all three countries: a small, stable time gap to India and no daylight saving changes.",
    ],
    sections: [
      {
        eyebrow: "Scheduling",
        heading: "What time are classes in Kuwait, Bahrain and Muscat?",
        paragraphs: [
          "Our timings are flexible. A 5:00 pm lesson in Kuwait or Bahrain is 7:30 pm in India, and a 5:00 pm lesson in Muscat is 6:30 pm in India. Tell us your child's school hours when you book the demo and we will confirm a slot in your local time.",
        ],
      },
    ],
    timeZones: [
      { zone: "Kuwait", standard: 3, note: "No daylight saving time" },
      { zone: "Bahrain", standard: 3, note: "No daylight saving time" },
      { zone: "Oman (Muscat)", standard: 4, note: "No daylight saving time" },
    ],
    exampleZone: "Oman (Muscat)",
    examples: [
      { day: "Wednesday", hour: 17 },
      { day: "Friday", hour: 16 },
    ],
    chessContext: {
      heading: "Chess in the Gulf",
      paragraphs: [
        `Each country has its own national chess body, and FIDE rates international events. Online coaching does not limit where your child plays. Our ${T} can be tailored to an event your child has entered. ${COACHES}`,
      ],
    },
    proof: { heading: "", items: [] },
    currencies: ["KWD", "BHD", "OMR"],
    lastUpdated: UPDATED,
    faqs: [
      {
        question: "How much are online chess classes in Kuwait, Bahrain and Oman?",
        answer:
          "Lessons start from ₹1,000 per hour. At recent rates that is roughly KWD 3.5, BHD 4.2 or OMR 4.3. The rupee figure is fixed, so the local amount varies slightly.",
      },
      {
        question: "What time are the classes?",
        answer:
          "Timings are flexible and in your local time. India is 2½ hours ahead of Kuwait and Bahrain and 1½ hours ahead of Oman.",
      },
      {
        question: "Are the classes live?",
        answer: "Yes, with a live coach on a shared digital board, in small groups or one-to-one.",
      },
      {
        question: "Can my child start as a complete beginner?",
        answer: "Yes, from about age 5. The free demo includes a level assessment.",
      },
    ],
    formMode: INTL,
  },
  {
    slug: "ireland",
    path: "/online-chess-classes-ireland/",
    published: true,
    countryName: "Ireland",
    hreflang: "en-IE",
    ogLocale: "en_IE",
    title: "Online Chess Classes in Ireland | Darklight Chess Academy",
    description:
      "Live online chess lessons for children in Dublin, Cork and across Ireland, timed for GMT and IST. Free demo class, group or 1-to-1.",
    eyebrow: "Online Chess Classes · Ireland",
    heroTitle: "Online Chess Lessons for Children in <span class='gold'>Ireland</span>",
    heroSubtitle: "Live coaching from India, scheduled around Irish school hours.",
    answer:
      "Darklight Chess Academy teaches live online chess lessons to children across Ireland, in English. India is 5½ hours ahead of Irish winter time and 4½ hours ahead in summer, so after-school and weekend slots are available. Lessons start from ₹1,000 per hour (about €10), and the first demo class is free.",
    quickFacts: [
      "<strong>Format:</strong> live online, groups or 1-to-1",
      "<strong>Time zone:</strong> GMT in winter, Irish Summer Time (UTC+1) in summer",
      "<strong>Timings:</strong> flexible, around school",
      "<strong>Fees:</strong> from ₹1,000 per hour (about €10, indicative)",
      "<strong>Language:</strong> English",
    ],
    intro: [
      "Families in Dublin, Cork, Galway, Limerick and across Ireland, including Northern Ireland, can learn with Darklight Chess Academy online. Lessons are live with a coach on a shared digital board and follow a structured curriculum.",
      "Ireland follows the same clock as the UK, so the gap to India is 5½ hours in winter and 4½ hours in summer.",
    ],
    sections: [
      {
        eyebrow: "Scheduling",
        heading: "What time are online chess lessons for Irish students?",
        paragraphs: [
          "Timings are flexible. A 5:00 pm weekday lesson in Dublin is 10:30 pm in India in winter and 9:30 pm in summer, which suits our coaching hours. Weekend mornings are the other popular option. We confirm slots in Irish time when you book the demo.",
        ],
      },
      {
        eyebrow: "Local chess",
        heading: "Which Irish events and ratings can a student aim for?",
        paragraphs: [
          `The Irish Chess Union is the national federation, and junior and school events run through the year. Our ${T} can be tailored to an event your child has entered, and the games reviewed afterwards. See the <a href="https://www.icu.ie/" rel="noopener">Irish Chess Union</a> for current events.`,
        ],
      },
    ],
    timeZones: [{ zone: "Ireland (GMT / IST)", standard: 0, daylight: 1 }],
    exampleZone: "Ireland (GMT / IST)",
    examples: [
      { day: "Saturday", hour: 10 },
      { day: "Wednesday", hour: 17 },
    ],
    dstNote: "Irish Summer Time runs from the last Sunday in March to the last Sunday in October. India does not change its clocks.",
    chessContext: {
      heading: "Chess in Ireland",
      paragraphs: [`Our coaches include ${COACHES}`],
    },
    proof: { heading: "", items: [] },
    currencies: ["EUR", "GBP"],
    lastUpdated: UPDATED,
    faqs: [
      {
        question: "How much do online chess lessons cost in Ireland?",
        answer:
          "Lessons start from ₹1,000 per hour, about €10 at recent rates. The rupee figure is fixed, so the euro amount varies slightly. Siblings get a discount and the first demo is free.",
      },
      {
        question: "What time are lessons in Irish time?",
        answer:
          "Flexible. India is 5½ hours ahead in winter and 4½ in summer, so a 10:00 am Saturday lesson in Dublin is 3:30 pm in India in winter.",
      },
      {
        question: "Do you teach children in Northern Ireland too?",
        answer: "Yes. Lessons are online and use the same clock as the rest of the island.",
      },
      {
        question: "Can beginners start?",
        answer: "Yes, from about age 5, and the demo includes a level assessment.",
      },
      {
        question: "How do I book?",
        answer: "Use the form on this page, which selects Ireland, or message us on WhatsApp.",
      },
    ],
    formMode: INTL,
  },
  {
    slug: "germany",
    path: "/online-chess-classes-germany/",
    published: true,
    countryName: "Germany",
    hreflang: "en-DE",
    ogLocale: "en_DE",
    title: "Chess Lessons in English for Kids in Germany | Darklight",
    description:
      "Live online chess lessons in English for children in Germany. Partner of the Erlangen & Herzogenaurach Tamil Sangam. CET timings, free demo class.",
    eyebrow: "Online Chess Classes · Germany",
    heroTitle: "Online Chess Lessons in English for Kids in <span class='gold'>Germany</span>",
    heroSubtitle: "Live coaching from India, timed for German school days.",
    answer:
      "Darklight Chess Academy teaches live online chess lessons in English to children in Germany, including Tamil-speaking families. Germany is 4½ hours behind India in winter and 3½ hours behind in summer, so afternoon and weekend slots work well. Lessons start from ₹1,000 per hour (about €10), with a free demo class first.",
    quickFacts: [
      "<strong>Format:</strong> live online, groups or 1-to-1",
      "<strong>Time zone:</strong> CET (UTC+1) in winter, CEST (UTC+2) in summer",
      "<strong>Fees:</strong> from ₹1,000 per hour (about €10, indicative)",
      "<strong>Language:</strong> English",
      "<strong>Community:</strong> partner of the Erlangen &amp; Herzogenaurach Tamil Sangam",
    ],
    intro: [
      "Many expat and Indian-origin families in Germany look for chess lessons in English rather than German. Darklight Chess Academy teaches live online, in English, with a coach on a shared digital board.",
      "We are a partner of the Erlangen &amp; Herzogenaurach Tamil Sangam, and students from Germany are among those who join our online classes.",
    ],
    sections: [
      {
        eyebrow: "Scheduling",
        heading: "What time are classes for students in Germany?",
        paragraphs: [
          "Timings are flexible. A 4:00 pm weekday lesson in Germany is 8:30 pm in India in winter and 7:30 pm in summer. Saturday and Sunday mornings work for many families. We confirm slots in German time when you book the demo.",
        ],
      },
      {
        eyebrow: "Ratings",
        heading: "How do ratings work in Germany, and can my child still play locally?",
        paragraphs: [
          `The Deutscher Schachbund (German Chess Federation) maintains the DWZ rating system, and FIDE ratings apply internationally. Joining a local club for league play is fully compatible with online coaching. Many families use us for structured training and the club for games. See the <a href="https://www.schachbund.de/" rel="noopener">Deutscher Schachbund</a> for current events.`,
        ],
      },
    ],
    timeZones: [{ zone: "Germany (CET / CEST)", standard: 1, daylight: 2 }],
    exampleZone: "Germany (CET / CEST)",
    examples: [
      { day: "Saturday", hour: 10 },
      { day: "Wednesday", hour: 16 },
    ],
    dstNote: "Central European Summer Time runs from the last Sunday in March to the last Sunday in October. India does not change its clocks.",
    chessContext: {
      heading: "Chess in Germany",
      paragraphs: [`Our coaches include ${COACHES}`],
    },
    proof: { heading: "", items: [] },
    currencies: ["EUR"],
    lastUpdated: UPDATED,
    faqs: [
      {
        question: "Do you teach chess in English for children in Germany?",
        answer: "Yes. All lessons are in English, live with a coach, as a small group or one-to-one.",
      },
      {
        question: "How much do online chess lessons cost?",
        answer:
          "Lessons start from ₹1,000 per hour, about €10 at recent rates. The rupee figure is fixed, so the euro amount varies slightly. Siblings get a discount.",
      },
      {
        question: "Is there a Tamil-speaking option?",
        answer:
          "Lessons are taught in English. We are a partner of the Erlangen & Herzogenaurach Tamil Sangam and welcome Tamil families.",
      },
      {
        question: "What time are classes?",
        answer: "Flexible, in German time. India is 4½ hours ahead in winter and 3½ in summer.",
      },
      {
        question: "Can my child play in a German club as well?",
        answer: "Yes. Club play and online coaching complement each other.",
      },
    ],
    formMode: INTL,
  },
  {
    slug: "netherlands",
    path: "/online-chess-classes-netherlands/",
    published: true,
    countryName: "Netherlands",
    hreflang: "en-NL",
    ogLocale: "en_NL",
    title: "Chess Lessons in English, Netherlands | Darklight Chess Academy",
    description:
      "Live online chess lessons in English for expat and international families in Amsterdam, Rotterdam, The Hague and Eindhoven. Free demo class.",
    eyebrow: "Online Chess Classes · Netherlands",
    heroTitle: "Online Chess Lessons in English for Kids in the <span class='gold'>Netherlands</span>",
    heroSubtitle: "Live coaching from India for expat and international families.",
    answer:
      "Darklight Chess Academy teaches live online chess lessons in English to children in the Netherlands, including expat families in Amsterdam, Rotterdam, The Hague and Eindhoven. The Netherlands is 4½ hours behind India in winter and 3½ hours behind in summer. Lessons start from ₹1,000 per hour (about €10), and the first demo class is free.",
    quickFacts: [
      "<strong>Format:</strong> live online, groups or 1-to-1",
      "<strong>Time zone:</strong> CET (UTC+1) in winter, CEST (UTC+2) in summer",
      "<strong>Fees:</strong> from ₹1,000 per hour (about €10, indicative)",
      "<strong>Language:</strong> English",
    ],
    intro: [
      "Expat families in the Netherlands often want lessons in English that fit around Dutch school days. Darklight Chess Academy teaches live online, with a coach on a shared digital board, from complete beginner to tournament level.",
    ],
    sections: [
      {
        eyebrow: "Scheduling",
        heading: "What time are online chess lessons for students in the Netherlands?",
        paragraphs: [
          "Timings are flexible. A 4:00 pm weekday lesson in Amsterdam is 8:30 pm in India in winter and 7:30 pm in summer. Weekend mornings also work. We confirm slots in Dutch time when you book the demo.",
        ],
      },
      {
        eyebrow: "Local chess",
        heading: "Can my child play in Dutch clubs and tournaments?",
        paragraphs: [
          `The Royal Dutch Chess Federation (KNSB) runs the national structure of clubs and competitions, with junior events as well. Online coaching works well alongside a local club. See the <a href="https://www.schaakbond.nl/" rel="noopener">KNSB</a> for current events.`,
        ],
      },
    ],
    timeZones: [{ zone: "Netherlands (CET / CEST)", standard: 1, daylight: 2 }],
    exampleZone: "Netherlands (CET / CEST)",
    examples: [
      { day: "Saturday", hour: 10 },
      { day: "Wednesday", hour: 16 },
    ],
    dstNote: "Central European Summer Time runs from the last Sunday in March to the last Sunday in October. India does not change its clocks.",
    chessContext: {
      heading: "Chess in the Netherlands",
      paragraphs: [`Our coaches include ${COACHES}`],
    },
    proof: { heading: "", items: [] },
    currencies: ["EUR"],
    lastUpdated: UPDATED,
    faqs: [
      {
        question: "Do you teach chess in English in the Netherlands?",
        answer: "Yes, all lessons are in English, live with a coach.",
      },
      {
        question: "How much do lessons cost?",
        answer: "From ₹1,000 per hour, about €10 at recent rates. Siblings get a discount and the first demo is free.",
      },
      {
        question: "What time are classes?",
        answer: "Flexible, in Dutch time. India is 4½ hours ahead in winter and 3½ in summer.",
      },
      {
        question: "Can beginners join?",
        answer: "Yes, from about age 5. The demo includes a level assessment.",
      },
    ],
    formMode: INTL,
  },
  {
    slug: "europe",
    path: "/online-chess-classes-europe/",
    published: true,
    countryName: "Switzerland",
    hreflang: "",
    ogLocale: "en_CH",
    title: "Online Chess Classes for Kids in Europe | Darklight Chess Academy",
    description:
      "Live online chess lessons in English for children across Europe: Ireland, Germany, Netherlands, Switzerland, Belgium, Norway. Free demo class.",
    eyebrow: "Online Chess Classes · Europe",
    heroTitle: "Online Chess Classes for Kids Across <span class='gold'>Europe</span>",
    heroSubtitle: "Live coaching in English from India, timed to your country's school day.",
    answer:
      "Darklight Chess Academy teaches live online chess lessons in English to children across Europe, including Ireland, Germany, the Netherlands, Switzerland, Belgium and Norway. Central Europe is 3½ to 4½ hours behind India depending on the season. Lessons start from ₹1,000 per hour, and the first demo class is free.",
    quickFacts: [
      "<strong>Format:</strong> live online, groups or 1-to-1",
      "<strong>Time zones:</strong> GMT/BST in Ireland, CET/CEST in Germany, the Netherlands, Switzerland, Belgium and Norway",
      "<strong>Fees:</strong> from ₹1,000 per hour (about €10, CHF 9.5, NOK 115, indicative)",
      "<strong>Language:</strong> English",
    ],
    intro: [
      "Students from Germany, the Netherlands, Belgium, Switzerland and Norway are among those who learn with us online. Because lessons are in English and flexible in timing, they suit expat and international families who cannot find English-language coaching locally.",
      `Country pages: <a href="/online-chess-classes-ireland/">Ireland</a>, <a href="/online-chess-classes-germany/">Germany</a>, <a href="/online-chess-classes-netherlands/">Netherlands</a> and the <a href="/online-chess-classes-uk/">UK</a>. Short notes for the others are below.`,
    ],
    sections: [
      {
        eyebrow: "Switzerland",
        heading: "Online chess lessons in English in Switzerland",
        paragraphs: [
          "Switzerland uses CET/CEST, the same as Germany, so India is 4½ hours ahead in winter and 3½ hours ahead in summer. Fees are from ₹1,000 per hour.",
        ],
      },
      {
        eyebrow: "Belgium",
        heading: "Online chess lessons in English in Belgium",
        paragraphs: [
          "Belgium also uses CET/CEST. English-language coaching suits families in Brussels and international schools, and your child can play in local clubs alongside our lessons.",
        ],
      },
      {
        eyebrow: "Norway",
        heading: "Online chess lessons in English in Norway",
        paragraphs: [
          "Norway uses CET/CEST too. Lessons in English suit families who are new to the country, and your child can enter local junior events alongside our coaching.",
        ],
      },
    ],
    timeZones: [
      { zone: "Ireland (GMT / IST)", standard: 0, daylight: 1 },
      { zone: "Central Europe (CET / CEST)", standard: 1, daylight: 2, note: "Germany, Netherlands, Switzerland, Belgium, Norway" },
    ],
    exampleZone: "Central Europe (CET / CEST)",
    examples: [
      { day: "Saturday", hour: 10 },
      { day: "Wednesday", hour: 16 },
    ],
    dstNote: "European summer time runs from the last Sunday in March to the last Sunday in October. India does not change its clocks.",
    chessContext: {
      heading: "Chess Across Europe",
      paragraphs: [`Our coaches include ${COACHES}`],
    },
    proof: { heading: "", items: [] },
    currencies: ["EUR", "CHF", "NOK"],
    lastUpdated: UPDATED,
    faqs: [
      {
        question: "Do you teach in English in Europe?",
        answer: "Yes, all lessons are in English.",
      },
      {
        question: "How much do lessons cost in Europe?",
        answer: "From ₹1,000 per hour, about €10, CHF 9.5 or NOK 115 at recent rates. Siblings get a discount and the first demo is free.",
      },
      {
        question: "What time are lessons?",
        answer: "Flexible, in your local time. Central Europe is 4½ hours behind India in winter and 3½ in summer.",
      },
      {
        question: "Which countries do your students come from?",
        answer: "Our students join from more than 30 countries, including Germany, the Netherlands, Belgium, Switzerland and Norway.",
      },
    ],
    formMode: INTL,
  },
];
