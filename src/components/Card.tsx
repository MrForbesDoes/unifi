'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import PlaceholderImage from '@/src/components/PlaceholderImage';
import { variants, COOL_EASE } from './motion';

type CardProps = {
  children: ReactNode;
  className?: string;
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Card({
  children,
  className = '',
  withImage = true,
  imageSrc = '/unifi-assets/Picture6.png',
  imageAlt = '',
}: CardProps) {
  return (
    <motion.div
      variants={variants.fadeInUp}
      transition={{ duration: 0.8, ease: COOL_EASE }}
      className={`group bg-white border border-gray-100 rounded-sm p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:translate-y-[-4px] ${className}`.trim()}
    >
      {withImage ? (
        <div className="overflow-hidden rounded-sm mb-8">
          <PlaceholderImage
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[16/10] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
        </div>
      ) : null}
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
}
