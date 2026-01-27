'use client';

import { MotionConfig, motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}

export const m = motion;

export function useEnterVariants(direction: 'right' | 'left' | 'up' = 'right') {
  const reduce = useReducedMotion();

  if (reduce) {
    return {
      initial: { opacity: 1, x: 0, y: 0 },
      animate: { opacity: 1, x: 0, y: 0 },
    };
  }

  const offset = 24;
  const from =
    direction === 'right'
      ? { opacity: 0, x: offset, y: 0 }
      : direction === 'left'
        ? { opacity: 0, x: -offset, y: 0 }
        : { opacity: 0, x: 0, y: offset };

  return {
    initial: from,
    animate: { opacity: 1, x: 0, y: 0 },
  };
}
