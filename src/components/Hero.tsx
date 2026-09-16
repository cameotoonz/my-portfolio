import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / innerWidth);
      mouseY.set((clientY - innerHeight / 2) / innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background ambient glow */}
      <motion.div
        style={{
          x: useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [-30, 30]),
          y: useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [-30, 30]),
        }}
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-radial-amber blur-3xl opacity-60"
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

      {/* Floating motion design elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-accent/60"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-[10%] w-2 h-2 rounded-full bg-highlight/50"
      />

      {/* Timeline decoration */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full min-h-screen px-6 md:px-12 lg:px-20 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
                Video Editor × Motion Designer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-text-primary mb-4"
            >
              NITESH
              <br />
              <span className="text-gradient">KUAMR</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg md:text-xl text-text-secondary font-medium mb-6"
            >
              Video Editor & Motion Graphic Designer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-text-primary leading-tight mb-6"
            >
              I turn raw footage into stories worth watching.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed mb-10"
            >
              Give me a timeline, some footage and an idea — I'll probably have way
              too much fun turning it into something people actually want to watch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleNavClick("#long-form")}
                className="group relative px-8 py-4 bg-accent text-bg-primary font-bold tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:bg-highlight hover:shadow-lg hover:shadow-accent/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  VIEW MY WORK
                  <Play size={16} className="fill-current" />
                </span>
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="group px-8 py-4 border border-border text-text-primary font-bold tracking-wide rounded-full transition-all duration-300 hover:border-accent hover:text-accent"
              >
                LET'S WORK TOGETHER
              </button>
            </motion.div>
          </div>

          {/* Right Content - Portrait */}
          <motion.div
            style={{ y: imageY }}
            className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Cinematic glow behind portrait */}
              <motion.div
                style={{
                  x: useTransform(springX, [-0.5, 0.5], isMobile ? [0, 0] : [-15, 15]),
                  y: useTransform(springY, [-0.5, 0.5], isMobile ? [0, 0] : [-15, 15]),
                }}
                className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-transparent to-highlight/10 rounded-3xl blur-3xl opacity-60"
              />

              {/* Warm side light */}
              <div className="absolute -left-20 top-1/4 w-64 h-96 bg-accent/20 rounded-full blur-[100px] opacity-50" />

              {/* Portrait image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://instagram.fdel3-5.fna.fbcdn.net/v/t51.82787-19/778426757_18091475009129109_6443720173740760861_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=CDB1OZ-xi_cQ7kNvwG92aEZ&_nc_oc=AdrH8raz24KY7TS1FI0IOa5mWcvo_-1YPBB0GY5B5Hulq7NBBJUJUmvqay5wg_mJtXo&_nc_zt=24&_nc_ht=instagram.fdel3-5.fna&_nc_gid=0aWBG-Zr5JkGgjqLTAV_Vg&_nc_ss=7b2a8&oh=00_AQHo3cWstXhESfXpcqvKiSfjBO-BD0uCb7jByQy2Db0lfw&oe=6A934C1F"
                  alt="Nitesh Kuamr - Video Editor & Motion Designer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -left-4 lg:-left-12 bottom-20 px-5 py-3 bg-bg-secondary/90 backdrop-blur-md border border-border rounded-xl"
              >
                <p className="text-xs text-text-muted uppercase tracking-wider">Based in</p>
                <p className="text-sm font-bold text-text-primary">Delhi, India</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute -right-4 lg:-right-8 top-32 px-5 py-3 bg-bg-secondary/90 backdrop-blur-md border border-border rounded-xl"
              >
                <p className="text-xs text-text-muted uppercase tracking-wider">Experience</p>
                <p className="text-sm font-bold text-text-primary">1 Year</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
