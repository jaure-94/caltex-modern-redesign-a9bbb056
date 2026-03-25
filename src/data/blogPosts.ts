import heroStation from "@/assets/hero-station.jpg";
import stationAerial from "@/assets/car-refueling-fuel-station.jpg";
import fuelPump from "@/assets/fuel-pump.jpg";

export interface BlogPost {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "techron-clean-glide-technology-protects-engine",
    image: heroStation,
    category: "Techron® Technology",
    title: "How Techron® Clean & Glide Technology™ Protects Your Engine",
    excerpt:
      "Discover the science behind Caltex with Techron® and how it keeps your engine deposits-free for optimal performance.",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    author: "Caltex SA Editorial",
    content: [
      "Modern engines are precision instruments. Every component is engineered to tight tolerances, and even small amounts of deposit build-up can degrade performance, increase fuel consumption, and raise emissions. That's where Techron® Clean & Glide Technology™ comes in.",
      "Developed by Chevron scientists, Techron® is a patented fuel additive that goes to work from your very first fill-up. It targets harmful deposits on intake valves, fuel injectors, and combustion chambers — areas where carbon build-up is most damaging.",
      "Unlike many aftermarket fuel additives, Techron® is blended directly into every litre of Caltex petrol and diesel. This means you don't need to remember to add anything extra at the pump. Every time you fill up at a Caltex station, you're already giving your engine the cleaning treatment it deserves.",
      "The 'Glide' in Clean & Glide Technology™ refers to the friction-reducing properties of the formulation. By minimising metal-to-metal contact in critical engine parts, Techron® helps your engine run smoother and quieter, contributing to a more enjoyable driving experience.",
      "Independent tests have shown that engines running on Caltex with Techron® can recover up to 95% of original engine performance after just a few tanks. Whether you drive a compact city car or a heavy-duty bakkie, the benefits are tangible.",
      "South Africa's diverse driving conditions — from the stop-start traffic of Johannesburg to the long stretches of the N1 — make deposit control especially important. Techron® is formulated to perform in all conditions, giving you peace of mind wherever the road takes you.",
    ],
  },
  {
    slug: "improve-vehicle-fuel-efficiency-summer",
    image: stationAerial,
    category: "Fuel Tips",
    title: "5 Ways to Improve Your Vehicle's Fuel Efficiency This Summer",
    excerpt:
      "Simple tips that can help you save fuel and money while driving across South Africa's beautiful landscapes.",
    date: "Feb 15, 2026",
    readTime: "4 min read",
    author: "Caltex SA Editorial",
    content: [
      "With fuel prices constantly fluctuating, every motorist wants to squeeze more kilometres out of every litre. The good news is that a few simple habits can make a real difference to your fuel bill — especially during the warmer summer months.",
      "First, check your tyre pressure regularly. Under-inflated tyres increase rolling resistance, which means your engine has to work harder (and burn more fuel) to keep you moving. Most vehicles have the recommended tyre pressure listed on a sticker inside the driver's door jamb.",
      "Second, lighten your load. Carrying unnecessary weight — roof racks, tools, sports equipment — forces the engine to consume more fuel. If you're not using it, leave it at home.",
      "Third, use your air conditioning wisely. While it's tempting to blast the A/C on a hot Highveld afternoon, it places extra load on the engine. At lower speeds, consider opening the windows instead. At highway speeds, the aerodynamic drag from open windows actually makes A/C the more efficient choice.",
      "Fourth, adopt smooth driving habits. Aggressive acceleration and hard braking waste fuel. Anticipate traffic flow, maintain a steady speed, and use cruise control on long stretches where safe to do so.",
      "Finally, fill up with quality fuel. Caltex with Techron® is formulated to keep your engine clean, which directly supports optimal fuel efficiency. A clean engine is an efficient engine.",
    ],
  },
  {
    slug: "understanding-south-africa-fuel-price-structure-2026",
    image: fuelPump,
    category: "Industry News",
    title: "Understanding South Africa's Fuel Price Structure in 2026",
    excerpt:
      "A breakdown of how fuel prices are determined and what factors influence the monthly changes at the pump.",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    author: "Caltex SA Editorial",
    content: [
      "Every month, South African motorists watch for the Department of Mineral Resources and Energy's fuel price announcement. But how exactly are fuel prices determined, and why do they change so frequently?",
      "South Africa uses a regulated fuel pricing system. The basic fuel price (BFP) is calculated using international refined petroleum product prices, the Rand/US Dollar exchange rate, and freight and insurance costs to ship fuel to South African ports.",
      "On top of the BFP, several levies and taxes are added. The fuel levy is the largest, contributing to the national fiscus. The Road Accident Fund (RAF) levy funds compensation for road accident victims. Together, these government-imposed charges make up a significant portion of the pump price.",
      "Zone differentials account for the cost of transporting fuel from coastal refineries and ports to inland areas. This is why fuel in Gauteng is typically more expensive than in coastal cities like Cape Town or Durban.",
      "The volatile nature of international crude oil markets and currency fluctuations means that fuel prices can swing significantly from month to month. Geopolitical events, OPEC production decisions, and global demand all play a role.",
      "While individual motorists can't control macro-economic factors, they can control how efficiently they use fuel. Choosing a quality fuel like Caltex with Techron® helps ensure every rand spent at the pump delivers maximum value through better engine performance and efficiency.",
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
