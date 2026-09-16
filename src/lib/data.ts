// Contact links — paste real URLs here
export const EMAIL = "niteshedits2002@gmail.com";
export const MOBILE = "9315841623";
export const WHATSAPP = "9315841623";
export const INSTAGRAM = "https://www.instagram.com/framesbyniteshh/";
export const YOUTUBE_CHANNEL = "";
export const LINKEDIN = "";

export interface VideoItem {
  id: string;
  url: string;
  platform: "youtube" | "instagram";
  thumbnail?: string;
  title?: string;
}

function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/short\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function createYouTubeItem(url: string): VideoItem | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  return {
    id,
    url: `https://www.youtube.com/watch?v=${id}`,
    platform: "youtube",
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  };
}

function createInstagramItem(url: string): VideoItem | null {
  const match = url.match(/instagram\.com\/reel\/([a-zA-Z0-9_-]+)/);
  if (!match) return null;
  return {
    id: match[1],
    url,
    platform: "instagram",
  };
}

export const longFormVideos: VideoItem[] = [
  "https://youtu.be/2dtas6lbR80",
  "https://youtu.be/ZdN2ptci7ok",
  "https://youtu.be/pXREsurAuEE",
  "https://youtu.be/0eVg1vVAmYo",
  "https://youtu.be/pPoCS82plQQ",
  "https://youtu.be/xl4ou0YNxDM",
]
  .map(createYouTubeItem)
  .filter((item): item is VideoItem => item !== null);

export const shortFormVideos: VideoItem[] = [
  "https://youtube.com/shorts/7TuPSZmzOqY?si=5FE3wExg4MwS_7SY",
  "https://youtube.com/shorts/WM5w5YWv5jA?si=XH15Y4yErWTbGpl7",
  "https://youtube.com/shorts/e3TQGlrSkCY?si=pZwC4P5rcaMKglYM",
  "https://youtube.com/shorts/ATLVCgPAqFM?si=W3F7Xfu4C1ad1VhD",
  "https://youtube.com/shorts/6UCzopp1q5M?si=eXdKgdiIberMTvnl",
  "https://youtube.com/shorts/FkyK4tV-kO4?si=arcYl7pV-WuFqQF7",
]
  .map((url) => {
    if (url.includes("youtube.com/shorts") || url.includes("youtu.be")) {
      return createYouTubeItem(url);
    }
    if (url.includes("instagram.com")) {
      return createInstagramItem(url);
    }
    return null;
  })
  .filter((item): item is VideoItem => item !== null);

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Editing DNA", href: "#editing-dna" },
  { name: "Long Form", href: "#long-form" },
  { name: "Short Form", href: "#short-form" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  { name: "Video Editing", detail: "Premiere Pro", icon: "film" },
  { name: "Motion Graphics", detail: "After Effects", icon: "sparkles" },
  { name: "Visual Design", detail: "Photoshop + Illustrator", icon: "palette" },
  { name: "Sound Design", detail: "Music + SFX + Audio Timing", icon: "audio" },
  { name: "Storytelling", detail: "Pacing + Structure + Visual Flow", icon: "book-open" },
  { name: "Color", detail: "Color Correction + Creative Grading", icon: "sun" },
];
