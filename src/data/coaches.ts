// Coach profiles, shown on the homepage and /coaches/. Text is exactly as the
// academy published it — do not add titles, ratings or achievements that the
// academy hasn't confirmed. Keep achievement text verbatim, including "(VI)".
export interface Coach {
  id: string; // anchor on /coaches/
  name: string;
  role: string;
  quote: string;
  bio?: string;
  achievement?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export const coaches: Coach[] = [
  {
    id: "karuppasamy",
    name: "Karuppasamy",
    role: "Founder of DLCA cum Coach",
    quote: "Chess isn't just a game — it's a lifestyle. There's no age limit to learning or mastering it.",
    bio: "A passionate mentor and visionary, Karuppasamy founded Darklight Chess Academy with a bold ambition: to empower chess coaches and spread chess culture globally. His belief in lifelong learning and chess as a tool for personal development drives our academy's core.",
    image: "/assets/images/founder-karuppasamy.jpg",
    imageAlt: "Karuppasamy – Founder of Darklight Chess Academy",
    featured: true,
  },
  {
    id: "manikandan",
    name: "Manikandan",
    role: "Co-Founder and Head Coach",
    quote: "The excitement in our students when they share victories — from living rooms to international arenas — is what fuels us every day.",
    bio: "Manikandan plays a pivotal role in operations and quality control, ensuring that every student and coach gets the guidance they need to succeed.",
    achievement: "Under-15 National Championship Participant (2016), Tamil Nadu State Medalist.",
    image: "/assets/images/cofounder-manikandan.jpg",
    imageAlt: "Manikandan – Co-founder and Head Coach",
    featured: true,
  },
  {
    id: "marimuthu-k",
    name: "Marimuthu K",
    role: "Head Coach",
    quote: "Patience and discipline are at the heart of every good move.",
    achievement: "Represented India at Olympiad in Greece 2021, Multiple-time National Champion in Open FIDE (VI).",
    image: "/assets/images/coach-marimuthu.jpg",
    imageAlt: "Marimuthu K – Head Coach",
  },
  {
    id: "gopinath",
    name: "Gopinath",
    role: "Head Coach",
    quote: "Remote training doesn't mean remote results.",
    achievement: "Open FIDE Title Winner.",
    image: "/assets/images/coach-gopinath.jpg",
    imageAlt: "Gopinath – Head Coach",
  },
  {
    id: "mega-chakraborty",
    name: "Mega Chakraborty",
    role: "Head Coach",
    quote: "Vision is not what the eyes see, but what the mind foresees on the board.",
    achievement: "Asian Silver Medalist, Represented India in World Women Championship (VI) 2024.",
    image: "/assets/images/coach-mega.jpg",
    imageAlt: "Mega Chakraborty – Head Coach",
  },
  {
    id: "shankaranarayanan",
    name: "Shankaranarayanan",
    role: "Head Coach",
    quote: "Every pawn has the power to become a queen — it's the journey that matters.",
  },
];
