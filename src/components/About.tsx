import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Sparkles, BookOpen, AudioLines } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "VIDEO EDITING",
    icon: Film,
  },
  {
    number: "02",
    title: "MOTION GRAPHICS",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "VISUAL STORYTELLING",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "SOUND DESIGN",
    icon: AudioLines,
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative w-full py-32 bg-bg-primary/60 backdrop-blur-sm overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Heading & Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 block"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-10"
            >
              A LITTLE ABOUT ME.
            </motion.h2>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hey, I'm Nitesh — a video editor and motion graphic designer from
                Delhi.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I've been spending the last year turning footage, ideas and timelines
                into content that actually feels alive.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                What I enjoy most about editing is that moment when everything
                suddenly clicks — the cut, the music, the motion, the typography and
                the pacing all working together.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-text-primary font-medium"
              >
                That's probably why I can spend way too much time tweaking a
                two-second shot and still enjoy it.
              </motion.p>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 bg-bg-secondary border border-border rounded-2xl overflow-hidden transition-colors duration-500 hover:border-accent/40 hover:bg-bg-tertiary"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-widest text-text-muted mb-6 block">
                    {card.number}
                  </span>
                  <card.icon
                    size={28}
                    className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    {card.title}
                  </h3>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
