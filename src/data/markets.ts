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
  hreflang: string; // "" = multi-country page, kept out of the hreflang cluster
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
  // Optional answer-first upgrades (used by the UK, Gulf and Europe pages).
  answer?: string; // 40-60 word direct answer shown under the hero
  quickFacts?: string[]; // trusted HTML list items
  sections?: { eyebrow: string; heading: string; paragraphs: string[] }[]; // trusted HTML
  currencies?: string[]; // codes from src/data/pricing.ts shown as approximate conversions
  lastUpdated?: string; // ISO date
  relatedPosts?: string[]; // blog slugs for "Further Reading"; falls back to the latest posts
  formMode: "Online (India)" | "Online (International batch)";
}

const TOURNAMENT_LINK = `<a href="/tournament-chess-coaching/">tournament coaching</a>`;

export const baseMarkets: Market[] = [
  {
    slug: "usa",
    path: "/online-chess-classes-usa/",
    published: true,
    countryName: "United States",
    hreflang: "en-US",
    ogLocale: "en_US",
    title: "Online Chess Classes for Kids, USA | Darklight Chess Academy",
    description:
      "Live online chess classes for US kids, with after-school slots from 4 to 8 pm Eastern and Pacific time. Group or 1-to-1, beginner to US Chess tournament prep.",
    eyebrow: "Online Chess Classes · United States",
    heroTitle: "Online Chess Classes for Kids in the <span class='gold'>USA</span>",
    heroSubtitle:
      "Live coaching after school in your time zone, from complete beginner to US Chess–rated and scholastic tournaments.",
    answer:
      "Darklight Chess Academy teaches live online chess classes to children across the United States. Weekday classes run after school, between about 4 and 8 pm Eastern or Pacific time, with weekend morning slots too. Children learn in small groups or one-to-one, from their first moves to US Chess tournament preparation, and the first demo class is free.",
    quickFacts: [
      "<strong>Format:</strong> live online with a coach on a shared digital board, as a small group, one-to-one or a sibling class",
      "<strong>US class times:</strong> weekdays about 4–8 pm ET or PT, plus weekend mornings",
      "<strong>Ages:</strong> young beginners to teenagers, plus adults",
      "<strong>Levels:</strong> five levels, from complete beginner to 1800+ tournament players",
      "<strong>Tournaments:</strong> preparation for US Chess–rated, scholastic and state events",
      "<strong>Fees:</strong> private 1-to-1 lessons $15 per hour (USD); sibling discount",
      "<strong>First step:</strong> a free demo class with a level assessment",
    ],
    sections: [
      {
        eyebrow: "Class times",
        heading: "When are online chess classes for US families?",
        paragraphs: [
          "Our coaches teach US students in the after-school window, roughly 4 pm to 8 pm in your time zone on weekdays, and on Saturday and Sunday mornings. For our coaches in India that is early morning, and they schedule their day around it, so your child doesn't have to stay up late or miss school.",
          'The tables below show what a few US times are in India. You never need to work this out yourself: classes are always booked and confirmed in your local time. See all <a href="/class-timings/">class timings by time zone</a>.',
        ],
      },
      {
        eyebrow: "US Chess",
        heading: "Will online lessons help my child get a US Chess rating?",
        paragraphs: [
          'A child gets an official US Chess rating by joining US Chess, the national federation, and playing in a US Chess–rated tournament. Online classes don\'t issue a rating, but they prepare your child to do well once they play rated games. Our guide <a href="/blog/us-chess-ratings-explained-for-parents/">US Chess ratings explained for parents</a> covers how it works.',
          `When your child has entered an event, our ${TOURNAMENT_LINK} plans the weeks before it and reviews their games afterwards. Our students' US results include 1st place at the USA Chess Festival and a state-level championship title.`,
        ],
      },
      {
        eyebrow: "Homeschool",
        heading: "Do you teach homeschooled children during the US school day?",
        paragraphs: [
          'Yes. US daytime is evening in India, so daytime classes are easy to arrange for homeschooling families. Chess works well as a logic elective, and coaches can give a short progress note after each level for your records. See <a href="/homeschool-chess-classes/">chess classes for homeschoolers</a>.',
        ],
      },
      {
        eyebrow: "Families",
        heading: "Can siblings learn together?",
        paragraphs: [
          "Yes. Brothers and sisters can share a sibling class or attend separate classes if their levels are far apart, and families with more than one child get a sibling discount. The free assessment decides the best set-up for each child.",
        ],
      },
      {
        eyebrow: "Coaches",
        heading: "Who will teach my child?",
        paragraphs: [
          'Our coaches include Marimuthu K, who represented India at the Chess Olympiad in Greece in 2021, and Mega Chakraborty, an Asian silver medalist who represented India at the World Women Championship in 2024. Every coach teaches in English. Meet <a href="/coaches/">all of our coaches</a>.',
        ],
      },
    ],
    intro: [
      "Darklight Chess Academy is based in Coimbatore, India, and coaches students in the United States entirely online. Every class is live with a coach on a shared digital board, not pre-recorded video, and runs as a small group, a one-to-one session or a sibling class.",
      "We schedule US classes around your child's school day. Tell us your time zone and preferred days when you book the free demo class, and we'll confirm a slot in your local time.",
    ],
    timeZones: [
      { zone: "Eastern (ET)", standard: -5, daylight: -4 },
      { zone: "Central (CT)", standard: -6, daylight: -5 },
      { zone: "Mountain (MT)", standard: -7, daylight: -6, note: "Most of Arizona stays on standard time" },
      { zone: "Pacific (PT)", standard: -8, daylight: -7 },
    ],
    exampleZone: "Eastern (ET)",
    examples: [
      { day: "Monday", hour: 16 },
      { day: "Wednesday", hour: 18 },
      { day: "Thursday", hour: 19.5 },
      { day: "Saturday", hour: 9 },
    ],
    dstNote:
      "US daylight saving time runs from the second Sunday in March to the first Sunday in November. India doesn't change its clocks, so the gap to Indian time is one hour smaller during US daylight time. Alaska and Hawaii are further behind, so ask us about slots.",
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
          "Weekday classes run after school, between about 4 pm and 8 pm in your own time zone, and there are Saturday and Sunday morning slots. Our coaches teach these hours from India, where it is early morning. Classes are always booked in your local time and confirmed after the free demo.",
      },
      {
        question: "Can you coach students in every US time zone?",
        answer:
          "Yes. We schedule around Eastern, Central, Mountain and Pacific time, and can arrange slots for Alaska and Hawaii. One of our students' recent results came at the Continental Chess Concord Tournament in California.",
      },
      {
        question: "Do you prepare students for US Chess–rated tournaments?",
        answer:
          "Yes. Tournament coaching can be built around a specific event your child has entered, whether it is US Chess–rated, scholastic or a state championship, and includes reviewing their own games afterwards. A Darklight student recently took 1st place at the USA Chess Festival.",
      },
      {
        question: "How much do online chess lessons cost for US families?",
        answer:
          "Private one-to-one lessons are $15 per hour, a fixed price in US dollars. That is well below the roughly $40 an hour that private chess coaching often costs in the US. Ask us about group classes when you book, siblings get a discount, and the first demo class is free.",
      },
      {
        question: "Do you teach homeschooled children during the day?",
        answer:
          "Yes. US daytime is evening in India, so daytime classes are easy to schedule for homeschooling families, as groups or one-to-one.",
      },
      {
        question: "How do we start?",
        answer:
          "Book the free demo class with the form on this page or message us on WhatsApp. A coach plays with your child, assesses their level, and we suggest a class and a time slot that fits your family.",
      },
    ],
    currencies: ["USD"],
    lastUpdated: "2026-11-13",
    relatedPosts: [
      "how-much-do-chess-lessons-cost-in-the-us",
      "us-chess-ratings-explained-for-parents",
      "how-to-choose-an-online-chess-coach",
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
    answer:
      "Darklight Chess Academy teaches live online chess lessons to children and adults across the UK, in English. India is 5½ hours ahead of UK winter time and 4½ hours ahead in summer, so after-school and weekend slots are available. Lessons start from ₹1,000 per hour (about £9), and the first demo class is free.",
    quickFacts: [
      "<strong>Format:</strong> live online, small groups or 1-to-1, on a shared digital board",
      "<strong>Time zone:</strong> GMT in winter, BST in summer; India is 5½ or 4½ hours ahead",
      "<strong>Timings:</strong> flexible, around the UK school day and weekends",
      "<strong>Fees:</strong> from ₹1,000 per hour (about £9, indicative)",
      "<strong>Levels:</strong> complete beginner to junior tournament preparation",
      "<strong>First step:</strong> free demo class with a level assessment",
    ],
    sections: [
      {
        eyebrow: "UK Chess",
        heading: "Will online lessons help my child get an ECF rating?",
        paragraphs: [
          'In England, the <a href="https://www.englishchess.org.uk/" rel="noopener">English Chess Federation (ECF)</a> rates over-the-board results, and a child gets a rating by playing in ECF-rated events. Online lessons do not issue a rating, but they prepare the child to play well in those events. We can build ' + "a plan around an event your child has entered and review the games afterwards.",
        ],
      },
      {
        eyebrow: "Junior events",
        heading: "What UK junior events can a student work towards?",
        paragraphs: [
          'Many UK children start with school and primary events, local junior tournaments and weekend congresses. The <a href="https://ukchesschallenge.co.uk/" rel="noopener">UK Chess Challenge</a> is a school-age competition that builds through qualifying stages to its Megafinals, Gigafinals and Terafinal, and regional events such as the London Junior Chess Championships are open to young players. Formats and dates change each season, so check each organiser for the current details.',
        ],
      },
      {
        eyebrow: "Across the UK",
        heading: "Do you teach children in London, Birmingham, Manchester and Leicester?",
        paragraphs: [
          "Yes, and the lesson is the same wherever you live, because it is online. London, Birmingham, Manchester, Leicester and everywhere else in the UK share one time zone, so scheduling does not change. What differs is the local junior circuit, which your county chess association or the ECF website lists.",
        ],
      },
      {
        eyebrow: "Coaches",
        heading: "Who will be teaching my child?",
        paragraphs: [
          'Marimuthu K represented India at the Olympiad in Greece in 2021, and Mega Chakraborty is an Asian silver medalist who represented India at the World Women Championship in 2024. Meet all <a href="/coaches/">our coaches</a>.',
        ],
      },
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
    currencies: ["GBP", "EUR"],
    lastUpdated: "2026-11-05",
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
      "Live online chess classes for kids across Canada, with after-school slots from 4 to 8 pm in your province's time. Group or 1-to-1, beginner to CFC tournament prep.",
    eyebrow: "Online Chess Classes · Canada",
    heroTitle: "Online Chess Classes for Kids in <span class='gold'>Canada</span>",
    heroSubtitle:
      "Live coaching after school in your province's time zone, from first moves to CFC-rated tournaments.",
    answer:
      "Darklight Chess Academy teaches live online chess classes to children across Canada, from British Columbia to Newfoundland. Weekday classes run after school, between about 4 and 8 pm local time, with weekend morning slots too. Children learn in small groups or one-to-one, from complete beginner to CFC tournament preparation, and the first demo class is free.",
    quickFacts: [
      "<strong>Format:</strong> live online with a coach on a shared digital board, as a small group, one-to-one or a sibling class",
      "<strong>Canadian class times:</strong> weekdays about 4–8 pm in your time zone, plus weekend mornings",
      "<strong>Provinces:</strong> every province and territory; Pacific to Newfoundland time",
      "<strong>Levels:</strong> five levels, from complete beginner to 1800+ tournament players",
      "<strong>Tournaments:</strong> preparation for CFC-rated, junior and provincial events",
      "<strong>Fees:</strong> private 1-to-1 lessons CA$15 per hour (CAD); sibling discount",
      "<strong>First step:</strong> a free demo class with a level assessment",
    ],
    sections: [
      {
        eyebrow: "Class times",
        heading: "When are online chess classes for Canadian families?",
        paragraphs: [
          "Our coaches teach Canadian students in the after-school window, roughly 4 pm to 8 pm in your own time zone on weekdays, and on Saturday and Sunday mornings. In India that is early morning, and our coaches plan their day around it, so your child learns at a normal hour.",
          'Families in Toronto, Ottawa and Montréal use Eastern time; Vancouver is on Pacific time; Calgary and Edmonton on Mountain time; Winnipeg on Central time. The tables below show what a few Eastern times are in India, and our <a href="/class-timings/">class timings page</a> covers every zone.',
        ],
      },
      {
        eyebrow: "CFC",
        heading: "Will online lessons help my child get a CFC rating?",
        paragraphs: [
          'In Canada, a child gets an official rating by playing in tournaments rated by the Chess Federation of Canada (CFC). Online classes don\'t issue a rating, but they prepare your child for rated play. Our guide <a href="/blog/cfc-ratings-explained-for-parents/">CFC ratings explained for parents</a> covers how it works.',
          `When your child has entered an event, our ${TOURNAMENT_LINK} plans the weeks before it and reviews the games afterwards.`,
        ],
      },
      {
        eyebrow: "Homeschool",
        heading: "Do you teach homeschooled children during the day?",
        paragraphs: [
          'Yes. Canadian daytime is evening in India, so daytime classes are easy to arrange. See <a href="/homeschool-chess-classes/">chess classes for homeschoolers</a>.',
        ],
      },
      {
        eyebrow: "Coaches",
        heading: "Who will teach my child?",
        paragraphs: [
          'Our coaches include Marimuthu K, who represented India at the Chess Olympiad in Greece in 2021, and Mega Chakraborty, an Asian silver medalist who represented India at the World Women Championship in 2024. Classes are taught in English. Meet <a href="/coaches/">all of our coaches</a>.',
        ],
      },
    ],
    intro: [
      "Darklight Chess Academy is based in Coimbatore, India, and coaches Canadian students entirely online: live classes with a coach on a shared digital board, as a group, one-to-one or a sibling class. One of our students recently won a chess tournament in Canada after training with us this way.",
      "Canada spans six time zones, so we schedule around your province rather than a fixed national timetable. Tell us your time zone when you book the free demo and we'll confirm a slot in your local time.",
    ],
    timeZones: [
      { zone: "Pacific (PT)", standard: -8, daylight: -7 },
      { zone: "Mountain (MT)", standard: -7, daylight: -6 },
      { zone: "Central (CT)", standard: -6, daylight: -5, note: "Most of Saskatchewan stays on standard time" },
      { zone: "Eastern (ET)", standard: -5, daylight: -4 },
      { zone: "Atlantic (AT)", standard: -4, daylight: -3 },
      { zone: "Newfoundland (NL)", standard: -3.5, daylight: -2.5 },
    ],
    exampleZone: "Eastern (ET)",
    examples: [
      { day: "Tuesday", hour: 16 },
      { day: "Thursday", hour: 18 },
      { day: "Saturday", hour: 10 },
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
      heading: "Our Students in Canada",
      items: [
        {
          // TODO(owner): replace with the named result once the family agrees:
          // student name or initials, event, city/province, month and year.
          text: "One of our students won a chess tournament in Canada after training with our coaches online.",
        },
        {
          text: "A Darklight student at a chess centre in Toronto.",
          image: "/assets/images/gallery-a2.jpg",
          imageAlt: "Darklight Chess Academy student at a chess centre in Toronto",
        },
      ],
    },
    faqs: [
      {
        question: "What time are online chess classes for students in Canada?",
        answer:
          "Weekday classes run after school, between about 4 pm and 8 pm in your own time zone, and there are Saturday and Sunday morning slots. Our coaches teach these hours from India, where it is early morning. Classes are always booked in your local time and confirmed after the free demo.",
      },
      {
        question: "Do you teach students in every province?",
        answer:
          "Yes. Classes are online, so we teach families from British Columbia to Newfoundland and Labrador, and schedule around Pacific, Mountain, Central, Eastern, Atlantic and Newfoundland time.",
      },
      {
        question: "Do you prepare students for CFC-rated tournaments?",
        answer:
          "Yes. Coaches can plan sessions around a specific event your child has entered, including junior and provincial events, and review the tournament games afterwards to find recurring mistakes. One of our students has already won a tournament in Canada.",
      },
      {
        question: "How much do online chess lessons cost for Canadian families?",
        answer:
          "Private one-to-one lessons are CA$15 per hour, a fixed price in Canadian dollars. Ask us about group classes when you book, siblings get a discount, and the first demo class is free.",
      },
      {
        question: "Are classes taught in English?",
        answer: "Yes. All of our classes are taught in English.",
      },
      {
        question: "How do we start?",
        answer:
          "Book the free demo class with the form on this page or message us on WhatsApp. A coach plays with your child, assesses their level, and we suggest a class and a time slot that fits your family.",
      },
    ],
    currencies: ["CAD"],
    lastUpdated: "2026-11-13",
    relatedPosts: [
      "how-much-do-chess-lessons-cost-in-canada",
      "cfc-ratings-explained-for-parents",
      "how-to-choose-an-online-chess-coach",
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
      {
        question: "How much do online chess lessons cost in the UK?",
        answer:
          "Lessons start from ₹1,000 per hour, which is about £9 at recent exchange rates. The rupee figure is fixed, so the pound amount varies slightly. Siblings get a discount and the first demo class is free.",
      },
      {
        question: "What age should a child start chess lessons?",
        answer:
          "Many children are ready from about age 5, if they can concentrate on a short activity and follow simple rules. There is no upper age limit.",
      },
      {
        question: "Are online chess lessons good for children?",
        answer:
          "They can be, when the lesson is live with a coach who corrects mistakes as they happen. Ours run on a shared digital board, as a small group or one-to-one.",
      },
      {
        question: "What is an ECF rating?",
        answer:
          "It is the English Chess Federation's rating for over-the-board results in England. A child gets one by playing in ECF-rated events.",
      },
      {
        question: "Can adults learn too?",
        answer: "Yes. Adults can join as complete beginners or improving players.",
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

import { intlMarkets } from "./markets-intl";

export const markets: Market[] = [...baseMarkets, ...intlMarkets];

export const publishedMarkets = markets.filter((m) => m.published);
