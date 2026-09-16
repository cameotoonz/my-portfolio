import { motion } from "framer-motion";
import { Mail, Phone, ArrowUp } from "lucide-react";
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
  { name: "WhatsApp", url: WHATSAPP ? `https://wa.me/91${WHATSAPP}` : "", Icon: () => <Phone size={20} /> },
  { name: "Email", url: EMAIL ? `mailto:${EMAIL}` : "", Icon: () => <Mail size={20} /> },
].filter((link) => link.url);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-16 bg-bg-primary border-t border-border">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-12">
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-3">
              NITESH KUAMR
            </h3>
            <p className="text-text-secondary mb-1">Video Editor & Motion Graphic Designer</p>
            <p className="text-text-muted text-sm">Delhi, India</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              {EMAIL && (
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={14} />
                  {EMAIL}
                </a>
              )}
              {MOBILE && (
                <a
                  href={`tel:+91${MOBILE}`}
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Phone size={14} />
                  +91 {MOBILE}
                </a>
              )}
            </div>
          </div>

          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <link.Icon />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-border/50">
          <p className="text-sm text-text-muted">
            © 2026 Nitesh Kuamr. All Rights Reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
