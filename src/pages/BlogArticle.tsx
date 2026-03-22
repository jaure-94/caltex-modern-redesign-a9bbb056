import { useEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

gsap.registerPlugin(ScrollTrigger);

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const articleRef = useRef<HTMLElement>(null);
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!articleRef.current || !post) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".article-hero-img",
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
      );

      tl.fromTo(
        ".article-meta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.6
      );

      tl.fromTo(
        ".article-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power4.out" },
        0.7
      );

      tl.fromTo(
        ".article-excerpt",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.0
      );

      gsap.fromTo(
        ".article-paragraph",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".article-body", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".related-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".related-grid", start: "top 85%" },
        }
      );
    }, articleRef);

    return () => ctx.revert();
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <article ref={articleRef}>
        {/* Hero */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden bg-caltex-dark">
          <div className="article-hero-img absolute inset-[-10px] opacity-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, hsl(215 30% 6% / 0.8) 0%, hsl(215 30% 6% / 0.4) 50%, hsl(215 30% 6% / 0.25) 100%)",
            }}
          />
          <div className="relative z-10 section-padding w-full pb-14 md:pb-20 pt-36">
            <div className="section-max max-w-3xl">
              {/* Breadcrumb */}
              <nav className="article-meta opacity-0 flex items-center gap-2 text-sm mb-6">
                <Link
                  to="/blog"
                  className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
                <span className="text-primary-foreground/30">/</span>
                <span className="text-primary-foreground/70 font-medium">
                  {post.category}
                </span>
              </nav>

              <h1 className="article-title opacity-0 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-primary-foreground leading-[1.1] text-balance">
                {post.title}
              </h1>

              <p className="article-excerpt opacity-0 text-lg text-primary-foreground/55 mt-6 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </section>

        {/* Article Info Bar */}
        <section className="border-b border-border">
          <div className="section-padding section-max max-w-3xl py-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="section-label text-[10px] ml-auto">
              {post.category}
            </span>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 md:py-20">
          <div className="section-padding section-max max-w-3xl article-body">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="article-paragraph opacity-0 text-foreground/80 text-base md:text-lg leading-[1.85] mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Back to Blog CTA */}
        <section className="pb-10">
          <div className="section-padding section-max max-w-3xl">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                <ArrowLeft size={16} /> Back to All Articles
              </Link>
            </Button>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="section-padding section-max">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            More <span className="text-gradient-red">Articles</span>
          </h2>
          <div className="related-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rp) => (
              <Link
                to={`/blog/${rp.slug}`}
                key={rp.slug}
                className="related-card opacity-0 group flex flex-col sm:flex-row gap-5"
              >
                <div className="rounded-xl overflow-hidden shrink-0 sm:w-44 sm:h-32">
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-40 sm:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-muted-foreground mb-1.5 flex items-center gap-2">
                    <Calendar size={11} /> {rp.date}
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                    {rp.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-1">
                    Read <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogArticle;
