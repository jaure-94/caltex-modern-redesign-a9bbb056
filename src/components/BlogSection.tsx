import { useEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroStation from "@/assets/hero-station.jpg";
import stationAerial from "@/assets/station-aerial.jpg";
import fuelPump from "@/assets/fuel-pump.jpg";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    image: heroStation,
    category: "Techron® Technology",
    title: "How Techron® Clean & Glide Technology™ Protects Your Engine",
    excerpt: "Discover the science behind Caltex with Techron® and how it keeps your engine deposits-free for optimal performance.",
    date: "Feb 28, 2026",
    readTime: "5 min read",
  },
  {
    image: stationAerial,
    category: "Fuel Tips",
    title: "5 Ways to Improve Your Vehicle's Fuel Efficiency This Summer",
    excerpt: "Simple tips that can help you save fuel and money while driving across South Africa's beautiful landscapes.",
    date: "Feb 15, 2026",
    readTime: "4 min read",
  },
  {
    image: fuelPump,
    category: "Industry News",
    title: "Understanding South Africa's Fuel Price Structure in 2026",
    excerpt: "A breakdown of how fuel prices are determined and what factors influence the monthly changes at the pump.",
    date: "Feb 5, 2026",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".blog-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".blog-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(".blog-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".blog-grid", start: "top 82%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="py-28 md:py-36 bg-background">
      <div className="section-padding section-max">
        {/* Header */}
        <div className="blog-heading flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="section-label mb-5 inline-block">Insights Blog</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              From the <span className="text-gradient-red">Blog</span>
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300">
            View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="blog-card group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-5 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-primary-foreground/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {post.date}
                </div>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
