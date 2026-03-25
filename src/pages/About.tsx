import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Fuel, MapPin, Users, Shield, Award, Building2, Briefcase, Factory, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stationAerial from "@/assets/sa-highway.jpg";
import heroNight from "@/assets/caltex-bgc-d.jpg";
import familyStation from "@/assets/family-station.jpg";
import freshstop from "@/assets/freshstop.png";
import engineClean from "@/assets/engine-clean.jpg";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  { year: "1936", title: "The Journey Begins", description: "Caltex is founded, beginning its mission to fuel journeys across the globe. The iconic Caltex Star becomes a symbol of quality and trust." },
  { year: "1966", title: "Milnerton Refinery", description: "Caltex bolsters its standing as a key South African investor with the construction of a refinery in Milnerton, Cape Town." },
  { year: "1973", title: "CX-3 Fuel Launch", description: "Caltex launches its iconic CX-3 fuel brand in South Africa — the first fuel proven to clean your engine and keep it clean." },
  { year: "1977", title: "Sullivan Principles", description: "As a founder signatory of the anti-apartheid Sullivan Principles, Caltex provides education, career promotion, and aid programmes for South Africans." },
  { year: "1996", title: "Delta Star Identity", description: "A bold brand identity campaign introduces the new Delta Star logo, featuring the distinctive five-point star with a dynamic delta at its centre." },
  { year: "2006", title: "Techron® Technology", description: "We introduce the technologically-advanced Techron® fuel-cleaning additive, setting a new standard for engine care across Africa and Asia Pacific." },
  { year: "2014", title: "Green Building HQ", description: "Caltex South Africa relocates to a brand new, 5-star rated Green Building in Century City, Cape Town." },
  { year: "2024", title: "800+ Stations Strong", description: "Our journey continues with over 800 stations nationwide, serving millions of South African motorists with quality fuel and convenience." },
];

const values = [
  { icon: Shield, title: "Quality & Trust", description: "Every drop of Caltex fuel is enhanced with Techron® technology, delivering clean, reliable performance you can count on." },
  { icon: Users, title: "Customer First", description: "Our journey has only one destination — you. We exist to renew your drive and meet the needs of every journey." },
  { icon: Fuel, title: "Innovation", description: "From CX-3 to Techron®, we continuously invest in fuel technology that keeps engines cleaner and running smoother." },
  { icon: Award, title: "Community", description: "Rooted in South Africa since 1936, we are committed to empowering communities and driving sustainable growth." },
];

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(".about-hero-content > *",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(".about-hero-image",
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Mission section
      gsap.fromTo(".mission-content > *",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".mission-content", start: "top 80%" },
        }
      );

      gsap.fromTo(".mission-images > *",
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".mission-images", start: "top 80%" },
        }
      );

      // Timeline items
      gsap.fromTo(".timeline-item",
        { opacity: 0, x: (i: number) => (i % 2 === 0 ? -60 : 60) },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".timeline-section", start: "top 75%" },
        }
      );

      // Timeline line draw
      gsap.fromTo(".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.5, ease: "power2.out",
          scrollTrigger: { trigger: ".timeline-section", start: "top 80%" },
        }
      );

      // Values cards
      gsap.fromTo(".value-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".values-section", start: "top 80%" },
        }
      );

      // SA Facts cards
      gsap.fromTo(".sa-fact-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".sa-fact-card", start: "top 85%" },
        }
      );

      // CTA section
      gsap.fromTo(".about-cta > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".about-cta", start: "top 85%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden bg-caltex-dark">
        <div className="about-hero-image absolute inset-[-20px] opacity-0">
          <img src={heroNight} alt="Caltex Station" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-caltex-dark/95 via-caltex-dark/80 to-caltex-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-caltex-dark/70 via-transparent to-caltex-dark/40" />

        <div className="relative z-10 section-padding w-full pt-40 pb-24">
          <div className="about-hero-content max-w-3xl">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors mb-8 text-sm font-medium"
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>

              <span className="section-label mb-6 inline-block w-fit">Our Journey</span>
            </div>

            <h1 className="opacity-0 font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
              One Journey.{" "}
              <span className="text-gradient-red">Almost 90 Years</span>{" "}
              in the Making.
            </h1>

            <p className="opacity-0 text-lg md:text-xl text-primary-foreground/60 max-w-xl mb-10 font-body leading-relaxed">
              Since 1936, Caltex has been on a journey with only one destination — the satisfaction of our customers. Our symbol of quality, value and service is a constant reminder of our commitment to you.
            </p>

            <div className="opacity-0 flex flex-wrap gap-4">
              <Link to="/find-a-station">
                <Button variant="hero" size="xl">
                  Explore Our Stations <MapPin size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll CTA */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary-foreground/30 z-10">
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Discover</span>
          <div className="w-[22px] h-[34px] rounded-full border-2 border-primary-foreground/20 flex items-start justify-center p-1.5">
            <div className="w-[3px] h-[8px] rounded-full bg-primary/80 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionRef} className="py-28 md:py-36 bg-background relative overflow-hidden">
        <div className="section-padding section-max">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Images */}
            <div className="mission-images relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img src={stationAerial} alt="South African Highway" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-caltex-dark/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-3 md:right-6 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg border-[5px] border-background">
                <img src={familyStation} alt="Happy motorists" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -left-4 -top-4 w-24 h-24 dot-pattern rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="mission-content">
              <span className="section-label mb-5 inline-block opacity-0">Our Mission</span>
              <h2 className="opacity-0 font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Renewing Your Drive,{" "}
                <span className="text-gradient-red">Every Day</span>
              </h2>
              <p className="opacity-0 text-muted-foreground text-lg leading-relaxed mb-6">
                At Caltex, our journey has only one destination — you. We exist to renew your drive. To do the best we can to help you meet the needs of your journey. To recharge and refuel, not just your vehicle but your being.
              </p>
              <p className="opacity-0 text-muted-foreground text-lg leading-relaxed mb-8">
                In addition to our accessible locations, modern facilities, high-quality products, and fast and friendly service, we're always on the lookout for new partnerships that can deliver an even greater range of conveniences for you.
              </p>
              <div className="opacity-0 grid grid-cols-2 gap-6">
                {[
                  // { value: "800+", label: "Stations Nationwide" },
                  { value: "90", label: "Years of Trust" },
                  // { value: "29", label: "Countries Worldwide" },
                  { value: "24/7", label: "FreshStop Convenience" },
                ].map((stat) => (
                  <div key={stat.label} className="py-4 border-l-2 border-primary/30 pl-5">
                    <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="timeline-section py-28 md:py-36 bg-caltex-dark relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 bg-gradient-to-b from-caltex-dark via-caltex-navy/30 to-caltex-dark" />

        <div className="relative z-10 section-padding section-max">
          <div className="text-center mb-20">
            <span className="section-label mb-5 inline-block">Our History</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Milestones That{" "}
              <span className="text-gradient-red">Define Us</span>
            </h2>
            <p className="text-primary-foreground/50 text-lg max-w-2xl mx-auto">
              From our founding in 1936 to serving millions today, every milestone reflects our unwavering commitment to South African motorists.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent origin-top" />

            <div className="space-y-16">
              {timelineEvents.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`timeline-item relative flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div className={`w-[calc(50%-2rem)] ${isLeft ? "text-right" : "text-left"}`}>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3">
                        <span className="text-sm font-bold text-primary tracking-wider">{event.year}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">{event.title}</h3>
                      <p className="text-primary-foreground/50 text-sm leading-relaxed">{event.description}</p>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-red-glow z-10">
                      <div className="absolute inset-0 rounded-full bg-primary animate-pulse-soft" />
                    </div>

                    {/* Spacer */}
                    <div className="w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="values-section py-28 md:py-36 bg-background relative overflow-hidden">
        <div className="section-padding section-max">
          <div className="text-center mb-16">
            <span className="section-label mb-5 inline-block">What Drives Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Our Core{" "}
              <span className="text-gradient-red">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do — from how we develop our fuel technology to how we serve you at every station.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="value-card group relative rounded-2xl border border-border bg-card p-8 hover-lift cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Things to Know - South Africa Focus */}
      <section className="py-28 md:py-36 bg-caltex-dark relative overflow-hidden">
        {/* SA flag-inspired accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[hsl(145,60%,35%)] via-[hsl(48,95%,55%)] to-[hsl(0,82%,48%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-caltex-dark via-caltex-navy/40 to-caltex-dark" />

        <div className="relative z-10 section-padding section-max">
          <div className="text-center mb-16">
            <span className="section-label mb-5 inline-block">Proudly South African</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              5 Things to Know About{" "}
              <span className="text-gradient-red">Caltex South Africa</span>
            </h2>
            <p className="text-primary-foreground/50 text-lg max-w-2xl mx-auto">
              Headquartered in Cape Town, we are proudly South African — powering the nation's journeys with quality, innovation, and community commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: UserCheck,
                number: "1,500+",
                title: "Dedicated Employees",
                description: "Caltex employs over 1,500 people in South Africa, trained to help you find the right products to meet all your needs.",
              },
              {
                icon: Building2,
                number: "Cape Town",
                title: "Our Home Base",
                description: "We are headquartered in Cape Town and form part of the greater Africa-Pakistan-Middle East region.",
              },
              {
                icon: Briefcase,
                number: "4+",
                title: "Business Units",
                description: "Our business is divided into units such as products, lubricants, value chain optimisation, and manufacturing.",
              },
              {
                icon: MapPin,
                number: "800+",
                title: "Stations Nationwide",
                description: "There are over 800 Caltex service stations across South Africa, from the Western Cape to Limpopo.",
              },
              {
                icon: Factory,
                number: "87+",
                title: "Years in SA",
                description: "Since 1936, Caltex has been an integral part of South Africa's energy landscape, fuelling growth and opportunity.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`sa-fact-card group relative rounded-2xl border border-primary/10 bg-primary-foreground/[0.03] backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500 ${i === 3 ? "lg:col-start-1 lg:col-end-2 md:col-span-1" : ""} ${i === 4 ? "lg:col-start-2 lg:col-end-3 md:col-span-1" : ""}`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-primary mb-1">{item.number}</div>
                    <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{item.title}</h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom SA flag stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[hsl(0,82%,48%)] via-[hsl(48,95%,55%)] to-[hsl(145,60%,35%)]" />
      </section>

      {/* FreshStop & Convenience */}
      <section className="py-28 md:py-36 bg-muted relative overflow-hidden">
        <div className="section-padding section-max">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="about-cta">
              <span className="section-label mb-5 inline-block opacity-0">More Than Fuel</span>
              <h2 className="opacity-0 font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                FreshStop Convenience,{" "}
                <span className="text-gradient-red">Wherever You Go</span>
              </h2>
              <p className="opacity-0 text-muted-foreground text-lg leading-relaxed mb-6">
                Our FreshStop convenience stores offer everything you need on the go — from fresh coffee and snacks to essential groceries. Open 24/7 at locations nationwide, because your journey shouldn't stop for anything.
              </p>
              <p className="opacity-0 text-muted-foreground text-lg leading-relaxed mb-8">
                With Tap & Go contactless payment, clean restrooms, and friendly service, every Caltex station is designed to make your stop as quick and pleasant as possible.
              </p>
              <div className="opacity-0">
                <Link to="/find-a-station">
                  <Button variant="hero" size="lg">
                    Find Your Nearest Station <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img src={freshstop} alt="FreshStop Convenience Store" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-[5px] border-background">
                <img src={engineClean} alt="Techron Clean Engine" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
