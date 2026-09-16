import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function Particle({ delay, duration, x, size }: { delay: number; duration: number; x: string; size: number }) {
  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0 }}
      animate={{ y: "-10vh", opacity: [0, 0.5, 0.5, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute rounded-full"
      style={{
        left: x,
        width: size,
        height: size,
        background: size > 2.5 ? "#f4a62c" : "#d30000",
        filter: `blur(${size / 2.5}px)`,
      }}
    />
  );
}

function GeometricShape({ className, delay }: { className?: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: [0.1, 0.25, 0.1], rotate: 360 }}
      transition={{
        opacity: { duration: 10, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 120, repeat: Infinity, ease: "linear" },
      }}
      className={`absolute border border-accent/20 ${className}`}
    />
  );
}

export function Background() {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 25, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 25, damping: 30 });

  const orb1X = useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [-60, 60]);
  const orb1Y = useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [-40, 40]);
  const orb2X = useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [50, -50]);
  const orb2Y = useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [40, -40]);
  const creamX = useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [30, -30]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  const particles = [
    { delay: 0, duration: 20, x: "8%", size: 3 },
    { delay: 4, duration: 24, x: "22%", size: 2 },
    { delay: 9, duration: 22, x: "42%", size: 4 },
    { delay: 2, duration: 27, x: "58%", size: 2 },
    { delay: 12, duration: 21, x: "73%", size: 3 },
    { delay: 6, duration: 25, x: "88%", size: 2 },
    { delay: 15, duration: 23, x: "14%", size: 3 },
    { delay: 18, duration: 19, x: "82%", size: 2 },
    { delay: 1, duration: 26, x: "35%", size: 2.5 },
    { delay: 10, duration: 28, x: "65%", size: 2 },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0805] to-[#0a0a0a]" />

      {/* Warm undertone */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/[0.03] via-transparent to-highlight/[0.02]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(244, 166, 44, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 166, 44, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Large orange blob */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute -top-60 -right-40 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#f4a62c]/20 via-[#f4a62c]/8 to-transparent blur-[140px] animate-pulse-glow"
      />

      {/* Red accent blob */}
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute top-1/4 -left-60 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#d30000]/12 via-[#f4a62c]/5 to-transparent blur-[120px] animate-pulse-glow"
        transition={{ delay: 3 }}
      />

      {/* Cream negative space glow */}
      <motion.div
        style={{ x: creamX }}
        className="absolute bottom-0 right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-[#fdf5e7]/[0.04] via-[#f4a62c]/[0.03] to-transparent blur-[160px] opacity-70"
      />

      {/* Light beams */}
      <div
        className="absolute top-0 left-1/4 w-[2px] h-[70vh] bg-gradient-to-b from-[#f4a62c]/25 via-[#f4a62c]/5 to-transparent opacity-50"
        style={{ transform: "rotate(12deg)", transformOrigin: "top" }}
      />
      <div
        className="absolute top-0 right-1/3 w-[1px] h-[55vh] bg-gradient-to-b from-[#d30000]/20 via-[#f4a62c]/5 to-transparent opacity-40"
        style={{ transform: "rotate(-8deg)", transformOrigin: "top" }}
      />
      <div
        className="absolute top-0 left-2/3 w-[1px] h-[45vh] bg-gradient-to-b from-[#fdf5e7]/10 via-transparent to-transparent opacity-30"
        style={{ transform: "rotate(6deg)", transformOrigin: "top" }}
      />

      {/* Geometric shapes */}
      <GeometricShape
        className="top-[15%] right-[12%] w-64 h-64 rotate-45 opacity-10"
        delay={0}
      />
      <GeometricShape
        className="bottom-[25%] left-[8%] w-48 h-48 rounded-full border-accent/10"
        delay={3}
      />
      <GeometricShape
        className="top-[55%] right-[25%] w-32 h-32 rotate-12 border-red/15"
        delay={6}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.5)_100%)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
}
