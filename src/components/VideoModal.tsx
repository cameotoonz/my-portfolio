import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { VideoItem } from "@/lib/data";

interface VideoModalProps {
  video: VideoItem;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isYouTube = video.platform === "youtube";
  const isShort = video.url.includes("/shorts/");
  const embedUrl = isYouTube
    ? `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`
    : null;

  const isVertical = isShort || video.platform === "instagram";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-primary/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full bg-bg-secondary rounded-2xl overflow-hidden border border-border glow-amber ${
          isVertical ? "max-w-md aspect-[9/16]" : "max-w-5xl aspect-video"
        }`}
      >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-bg-primary/80 text-text-primary rounded-full hover:bg-accent hover:text-bg-primary transition-colors"
            aria-label="Close video"
          >
            <X size={20} />
          </button>

          {isYouTube && embedUrl ? (
            <iframe
              src={embedUrl}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
              <p className="text-text-secondary mb-6 max-w-md">
                This video is hosted on Instagram. Click below to watch it directly.
              </p>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary font-bold rounded-full hover:bg-highlight transition-colors"
              >
                Watch on Instagram
                <ExternalLink size={16} />
              </a>
            </div>
          )}
      </motion.div>
    </motion.div>
  );
}
