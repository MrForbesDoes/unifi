'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cardHover } from '@/src/lib/animations';

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedCard({
  children,
  className = '',
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className={`bg-white border border-gray-200 rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}
