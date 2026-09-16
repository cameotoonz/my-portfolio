import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { shortFormVideos, type VideoItem } from "@/lib/data";
import { VideoModal } from "./VideoModal";

function ShortFormCard({
  video,
  index,
  onSelect,
}: {
  video: VideoItem;
  index: number;
  onSelect: (video: VideoItem) => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isInstagram = video.platform === "instagram";
  const thumbnail =
    video.thumbnail ||
    (!isInstagram ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` : undefined);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(video)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-bg-secondary border border-border transition-all duration-500 group-hover:border-accent/40 group-hover:glow-amber">
        {thumbnail && !imageError ? (
          <img
            src={thumbnail}
            alt="Video thumbnail"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-bg-tertiary p-6 text-center">
            {isInstagram ? (
              <>
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-accent mb-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                <span className="text-text-muted text-sm">Instagram Reel</span>
              </>
            ) : (
              <span className="text-text-muted text-sm">Video thumbnail unavailable</span>
            )}
          </div>
        )}

        {!imageLoaded && !imageError && thumbnail && (
          <div className="absolute inset-0 bg-bg-tertiary animate-pulse" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm scale-90 group-hover:scale-100">
            <Play size={20} className="text-bg-primary fill-current ml-1" />
          </div>
        </div>

        {/* Platform badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-bg-primary/60 backdrop-blur-sm rounded-full border border-border">
          <span className="text-xs font-medium text-text-primary">
            {isInstagram ? "Reel" : "Short"}
          </span>
        </div>
      </div>

        <div className="mt-4">
        {video.title ? (
          <h3 className="font-heading text-base font-semibold text-text-primary group-hover:text-accent transition-colors duration-300 mb-1">
            {video.title}
          </h3>
        ) : null}
        <p className="text-sm text-text-muted">
          {isInstagram ? "Instagram" : "YouTube Shorts"}
        </p>
      </div>
    </motion.div>
  );
}

export function ShortForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  if (shortFormVideos.length === 0) return null;

  return (
    <section id="short-form" className="relative w-full py-32 bg-bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-primary/50 pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div ref={ref} className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 block"
          >
            Quick Cuts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6"
          >
            SHORT FORM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-secondary"
          >
            Fast cuts. Strong hooks. Zero wasted seconds.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-5">
          {shortFormVideos.map((video, index) => (
            <ShortFormCard
              key={`${video.platform}-${video.id}`}
              video={video}
              index={index}
              onSelect={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
