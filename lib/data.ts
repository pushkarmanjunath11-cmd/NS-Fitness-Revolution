export const COLORS = {
  yellow:     "#C9F135",
  yellowDim:  "#9BBF1A",
  red:        "#E8000D",
  redDark:    "#A50009",
  black:      "#0D0D0D",
  dark:       "#141414",
  card:       "#1A1A1A",
  border:     "rgba(201,241,53,0.15)",
  borderHov:  "rgba(201,241,53,0.4)",
  borderRed:  "rgba(232,0,13,0.3)",
  text:       "#F0F0F0",
  muted:      "#888888",
  mutedLight: "#AAAAAA",
};

export const NAV_LINKS = [
  { href: "/",           label: "Home"       },
  { href: "/about",      label: "About"      },
  { href: "/facilities", label: "Facilities" },
  { href: "/membership", label: "Membership" },
  { href: "/trainers",   label: "Trainers"   },
  { href: "/reviews",    label: "Reviews"    },
  { href: "/contact",    label: "Contact"    },
];

export const FACILITIES = [
  { icon: "🏋️", title: "Strength Training",  desc: "Olympic barbells, dumbbells up to 50 kg, power racks & cable machines." },
  { icon: "🚴", title: "Cardio Zone",         desc: "Treadmills, spin bikes, ellipticals & rowing machines." },
  { icon: "💪", title: "Functional Training", desc: "Battle ropes, kettlebells, TRX suspension & plyometric boxes." },
  { icon: "🥊", title: "Boxing Corner",       desc: "Heavy bags, speed bags & focus mitts for combat fitness." },
  { icon: "🧘", title: "Stretch & Recovery",  desc: "Dedicated warm-up zone, foam rollers & mobility tools." },
  { icon: "👤", title: "Personal Training",   desc: "One-on-one certified coaching tailored to your exact goals." },
];

export const TRAINERS = [
  { name: "Sujan Das", role: "Head Coach & Nutritionist", exp: "8 Years", spec: "Body Transformation & Nutrition", cert: "ACE Certified",  icon: "🏆" },
  { name: "Kaushal",   role: "Cardio & HIIT Specialist",  exp: "5 Years", spec: "Weight Loss & Endurance",        cert: "NASM Certified", icon: "⚡" },
  { name: "Kaushik",   role: "Functional Fitness Coach",  exp: "6 Years", spec: "Athletic Performance & Core",    cert: "CSCS Certified", icon: "🎯" },
];

export const PLANS = [
  {
    name: "Monthly", price: "₹2,000", period: "/month", popular: false,
    features: ["Unlimited gym access", "Locker facility", "Fitness assessment", "Basic nutrition guide"],
  },
  {
    name: "Quarterly", price: "₹5,000", period: "/3 months", popular: true,
    features: ["Everything in Monthly", "1 PT session / month", "Diet consultation", "Body composition tracking", "Priority machine access"],
  },
  {
    name: "Yearly", price: "₹15,000", period: "/year", popular: false,
    features: ["Everything in Quarterly", "4 PT sessions / month", "Custom meal plan", "Supplement guidance", "Progress photos", "2× free guest passes"],
  },
];

export const REVIEWS = [
  { name: "A.K.",  avatar: "AK", stars: 5, text: "Lost 10 kgs in 2 months following the diet and workout program. The trainers are incredibly dedicated and the gym is spacious. Best decision I ever made!" },
  { name: "D.P.", avatar: "DP", stars: 4, text: "Very spacious gym, never crowded. Equipment is well-maintained and trainers actually guide you properly. Highly recommended for serious fitness!" },
  { name: "S.J.",   avatar: "SJ", stars: 5, text: "Clean environment, supportive community. I was a complete beginner and felt so welcome here. The coaches helped me build a solid foundation." },
  { name: "N.S.",  avatar: "NS", stars: 5, text: "Exceptional personal training. Coaches pushed me beyond what I thought possible. Down 8 kg in 6 weeks with visible muscle definition. Incredible!" },
  { name: "M.C.",   avatar: "MC", stars: 4, text: "Best gym in the area. Huge floor space, all the equipment you need, and trainers who genuinely care about your progress. Worth every rupee." },
  { name: "P.R.",  avatar: "PR", stars: 5, text: "The equipment here is top-notch. The trainers made me feel comfortable from day one. Loving my results after just 6 weeks!" },
];

export const STATS = [
  { value: 500,  suffix: "+",     label: "Active Members"  },
  { value: 3,    suffix: "",      label: "Expert Trainers" },
  { value: 200,  suffix: "+",     label: "Transformations" },
  { value: 3000, suffix: " sqft", label: "Training Space"  },
];