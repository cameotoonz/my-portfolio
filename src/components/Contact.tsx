import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { EMAIL, MOBILE, WHATSAPP, INSTAGRAM, YOUTUBE_CHANNEL, LINKEDIN } from "@/lib/data";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", url: INSTAGRAM, Icon: InstagramIcon },
  { name: "YouTube", url: YOUTUBE_CHANNEL, Icon: YouTubeIcon },
  { name: "LinkedIn", url: LINKEDIN, Icon: LinkedInIcon },
].filter((link) => link.url);

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactItems = [
    {
      label: "Mobile & WhatsApp",
      value: `+91 ${MOBILE}`,
      href: `tel:+91${MOBILE}`,
      subHref: `https://wa.me/91${WHATSAPP}`,
      subLabel: "WhatsApp",
      icon: Phone,
    },
    {
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: Mail,
    },
    {
      label: "Instagram",
      value: "@framesbyniteshh",
      href: INSTAGRAM,
      icon: InstagramIcon,
    },
  ];

  return (
    <section id="contact" className="relative w-full py-32 bg-bg-secondary/80 backdrop-blur-md overflow-hidden">
      {/* Section accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-accent/10 via-accent/5 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 block"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight"
            >
              LET'S WORK
              <br />
              <span className="text-gradient">TOGETHER</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              Available for video editing, motion graphics, and creative projects.
            </motion.p>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-5 mb-16"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 bg-bg-primary/60 border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/50 hover:glow-amber"
              >
                {/* Hover accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-bg-tertiary border border-border flex items-center justify-center mb-5 group-hover:border-accent/40 transition-colors duration-300">
                    <item.icon className="text-accent" />
                  </div>

                  <p className="text-xs font-bold tracking-widest text-text-muted uppercase mb-3">
                    {item.label}
                  </p>

                  <p className="font-heading text-xl md:text-2xl font-bold text-text-primary group-hover:text-gradient transition-all duration-300 break-all">
                    {item.value}
                  </p>

                  {item.subHref && (
                    <p className="mt-3 text-sm text-text-secondary group-hover:text-accent transition-colors">
                      Message on WhatsApp →
                    </p>
                  )}

                  <ArrowUpRight
                    size={18}
                    className="absolute top-6 right-6 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Direct contact info strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-8 px-8 bg-gradient-to-r from-accent/10 via-bg-tertiary/50 to-highlight/10 border border-border rounded-2xl"
          >
            <a
              href={`tel:+91${MOBILE}`}
              className="text-xl md:text-2xl font-heading font-bold text-text-primary hover:text-accent transition-colors"
            >
              {MOBILE}
            </a>
            <span className="hidden md:block w-1 h-1 rounded-full bg-accent" />
            <a
              href={`mailto:${EMAIL}`}
              className="text-lg md:text-xl font-medium text-text-primary hover:text-accent transition-colors"
            >
              {EMAIL}
            </a>
            <span className="hidden md:block w-1 h-1 rounded-full bg-accent" />
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-text-primary hover:text-accent transition-colors"
            >
              @framesbyniteshh
            </a>
          </motion.div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  <link.Icon />
                  <span className="font-medium">{link.name}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
