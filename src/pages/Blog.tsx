import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "@/components/reusable/PageHero";
import heroStation from "@/assets/hero-station.jpg";
import { blogPosts } from "@/data/blogPosts";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  // Featured post is the first one
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      <PageHero
        title="Insights & Articles"
        subtitle="Stay informed with the latest fuel tips, Techron® technology updates, and South African industry news."
        image={heroStation}
        imageAlt="Caltex station"
        label="Blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      {/* Featured Post */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-padding section-max">
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-72 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-5 left-5">
                <span className="section-label">{featured.category}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> {featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                Read Article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="pb-28 md:pb-36 bg-background">
        <div className="section-padding section-max">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              All <span className="text-gradient-red">Articles</span>
            </h2>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="blog-card group opacity-0"
              >
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
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
