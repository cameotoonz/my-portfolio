import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Understand the idea, audience and objective.",
  },
  {
    number: "02",
    title: "BUILD",
    description: "Create the structure, pacing and edit.",
  },
  {
    number: "03",
    title: "POLISH",
    description: "Add motion, typography, sound design and color.",
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Review, refine and deliver the final video.",
  },
];

export function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full py-32 bg-bg-secondary overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 block"
          >
            Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6"
          >
            HOW I BUILD A VIDEO
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Timeline line background */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-bg-tertiary" />

          {/* Animated timeline line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-accent via-highlight to-accent origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg-secondary z-10 shadow-lg shadow-accent/30" />

                {/* Content */}
                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <span className="text-xs font-bold tracking-widest text-accent mb-3 block">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
