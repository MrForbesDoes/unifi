'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { scrollReveal } from '@/src/lib/animations';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-100px',
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : scrollReveal}
      transition={{
        delay: shouldReduceMotion ? 0 : delay,
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
