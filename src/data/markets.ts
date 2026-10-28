// Country landing pages for international online coaching. Every claim here
// must be verifiable from the existing site (homepage achievements, testimonials,
// coach profiles) or be general, checkable fact (time zones, federations).
// Do NOT add prices, currencies, class timetables or results that the business
// hasn't confirmed.
//
// `published: false` builds the page with noindex and keeps it out of the
// sitemap, hreflang cluster and navigation (see src/lib/seo.ts).

export interface TimeZoneRow {
  zone: string;
  standard: number; // UTC offset in hours
  daylight?: number; // omitted where the zone doesn't observe daylight time
  note?: string;
}

export interface ProofItem {
  text: string;
  cite?: string; // testimonial attribution, shown verbatim
  image?: string;
  imageAlt?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Market {
  slug: string;
  path: string;
  published: boolean;
  countryName: string; // must match an option in the enquiry form's Country select
  hreflang: string;
  ogLocale: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string; // trusted HTML (gold span)
  heroSubtitle: string;
  intro: string[]; // trusted HTML
  timeZones: TimeZoneRow[];
  exampleZone?: string; // which timeZones row the example table converts from
  examples: { day: string; hour: number }[];
  dstNote?: string;
  chessContext: { heading: string; paragraphs: string[] }; // trusted HTML
  proof: { heading: string; items: ProofItem[] };
  faqs: Faq[];
  formMode: "Online (India)" | "Online (International batch)";
}

const TOURNAMENT_LINK = `<a href="/tournament-chess-coaching/">tournament coaching</a>`;

export const markets: Market[] = [
  {
    slug: "usa",
    path: "/online-chess-classes-usa/",
    published: true,
    countryName: "United States",
    hreflang: "en-US",
    ogLocale: "en_US",
    title: "Online Chess Classes for Kids, USA | Darklight Chess Academy",
    description:
      "Live online chess classes for US students, scheduled around Eastern, Central, Mountain and Pacific time. Group or 1-to-1, beginner to tournament level.",
    eyebrow: "Online Chess Classes · United States",
    heroTitle: "Online Chess Classes for Kids in the <span class='gold'>USA</span>",
    heroSubtitle:
      "Live coaching from our team in India, scheduled around US time zones — for complete beginners through to students entering US tournaments.",
    intro: [
      "Darklight Chess Academy is based in Coimbatore, India, and coaches students in the United States entirely online. Every class is live with a coach on a shared digital board — not pre-recorded video — and runs as a small group batch or a one-to-one session.",
      "The practical question for US families is timing. India is 9½ to 13½ hours ahead of the continental US, depending on your zone and the time of year, so classes are arranged around your local day. Tell us your time zone and preferred days when you book the free demo class, and we'll confirm which slots are open.",
    ],
    timeZones: [
      { zone: "Eastern (ET)", standard: -5, daylight: -4 },
      { zone: "Central (CT)", standard: -6, daylight: -5 },
      { zone: "Mountain (MT)", standard: -7, daylight: -6, note: "Most of Arizona stays on standard time" },
      { zone: "Pacific (PT)", standard: -8, daylight: -7 },
    ],
    exampleZone: "Eastern (ET)",
    examples: [
      { day: "Saturday", hour: 9 },
      { day: "Sunday", hour: 10 },
      { day: "Wednesday", hour: 17 },
    ],
    dstNote:
      "US daylight saving time runs from the second Sunday in March to the first Sunday in November. India doesn't change its clocks, so the gap to Indian time is one hour smaller during US daylight time. Alaska and Hawaii are further behind — ask us about slots.",
    chessContext: {
      heading: "Chess Ratings and Tournaments in the US",
      paragraphs: [
        "Most over-the-board tournaments in the United States are rated by US Chess, the national federation, and larger international events may also be FIDE-rated. For many children, school (scholastic) events are the first competitive step.",
        `Online coaching doesn't limit where your child competes. Our ${TOURNAMENT_LINK} can be built around a specific event your child has registered for, and coaches review their own tournament games afterwards to find recurring mistakes.`,
      ],
    },
    proof: {
      heading: "Recent Results From Our Students at US Events",
      items: [
        {
          text: "Harinandan — 1st place, USA Chess Festival.",
          image: "/assets/images/poster-harinandan.jpg",
          imageAlt: "Harinandan – 1st place, USA Chess Festival",
        },
        {
          text: "Harinanthan — Continental Chess Concord Tournament, California.",
          image: "/assets/images/poster-harinanthan.jpg",
          imageAlt: "Harinanthan – Continental Chess Concord Tournament, California",
        },
        {
          text: "Aayush — 1st place in a Silver Knight tournament, USA.",
          image: "/assets/images/gallery-a11.jpg",
          imageAlt: "Aayush – 1st place in Silver Knight tournament, USA",
        },
        {
          text: "Aayush — champion at a states tournament, USA.",
          image: "/assets/images/gallery-new1.jpg",
          imageAlt: "Champion Aayush – states tournament, USA",
        },
      ],
    },
    faqs: [
      {
        question: "What time are online chess classes for students in the US?",
        answer:
          "Classes are booked in your local time, from the slots our coaches have open. India is 9½–13½ hours ahead of the continental US, so a 9:00 am Saturday class in New York is 7:30 pm Saturday in India in winter (6:30 pm in summer). Share your time zone and preferred days when you book the free demo and we'll confirm what's available.",
      },
      {
        question: "Can you coach students in every US time zone?",
        answer:
          "Yes. Classes are online, so the only constraint is timing — we schedule around Eastern, Central, Mountain and Pacific time. One of our students' recent results came at the Continental Chess Concord Tournament in California.",
      },
      {
        question: "Do you prepare students for US Chess–rated tournaments?",
        answer:
          "Yes. Tournament coaching can be built around a specific event your child has entered, US Chess–rated or not, and includes reviewing their own games afterwards. A Darklight student recently took 1st place at the USA Chess Festival.",
      },
    ],
    formMode: "Online (International batch)",
  },
  {
    slug: "uk",
    path: "/online-chess-classes-uk/",
    published: true,
    countryName: "United Kingdom",
    hreflang: "en-GB",
    ogLocale: "en_GB",
    title: "Online Chess Lessons for Kids in the UK | Darklight Chess Academy",
    description:
      "Live online chess lessons for children and adults in the UK, timed around GMT and BST. Group or one-to-one coaching from beginner to junior tournament level.",
    eyebrow: "Online Chess Lessons · United Kingdom",
    heroTitle: "Online Chess Lessons for Children in the <span class='gold'>UK</span>",
    heroSubtitle:
      "Live, interactive lessons with our coaching team in India — timed for UK families, whether your child is just starting or already playing junior events.",
    intro: [
      "Darklight Chess Academy coaches UK students online from India. Lessons are live with a coach on a shared digital board, in a group batch or one-to-one, and follow the same structured curriculum we teach at our centres in Coimbatore.",
      "The whole UK shares one time zone, and India is only 4½ hours ahead in summer (BST) and 5½ hours ahead in winter (GMT). We run a dedicated international batch for students outside Indian time zones — one of our London students described it as fitting “perfectly” — and you can also ask about one-to-one slots.",
    ],
    timeZones: [{ zone: "UK (GMT / BST)", standard: 0, daylight: 1 }],
    exampleZone: "UK (GMT / BST)",
    examples: [
      { day: "Saturday", hour: 10 },
      { day: "Sunday", hour: 14 },
      { day: "Wednesday", hour: 17 },
    ],
    dstNote: "British Summer Time runs from the last Sunday in March to the last Sunday in October. India doesn't change its clocks.",
    chessContext: {
      heading: "Junior Chess and Ratings in the UK",
      paragraphs: [
        "In England, over-the-board results are rated by the English Chess Federation (ECF); Scotland, Wales and Northern Ireland each have their own chess federations. Many juniors start with local junior events and weekend congresses before moving on to FIDE-rated tournaments.",
        `Learning online doesn't change where your child plays. Our ${TOURNAMENT_LINK} can be tailored to an event your child has entered, with coaches going through the games they played afterwards.`,
      ],
    },
    proof: {
      heading: "What a UK Student Says",
      items: [
        {
          text: "I'm from the UK, and the timezone-friendly online batch fits perfectly. I'm now confidently playing in local UK tournaments.",
          cite: "Raj Patel, London",
        },
      ],
    },
    faqs: [
      {
        question: "What time would online chess lessons be in the UK?",
        answer:
          "Lessons are booked in UK time. India is 5½ hours ahead in winter and 4½ in summer, so a 10:00 am Saturday lesson in London is 3:30 pm in India in winter (2:30 pm in summer). Share your preferred days and times when you book the free demo and we'll confirm availability.",
      },
      {
        question: "Can my child play ECF-rated tournaments while learning with an online coach?",
        answer:
          "Yes — where your child competes is independent of where the coach is. Sessions can be tailored to a tournament your child has entered and the games reviewed afterwards. One of our UK students now plays local UK tournaments after joining our time-zone-friendly batch.",
      },
      {
        question: "Do you teach students in Scotland, Wales and Northern Ireland?",
        answer:
          "Yes. Lessons are online and the whole UK shares one time zone, so the same scheduling applies wherever you are.",
      },
    ],
    formMode: "Online (International batch)",
  },
  {
    slug: "canada",
    path: "/online-chess-classes-canada/",
    published: true,
    countryName: "Canada",
    hreflang: "en-CA",
    ogLocale: "en_CA",
    title: "Online Chess Classes in Canada for Kids | Darklight Chess Academy",
    description:
      "Live online chess classes for students across Canada, scheduled around Pacific to Atlantic time. Group or one-to-one, from beginner to tournament level.",
    eyebrow: "Online Chess Classes · Canada",
    heroTitle: "Online Chess Classes for Kids in <span class='gold'>Canada</span>",
    heroSubtitle:
      "Coached live from India and scheduled around your province's time zone — the same programme one of our students used to win a tournament in Canada.",
    intro: [
      "One of our students recently won a chess tournament in Canada, coached entirely online by our team. That's the format we offer every Canadian family: live classes with a coach on a shared digital board, as a group batch or one-to-one.",
      "Canada spans six time zones, so we schedule around your province rather than a fixed national timetable. India is 9½ hours ahead of Eastern time in summer and 10½ in winter, and the gap grows further west. Tell us your time zone when you book the free demo and we'll confirm the slots that are open.",
    ],
    timeZones: [
      { zone: "Pacific (PT)", standard: -8, daylight: -7 },
      { zone: "Mountain (MT)", standard: -7, daylight: -6 },
      { zone: "Central (CT)", standard: -6, daylight: -5, note: "Most of Saskatchewan stays on standard time" },
      { zone: "Eastern (ET)", standard: -5, daylight: -4 },
      { zone: "Atlantic (AT)", standard: -4, daylight: -3 },
      { zone: "Newfoundland (NT)", standard: -3.5, daylight: -2.5 },
    ],
    exampleZone: "Eastern (ET)",
    examples: [
      { day: "Saturday", hour: 9 },
      { day: "Sunday", hour: 11 },
      { day: "Tuesday", hour: 17 },
    ],
    dstNote:
      "Most of Canada observes daylight time from the second Sunday in March to the first Sunday in November. India doesn't change its clocks, so the gap is one hour smaller during Canadian daylight time.",
    chessContext: {
      heading: "Chess Ratings and Tournaments in Canada",
      paragraphs: [
        "Canadian over-the-board tournaments are generally rated by the Chess Federation of Canada (CFC), and Quebec also has its own provincial federation. Junior and scholastic events are a common first step before open tournaments.",
        `Our ${TOURNAMENT_LINK} can be shaped around an event your child has registered for, with game review afterwards to turn results — good or bad — into the next set of lessons.`,
      ],
    },
    proof: {
      heading: "A Tournament Win in Canada",
      items: [
        {
          text: "One of our students recently won a chess tournament in Canada — coached entirely online by our FIDE-rated trainers.",
        },
        {
          text: "A Darklight student at the Toronto chess centre.",
          image: "/assets/images/gallery-a2.jpg",
          imageAlt: "Student at the Toronto chess centre",
        },
      ],
    },
    faqs: [
      {
        question: "What time are online chess classes for students in Canada?",
        answer:
          "Classes are booked in your local time, from the slots our coaches have open. A 9:00 am Saturday class in Toronto is 7:30 pm Saturday in India in winter (6:30 pm in summer); in Vancouver, 9:00 am is 10:30 pm in India (9:30 pm in summer). Share your time zone and preferred days when you book the free demo.",
      },
      {
        question: "Has Darklight coached a student to a tournament result in Canada?",
        answer:
          "Yes. One of our students recently won a chess tournament in Canada, coached entirely online by our trainers.",
      },
      {
        question: "Do you prepare students for CFC-rated tournaments?",
        answer:
          "Yes. Coaches can tailor sessions around a specific event your child has entered and review their tournament games afterwards to find recurring mistakes.",
      },
    ],
    formMode: "Online (International batch)",
  },
  {
    slug: "india",
    path: "/online-chess-classes-india/",
    published: true,
    countryName: "India",
    hreflang: "en-IN",
    ogLocale: "en_IN",
    title: "Online Chess Classes in India | Darklight Chess Academy",
    description:
      "Live online chess classes across India in IST batches, plus offline centres in Coimbatore. Coaching for kids, beginners and FIDE-rated tournament players.",
    eyebrow: "Online Chess Classes · India",
    heroTitle: "Online Chess Classes Across <span class='gold'>India</span>",
    heroSubtitle:
      "IST-timed live batches for students anywhere in India — and, for families in Coimbatore, the option to mix online with classes at our two centres.",
    intro: [
      "Darklight Chess Academy is an Indian academy based in Coimbatore, Tamil Nadu. Students elsewhere in India learn with us online in standard India-timing batches, weekday or weekend; families in Coimbatore can also attend our Saibaba Colony or Sowripalayam centres, or combine the two.",
      `Online classes are live with a coach on a shared digital board, as group batches or one-to-one, and follow exactly the same curriculum as our <a href="/chess-academy-coimbatore/">offline classes in Coimbatore</a>.`,
    ],
    timeZones: [],
    examples: [],
    chessContext: {
      heading: "Rated Chess in India",
      paragraphs: [
        "In India, rated tournaments run under the All India Chess Federation (AICF) and its state associations, and many open tournaments are FIDE-rated. For most children, a local or district event is the first step.",
        `For competitive students, our <a href="/advanced-chess-training/">advanced training</a> uses FIDE-compliant training plans, and our ${TOURNAMENT_LINK} can be tailored to a specific upcoming event. Regular academy tournaments give students rated-style experience in a familiar setting first.`,
      ],
    },
    proof: {
      heading: "Results and Feedback From Students in India",
      items: [
        {
          text: "Champion — Star Chess Foundation International Open, Trichy 2026.",
          image: "/assets/images/poster-trichy-champion.jpg",
          imageAlt: "Champion – Star Chess Foundation International Open, Trichy 2026",
        },
        {
          text: "I joined offline sessions in Coimbatore. Coach Vinoth helped me go from 1100 to 1450 in under six months.",
          cite: "Srinath M., Tamil Nadu",
        },
        {
          text: "After trying multiple platforms, I found Darklight to be the most structured and professional.",
          cite: "Preeti Sharma, Delhi",
        },
      ],
    },
    faqs: [
      {
        question: "Do you run online chess classes in India-timing batches?",
        answer:
          "Yes. Alongside our international batch, we run standard batches in Indian Standard Time — weekday or weekend, group or one-to-one.",
      },
      {
        question: "Can my child switch between online and offline classes in Coimbatore?",
        answer:
          "Yes. The curriculum is identical, so families in Coimbatore can move between our centres and online classes, or mix both around school and homework.",
      },
      {
        question: "Do you have offline centres outside Coimbatore?",
        answer:
          "No. Our two physical centres are in Coimbatore — Saibaba Colony and Sowripalayam. Students in every other city learn with us online.",
      },
      {
        question: "Do you prepare students for FIDE-rated tournaments in India?",
        answer:
          "Yes. Our advanced track uses FIDE-compliant training plans, coaches can tailor sessions to an upcoming event, and academy tournaments give students competitive experience before open or FIDE-rated events.",
      },
    ],
    formMode: "Online (India)",
  },
  {
    // Not published: the site has no Australia-specific evidence yet (no
    // results, testimonials or confirmed AU slots). Owner to supply before
    // flipping `published` to true.
    slug: "australia",
    path: "/online-chess-classes-australia/",
    published: false,
    countryName: "Australia",
    hreflang: "en-AU",
    ogLocale: "en_AU",
    title: "Online Chess Classes in Australia | Darklight Chess Academy",
    description:
      "Live online chess classes for students in Australia, scheduled around AEST/AEDT, ACST and AWST. Group or one-to-one coaching, beginner to tournament level.",
    eyebrow: "Online Chess Classes · Australia",
    heroTitle: "Online Chess Classes in <span class='gold'>Australia</span>",
    heroSubtitle: "Live coaching from our team in India, scheduled around Australian time zones.",
    intro: [
      "Australia is among the countries our online students join from. Classes are live with a coach on a shared digital board, as a group batch or one-to-one.",
      "Australia is ahead of India — by 4½ to 5½ hours on the east coast and 2½ hours in Perth — so Australian after-school hours fall around midday in India. Tell us your time zone when you book the free demo and we'll confirm the slots that are open.",
    ],
    timeZones: [
      { zone: "Eastern — NSW, VIC, ACT, TAS", standard: 10, daylight: 11 },
      { zone: "Eastern — Queensland", standard: 10 },
      { zone: "Central — SA", standard: 9.5, daylight: 10.5 },
      { zone: "Central — NT", standard: 9.5 },
      { zone: "Western — WA", standard: 8 },
    ],
    exampleZone: "Eastern — NSW, VIC, ACT, TAS",
    examples: [
      { day: "Saturday", hour: 10 },
      { day: "Wednesday", hour: 17 },
    ],
    dstNote:
      "Daylight time in NSW, Victoria, the ACT, Tasmania and South Australia runs from the first Sunday in October to the first Sunday in April. Queensland, the NT and WA don't change their clocks, and neither does India.",
    chessContext: {
      heading: "Chess Ratings in Australia",
      paragraphs: [
        "Australian tournaments are generally rated by the Australian Chess Federation (ACF), with state associations running junior and open events.",
        `Our ${TOURNAMENT_LINK} can be built around an event your child has entered.`,
      ],
    },
    proof: { heading: "", items: [] },
    faqs: [
      {
        question: "What time are online chess classes for students in Australia?",
        answer:
          "Classes are booked in your local time. A 5:00 pm weekday class in Sydney is 12:30 pm in India during Australian winter (11:30 am during daylight time). Share your time zone and preferred days when you book the free demo.",
      },
    ],
    formMode: "Online (International batch)",
  },
];

export const publishedMarkets = markets.filter((m) => m.published);
