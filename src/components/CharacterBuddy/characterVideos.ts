export const BUDDY_STATES = ["intro", "idle", "speak"] as const;

export type BuddyState = (typeof BUDDY_STATES)[number];

export type BuddyClip = {
  webm: string;
  mov: string;
  mp4: string;
  poster: string;
  loop: boolean;
};

/**
 * Jango buddy clips. Swap files here — do not hardcode URLs in the component.
 *
 * Drop transparent videos in `public/videos/jango/`:
 *   intro.webm / intro.mov / intro.mp4
 *   idle.webm  / idle.mov  / idle.mp4
 *   speak.webm / speak.mov / speak.mp4
 *
 * Pose mapping:
 *   intro / speak → jango-speak
 *   idle         → jango-idle
 */
export const characterVideos: Record<BuddyState, BuddyClip> = {
  intro: {
    webm: "/videos/jango/intro.webm",
    mov: "/videos/jango/intro.mov",
    mp4: "/videos/jango/intro.mp4",
    poster: "/images/characters/jango-speak.png",
    loop: false,
  },
  idle: {
    webm: "/videos/jango/idle.webm",
    mov: "/videos/jango/idle.mov",
    mp4: "/videos/jango/idle.mp4",
    poster: "/images/characters/jango-idle.png",
    loop: true,
  },
  speak: {
    webm: "/videos/jango/speak.webm",
    mov: "/videos/jango/speak.mov",
    mp4: "/videos/jango/speak.mp4",
    poster: "/images/characters/jango-speak.png",
    loop: false,
  },
};
