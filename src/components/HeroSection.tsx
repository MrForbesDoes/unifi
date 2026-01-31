'use client';

import { useState, useEffect } from 'react';
import { homeContent } from '@/src/content/home';
import Text from './Text';
import Link from 'next/link';
import { m, TextReveal, COOL_EASE } from './motion';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const { headline, supportingLines, image } = homeContent.hero;

  useEffect(() => {
    if (currentLineIndex < supportingLines.length) {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, 2000); // 2 seconds delay for each line
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, supportingLines.length]);

  const displayedLines = [headline, ...supportingLines.slice(0, currentLineIndex)];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h1 
            className="font-sans font-bold text-white drop-shadow-lg leading-[1.1] text-6xl xl:text-7xl mb-10"
            style={{ fontFamily: "'Ubuntu', sans-serif" }}
          >
            <TextReveal>
              {displayedLines.map((line, index) => (
                <m.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.5, duration: 0.8, ease: COOL_EASE }}
                  className="block"
                >
                  {line}
                </m.span>
              ))}
            </TextReveal>
          </h1>
          
          {/* CTA Button */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (displayedLines.length * 0.5) + 0.3, duration: 0.8, ease: COOL_EASE }}
          >
            <Link 
              href="/platform/overview" // Assuming a default CTA for now
              className="inline-block px-10 py-4 font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-2xl"
              style={{ fontFamily: "'Ubuntu', sans-serif" }}
            >
              Explore Platform
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
}
