import { Variants } from 'framer-motion';

// Page transition variants (Cluely style - smooth, premium)
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

// Scroll reveal variants (CoolPlanet style - smooth section reveals)
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
    },
  },
};

// Stagger children variants for lists/grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Hero motion variants (CoolPlanet style)
export const heroMotion: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Hero supporting lines stagger
export const heroStagger: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const heroLine: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Card hover variants (Cluely style - premium, restrained)
export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Button hover variants
export const buttonHover: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Link hover variants (subtle underline animation)
export const linkHover: Variants = {
  rest: {
    opacity: 1,
  },
  hover: {
    opacity: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

// Background movement variants (subtle parallax-like effect - CoolPlanet style)
export const backgroundMovement: Variants = {
  initial: {
    scale: 1.05,
    opacity: 0.4,
  },
  animate: {
    scale: 1,
    opacity: 0.6,
    transition: {
      duration: 15,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

// Parallax scroll effect for backgrounds
export const parallaxBackground: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 8,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

// Fade in variants
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Slide up variants
export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
