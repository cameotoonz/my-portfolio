import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const dnaCards = [
  {
    number: "01",
    title: "STORY",
    headline: "Every cut has a reason.",
    description:
      "Good editing isn't just about making footage look cool. It's about knowing what to show, what to remove and when to let a moment breathe.",
    visual: "timeline",
  },
  {
    number: "02",
    title: "PACING",
    headline: "Make them stay.",
    description:
      "Fast when it needs to be fast. Slow when the moment needs space. The rhythm should keep the viewer engaged without making the edit feel forced.",
    visual: "pacing",
  },
  {
    number: "03",
    title: "MOTION",
    headline: "Make it move.",
    description:
      "Typography, transitions, camera movement, graphics and subtle details — motion should support the story, not distract from it.",
    visual: "motion",
  },
  {
    number: "04",
    title: "SOUND",
    headline: "You should feel the cut.",
    description:
      "Music, SFX, silence and timing can completely change how a scene feels. Sometimes the right sound does more than another transition ever could.",
    visual: "sound",
  },
];

function TimelineVisual() {
  return (
    <div className="relative h-16 flex items-center">
      <div className="absolute inset-x-0 h-px bg-text-muted/30" />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="absolute w-px h-6 bg-accent origin-bottom"
          style={{ left: `${15 + i * 17}%` }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="absolute -top-2 -left-1 w-2 h-2 rounded-full bg-accent"
          />
        </motion.div>
      ))}
      <motion.div
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 w-20 h-8 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />
    </div>
  );
}

function PacingVisual() {
  return (
    <div className="relative h-16 flex items-center gap-2 px-4">
      {[8, 16, 10, 24, 12, 20, 6, 28, 14].map((height, i) => (
        <motion.div
          key={i}
          animate={{ height: [height, height * 1.5, height] }}
          transition={{
            duration: 0.8 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex-1 bg-accent/60 rounded-full"
          style={{ height }}
        />
      ))}
    </div>
  );
}

function MotionVisual() {
  return (
    <div className="relative h-16 flex items-center justify-center">
      <svg viewBox="0 0 200 60" className="w-full h-full">
        <motion.path
          d="M10 50 Q 50 10, 100 30 T 190 20"
          fill="none"
          stroke="rgba(245, 158, 11, 0.3)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <motion.circle
          cx="10"
          cy="50"
          r="5"
          fill="#f59e0b"
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ offsetPath: "path('M10 50 Q 50 10, 100 30 T 190 20')" }}
        />
      </svg>
    </div>
  );
}

function SoundVisual() {
  return (
    <div className="relative h-16 flex items-center justify-center gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: [8 + Math.random() * 8, 28 + Math.random() * 12, 8 + Math.random() * 8],
          }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
          className="w-1.5 bg-accent/70 rounded-full"
          style={{ height: 16 }}
        />
      ))}
    </div>
  );
}

export function EditingDNA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="editing-dna" className="relative w-full py-32 bg-bg-secondary overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary opacity-50" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={ref} className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 block"
          >
            Creative Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6"
          >
            THE EDITING DNA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-secondary"
          >
            What goes into every cut.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {dnaCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 lg:p-10 bg-bg-primary border border-border rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent/40 hover:glow-amber"
            >
              {/* Ambient glow on hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-bold tracking-widest text-text-muted">
                    {card.number}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-accent uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.title}
                  </span>
                </div>

                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-text-primary mb-4 group-hover:text-gradient transition-all duration-300">
                  {card.headline}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {card.description}
                </p>

                {/* Motion Graphic */}
                <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {card.visual === "timeline" && <TimelineVisual />}
                  {card.visual === "pacing" && <PacingVisual />}
                  {card.visual === "motion" && <MotionVisual />}
                  {card.visual === "sound" && <SoundVisual />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="absolute left-1/2 -top-8 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-accent" />
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary leading-snug mb-8">
            The software is just the tool. The real edit happens in the decisions.
          </p>

          {/* Animated timeline cursor */}
          <div className="relative h-1 bg-bg-tertiary rounded-full overflow-hidden max-w-md mx-auto">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
