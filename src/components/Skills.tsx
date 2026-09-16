import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Sparkles, Palette, AudioLines, BookOpen, Sun } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  film: Film,
  sparkles: Sparkles,
  palette: Palette,
  audio: AudioLines,
  "book-open": BookOpen,
  sun: Sun,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative w-full py-32 bg-bg-primary/60 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.02] blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 block"
          >
            Toolkit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6"
          >
            WHAT I DO
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 bg-bg-secondary border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/40"
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-bg-tertiary border border-border flex items-center justify-center mb-6 group-hover:border-accent/40 transition-colors duration-300">
                    {Icon && <Icon size={26} className="text-accent" />}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2 group-hover:text-gradient transition-all duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-text-secondary">{skill.detail}</p>
                </div>

                {/* Animated corner accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-l-[60px] border-b-accent/10 border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
