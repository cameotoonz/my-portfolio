import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { longFormVideos, type VideoItem } from "@/lib/data";
import { VideoModal } from "./VideoModal";

function LongFormCard({
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

  const thumbnail = video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(video)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-bg-secondary border border-border transition-all duration-500 group-hover:border-accent/40 group-hover:glow-amber">
        {/* Thumbnail */}
        {!imageError ? (
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
          <div className="w-full h-full flex items-center justify-center bg-bg-tertiary">
            <span className="text-text-muted text-sm">Video thumbnail unavailable</span>
          </div>
        )}

        {/* Loading skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-bg-tertiary animate-pulse" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-bg-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
          >
            <Play size={24} className="text-bg-primary fill-current ml-1" />
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-bg-primary/60 backdrop-blur-sm rounded-full border border-border">
          <span className="text-xs font-medium text-text-primary">Long Form</span>
        </div>
      </div>

        <div className="mt-5 flex items-center justify-between">
        <div>
          {video.title ? (
            <h3 className="font-heading text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300 mb-1">
              {video.title}
            </h3>
          ) : null}
          <p className="text-sm text-text-muted">YouTube</p>
        </div>
        <ArrowRight
          size={18}
          className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4"
        />
      </div>
    </motion.div>
  );
}

export function LongForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  if (longFormVideos.length === 0) return null;

  return (
    <section id="long-form" className="relative w-full py-32 bg-bg-primary/70 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div ref={ref} className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 block"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-6"
          >
            LONG FORM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-secondary"
          >
            Stories that have room to breathe.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {longFormVideos.map((video, index) => (
            <LongFormCard
              key={video.id}
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
