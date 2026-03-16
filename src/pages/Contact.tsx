import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, ChevronDown, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroNight from "@/assets/hero-night.jpg";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  callMe: z.boolean().optional(),
  userType: z.enum(["motorist", "business"], { required_error: "Please select one" }),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const motoristEnquiries = [
  "General Enquiry",
  "Technical Enquiry",
  "Careers Enquiry",
  "Media Enquiry",
];

const businessEnquiries = [
  "Fleet Cards Enquiry",
  "Commercial & Industrial Enquiry",
  "Lubricants Sales / Enquiry",
  "General Enquiry",
  "Technical Enquiry",
  "Franchising Enquiry",
];

const contactDetails = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["Caltex House, Century City", "Cape Town, South Africa"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["0800 022 5839", "Mon – Fri: 08:00 – 17:00"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@caltex.co.za", "We respond within 24 hours"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Friday", "08:00 – 17:00 SAST"],
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      callMe: false,
      userType: undefined,
      enquiryType: "",
      message: "",
    },
  });

  const watchUserType = form.watch("userType");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    form.setValue("enquiryType", "");
  }, [watchUserType, form]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-content > *",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".contact-hero-image",
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-cards-grid", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".contact-form-section",
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-form-section", start: "top 80%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const enquiryOptions = watchUserType === "business" ? businessEnquiries : motoristEnquiries;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroNight} alt="Caltex station" className="contact-hero-image w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/50" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>

        <div className="relative z-10 section-padding section-max w-full py-32 lg:py-40">
          <div className="contact-hero-content max-w-2xl">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm font-medium mb-6 transition-colors">
              ← Back to Home
            </Link>
            <span className="section-label mb-5 inline-block">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-5">
              Contact <span className="text-gradient-red">Caltex SA</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-xl">
              Whether you're a motorist or a business, our team is here to help with any enquiry. Reach out and let us fuel your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-16 z-20 section-padding section-max">
        <div className="contact-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactDetails.map((item, i) => (
            <div
              key={i}
              className="contact-card group bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-red-gradient flex items-center justify-center mb-4 shadow-red-glow group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-sm text-muted-foreground">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section section-padding section-max py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="section-label mb-4 inline-block">How Can We Help?</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mt-4">
                Send Us a <span className="text-gradient-red">Message</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                Fill in the form and our team at Caltex South Africa will get back to you within 24 hours. Whether it's about fleet cards, lubricants, franchising, or just a general enquiry — we're here to help.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h4 className="font-display font-bold text-foreground mb-3 text-sm">Quick tip</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For the fastest response, select your user type and enquiry category. This helps us route your message to the right team at our Cape Town head office.
              </p>
            </div>

            {/* SA accent */}
            <div className="hidden lg:block">
              <div className="flex gap-1.5 h-2 rounded-full overflow-hidden w-40">
                <div className="flex-1 bg-[hsl(120,60%,30%)]" />
                <div className="flex-1 bg-[hsl(50,90%,55%)]" />
                <div className="flex-1 bg-[hsl(356,82%,46%)]" />
                <div className="flex-1 bg-[hsl(215,55%,10%)]" />
                <div className="flex-1 bg-[hsl(210,80%,45%)]" />
                <div className="flex-1 bg-[hsl(38,92%,55%)]" />
              </div>
              <p className="text-xs text-muted-foreground mt-3 tracking-wide">Proudly South African since 1936</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-red-gradient flex items-center justify-center mb-6 shadow-red-glow">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  Your message has been received. Our team in Cape Town will respond within 24 hours.
                </p>
                <Button variant="default" onClick={() => { setSubmitted(false); form.reset(); }}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} className="h-12 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} className="h-12 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email & phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} className="h-12 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+27 ..." {...field} className="h-12 rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Call me checkbox */}
                  <FormField
                    control={form.control}
                    name="callMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="w-5 h-5 rounded border-2 border-input accent-primary cursor-pointer"
                          />
                        </FormControl>
                        <FormLabel className="cursor-pointer text-sm text-muted-foreground font-normal">
                          I'd like Caltex to call me back
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  {/* User type */}
                  <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Are you a: *</FormLabel>
                        <div className="flex gap-3">
                          {(["motorist", "business"] as const).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => field.onChange(type)}
                              className={`flex-1 h-12 rounded-xl font-semibold text-sm transition-all duration-300 border-2 cursor-pointer ${
                                field.value === type
                                  ? "bg-red-gradient text-primary-foreground border-transparent shadow-red-glow"
                                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                              }`}
                            >
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Enquiry type */}
                  {watchUserType && (
                    <FormField
                      control={form.control}
                      name="enquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What can we help you with? *</FormLabel>
                          <div className="relative">
                            <FormControl>
                              <select
                                {...field}
                                className="w-full h-12 rounded-xl border-2 border-input bg-background px-4 pr-10 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                              >
                                <option value="" disabled>Select an enquiry type</option>
                                {enquiryOptions.map((opt) => (
                                  <option key={opt} value={opt}>{opt}</option>
                                ))}
                              </select>
                            </FormControl>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help?"
                            rows={5}
                            {...field}
                            className="rounded-xl resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
                    <Send className="w-4 h-4" />
                    Submit Enquiry
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
