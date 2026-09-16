import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export function Personality() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="relative w-full py-40 bg-bg-primary/50 backdrop-blur-sm overflow-hidden">
      {/* Large background text */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-heading text-[12rem] md:text-[20rem] font-bold text-text-primary/[0.02] whitespace-nowrap">
          TIMELINE
        </span>
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-8 block"
          >
            The Mindset
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-12"
          >
            BEHIND THE TIMELINE
          </motion.h2>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl text-text-secondary font-light leading-relaxed"
            >
              Most people see the final 60 seconds.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl text-text-secondary font-light leading-relaxed"
            >
              I see the hundreds of cuts, keyframes, sound effects and that one
              transition I probably spent way too long perfecting.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl text-text-primary font-medium leading-relaxed"
            >
              And honestly?
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-gradient"
            >
              I love it.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
