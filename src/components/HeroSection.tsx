'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/src/content/home';
import Section from './Section';
import Text from './Text';
import { heroMotion, heroStagger, heroLine } from '@/src/lib/animations';

export default function HeroSection() {
  return (
    <Section backgroundColor="white" className="min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Subtle background movement (CoolPlanet style) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-gray-50/20 to-transparent pointer-events-none"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tl from-transparent via-gray-50/10 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Headline */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={heroMotion}
        >
          <Text as="h1" variant="h1" className="mb-6">
            {homeContent.hero.headline}
          </Text>
        </motion.div>

        {/* Supporting lines */}
        <motion.div
          className="space-y-4"
          initial="initial"
          animate="animate"
          variants={heroStagger}
        >
          {homeContent.hero.supportingLines.map((line, index) => (
            <motion.div key={index} variants={heroLine}>
              <Text variant="lead">
                {line}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
