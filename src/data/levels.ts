// Course ladder shown on the homepage and /courses/. Modelled on the five-step
// structure of competitor academies, but ONLY what Darklight has confirmed:
// no durations, class counts or syllabus claims.
// TODO(owner): confirm the rating bands below, and supply real durations /
// class counts if you want them shown. Do not invent them.
export interface Level {
  step: number;
  name: string;
  icon: string;
  rating: string;
  summary: string;
  outcomes: string[];
  href: string;
  course: string; // value passed to the enquiry form
}

export const levels: Level[] = [
  {
    step: 1,
    name: "Beginner",
    icon: "♟",
    rating: "Unrated",
    summary: "Learn the rules, how every piece moves, and basic opening principles.",
    outcomes: ["Rules, piece movement and checkmate", "Simple tactics such as forks and pins"],
    href: "/chess-classes-for-beginners/",
    course: "Beginner Level",
  },
  {
    step: 2,
    name: "Advanced Beginner",
    icon: "♞",
    rating: "Up to about 1000",
    summary: "Turn the rules into real games with stronger tactics and basic endgames.",
    outcomes: ["Tactical patterns and basic endgames", "Practice games with coach feedback"],
    href: "/chess-classes-for-beginners/",
    course: "Advanced Beginner Level",
  },
  {
    step: 3,
    name: "Intermediate",
    icon: "♝",
    rating: "About 1000–1400",
    summary: "Build middlegame strategy, combinations and a solid opening repertoire.",
    outcomes: ["Middlegame planning and combinations", "Practice tournaments and endgame study"],
    href: "/advanced-chess-training/",
    course: "Intermediate Level",
  },
  {
    step: 4,
    name: "Advanced",
    icon: "♜",
    rating: "About 1400–1800",
    summary: "Tournament preparation, rating improvement and positional play.",
    outcomes: ["Positional play and deep calculation", "Training plans for rated players"],
    href: "/advanced-chess-training/",
    course: "Advanced Level",
  },
  {
    step: 5,
    name: "Master Track",
    icon: "♛",
    rating: "1800+",
    summary: "Personalised coaching with FIDE-rated coaches for serious competitors.",
    outcomes: ["Opening preparation and game analysis", "Tournament strategy and one-to-one coaching"],
    href: "/tournament-chess-coaching/",
    course: "Master Track",
  },
];
