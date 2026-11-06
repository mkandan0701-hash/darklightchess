// Course ladder shown on the homepage, /courses/ and /courses/<slug>/.
// This is the single source of truth for level facts.
// TODO(owner): ages, durations, session counts and module outlines below were
// supplied as the intended Darklight structure (modelled on a standard five-level
// ladder). Confirm or edit them here and every page updates.
export interface Module {
  title: string;
  topics: string[];
}

export interface Level {
  step: number;
  slug: string;
  name: string;
  icon: string;
  age: string; // e.g. "3+"
  rating: string;
  duration: string;
  sessions: string; // e.g. "24 Live Classes"
  sessionsShort: string; // e.g. "24" for tables
  summary: string; // short card text
  description: string;
  outcomes: string[];
  learningAreas: string[];
  whoFor: string;
  achieve: string[];
  modules: Module[];
  levelUp: string[];
  nextSlug?: string;
  href: string; // related programme page (kept for SEO internal links)
  course: string; // value passed to the enquiry form
}

export const levels: Level[] = [
  {
    step: 1,
    slug: "beginner",
    name: "Beginner",
    icon: "♟",
    age: "3+",
    rating: "Unrated",
    duration: "3 Months",
    sessions: "24 Live Classes",
    sessionsShort: "24",
    summary: "Learn the rules, how every piece moves, and basic opening principles.",
    description:
      "Build a strong foundation in chess by learning piece movements, rules, tactics and the fundamentals of playing complete games.",
    outcomes: ["Rules, piece movement and checkmate", "Simple tactics such as forks and pins"],
    learningAreas: [
      "Chessboard and piece movements",
      "Rules and special moves",
      "Check, checkmate and stalemate",
      "Basic tactics",
      "First complete chess games",
      "Basic opening principles",
    ],
    whoFor:
      "Children who are new to chess or have never played a rated game. No prior experience is needed.",
    achieve: [
      "Move every piece correctly and follow all the rules",
      "Recognise check, checkmate and stalemate",
      "Spot simple one-move tactics",
      "Play a complete game from start to finish",
    ],
    modules: [
      { title: "Foundations", topics: ["The chessboard and pieces", "How each piece moves and captures", "Special moves: castling, en passant, promotion"] },
      { title: "Winning and Drawing", topics: ["Check, checkmate and stalemate", "Basic checkmate patterns"] },
      { title: "Tactical Understanding", topics: ["Forks and pins", "Protecting and attacking pieces"] },
      { title: "Practical Game Skills", topics: ["Basic opening principles", "Playing complete games with coach feedback"] },
      { title: "Assessment and Progression", topics: ["Level assessment game", "Review and next-level recommendation"] },
    ],
    levelUp: [
      "Plays a full game without illegal moves",
      "Delivers basic checkmates confidently",
      "Applies basic opening principles",
      "Coach assessment recommends the next level",
    ],
    nextSlug: "advanced-beginner",
    href: "/chess-classes-for-beginners/",
    course: "Beginner Level",
  },
  {
    step: 2,
    slug: "advanced-beginner",
    name: "Advanced Beginner",
    icon: "♞",
    age: "6+",
    rating: "Up to 1000",
    duration: "3 Months",
    sessions: "24 Live Classes",
    sessionsShort: "24",
    summary: "Turn the rules into real games with stronger tactics and basic endgames.",
    description:
      "Turn the rules into real games with tactical patterns, opening principles, basic endgames and an introduction to tournament play.",
    outcomes: ["Tactical patterns and basic endgames", "Practice games with coach feedback"],
    learningAreas: [
      "Forks, pins and skewers",
      "Tactical combinations",
      "Opening principles",
      "Basic endgames",
      "Piece coordination",
      "Tournament introduction",
    ],
    whoFor:
      "Students who know the rules and can play full games, with a rating up to about 1000 or equivalent ability.",
    achieve: [
      "Find forks, pins and skewers in games",
      "Combine pieces to build simple attacks",
      "Convert basic endgames",
      "Feel comfortable in a first tournament",
    ],
    modules: [
      { title: "Tactical Patterns", topics: ["Forks, pins and skewers", "Discovered attacks"] },
      { title: "Tactical Combinations", topics: ["Combining tactical themes", "Calculating short sequences"] },
      { title: "Openings and Coordination", topics: ["Opening principles", "Piece coordination"] },
      { title: "Basic Endgames", topics: ["King and pawn endgames", "Simple rook endgames"] },
      { title: "Tournament Introduction and Assessment", topics: ["Tournament rules and etiquette", "Level assessment"] },
    ],
    levelUp: [
      "Solves tactical puzzles consistently",
      "Plays sound opening moves",
      "Converts basic endgames",
      "Coach assessment recommends the next level",
    ],
    nextSlug: "intermediate",
    href: "/chess-classes-for-beginners/",
    course: "Advanced Beginner Level",
  },
  {
    step: 3,
    slug: "intermediate",
    name: "Intermediate",
    icon: "♝",
    age: "7+",
    rating: "1000–1400",
    duration: "4 Months",
    sessions: "32 Live Classes",
    sessionsShort: "32",
    summary: "Build middlegame strategy, combinations and a solid opening repertoire.",
    description:
      "Build positional understanding, calculation habits and middlegame planning, with essential endgames and a solid opening repertoire.",
    outcomes: ["Middlegame planning and combinations", "Practice tournaments and endgame study"],
    learningAreas: [
      "Positional understanding",
      "Calculation techniques",
      "Middlegame planning",
      "Pawn structures",
      "Tactical combinations",
      "Essential endgames",
    ],
    whoFor:
      "Students rated roughly 1000–1400 who want to move from tactics to real strategic understanding.",
    achieve: [
      "Make and follow a middlegame plan",
      "Calculate variations more accurately",
      "Understand common pawn structures",
      "Handle essential endgames",
    ],
    modules: [
      { title: "Positional Understanding", topics: ["Piece activity and space", "Weak squares and outposts"] },
      { title: "Calculation and Tactics", topics: ["Candidate moves and calculation", "Advanced tactical combinations"] },
      { title: "Middlegame Planning", topics: ["Pawn structures", "Choosing and executing a plan"] },
      { title: "Essential Endgames", topics: ["Key rook and pawn endgames", "Technique and conversion"] },
      { title: "Assessment and Progression", topics: ["Practice tournaments", "Level assessment"] },
    ],
    levelUp: [
      "Plans and calculates accurately in practice games",
      "Understands main pawn structures",
      "Converts essential endgames",
      "Coach assessment recommends the next level",
    ],
    nextSlug: "advanced",
    href: "/advanced-chess-training/",
    course: "Intermediate Level",
  },
  {
    step: 4,
    slug: "advanced",
    name: "Advanced",
    icon: "♜",
    age: "8+",
    rating: "1400–1800",
    duration: "6 Months",
    sessions: "48 Live Classes",
    sessionsShort: "48",
    summary: "Tournament preparation, rating improvement and positional play.",
    description:
      "Sharpen calculation and strategy, prepare openings, master advanced endgames and train specifically for tournaments.",
    outcomes: ["Positional play and deep calculation", "Training plans for rated players"],
    learningAreas: [
      "Advanced calculation",
      "Strategic planning",
      "Opening preparation",
      "Advanced endgames",
      "Tournament preparation",
      "Game analysis",
    ],
    whoFor:
      "Rated players around 1400–1800 who are competing in tournaments and want to raise their rating.",
    achieve: [
      "Calculate deeper and more reliably",
      "Build and maintain an opening repertoire",
      "Analyse their own games to find improvements",
      "Prepare for and manage tournament play",
    ],
    modules: [
      { title: "Advanced Calculation", topics: ["Deep variations", "Defensive resources and prophylaxis"] },
      { title: "Strategic Planning", topics: ["Long-term plans", "Dynamic and static advantages"] },
      { title: "Opening Preparation", topics: ["Building a repertoire", "Preparing against opponents"] },
      { title: "Advanced Endgames", topics: ["Complex rook and minor-piece endgames", "Theoretical positions"] },
      { title: "Tournament Preparation and Analysis", topics: ["Game analysis method", "Time management and tournament routine"] },
    ],
    levelUp: [
      "Shows consistent tournament results",
      "Analyses games independently",
      "Maintains a prepared opening repertoire",
      "Coach assessment recommends the next level",
    ],
    nextSlug: "master",
    href: "/advanced-chess-training/",
    course: "Advanced Level",
  },
  {
    step: 5,
    slug: "master",
    name: "Master",
    icon: "♛",
    age: "9+",
    rating: "1800+",
    duration: "Ongoing",
    sessions: "Personalised Plan",
    sessionsShort: "Personalised",
    summary: "Personalised coaching with FIDE-rated coaches for serious competitors.",
    description:
      "Personalised, advanced competitive coaching with opening preparation, deep positional analysis and engine-assisted game review.",
    outcomes: ["Opening preparation and game analysis", "Tournament strategy and one-to-one coaching"],
    learningAreas: [
      "Advanced opening preparation",
      "Deep positional analysis",
      "Engine-assisted game analysis",
      "Tournament preparation",
      "Personalised improvement plans",
      "Advanced competitive coaching",
    ],
    whoFor:
      "Serious competitors rated 1800+ who want a training plan built around their own games and goals.",
    achieve: [
      "Follow a personalised improvement plan",
      "Prepare openings in depth for specific events",
      "Use engines to analyse and learn from games",
      "Compete at a high level with a clear tournament strategy",
    ],
    modules: [
      { title: "Personal Assessment and Plan", topics: ["Review of games and style", "Setting goals and a training schedule"] },
      { title: "Opening Preparation", topics: ["Advanced repertoire work", "Event-specific preparation"] },
      { title: "Deep Positional Analysis", topics: ["Strategic masterclass positions", "Evaluating complex positions"] },
      { title: "Engine-Assisted Analysis", topics: ["Using engines effectively", "Finding recurring weaknesses"] },
      { title: "Tournament Coaching", topics: ["Tournament strategy", "Ongoing review and plan updates"] },
    ],
    levelUp: [
      "Training is ongoing and reviewed regularly with your coach",
      "Goals are set around rating and tournament targets",
    ],
    href: "/tournament-chess-coaching/",
    course: "Master Track",
  },
];

export const getLevel = (slug: string) => levels.find((l) => l.slug === slug);
