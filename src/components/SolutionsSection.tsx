'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/src/content/home';
import Section from './Section';
import AnimatedButtonLink from './AnimatedButtonLink';
import AnimatedCard from './AnimatedCard';
import Text from './Text';
import ScrollReveal from './ScrollReveal';
import { staggerContainer } from '@/src/lib/animations';

export default function SolutionsSection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Text as="h2" variant="h2" className="mb-6">
            {homeContent.solutions.title}
          </Text>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Text variant="body" className="mb-10">
            {homeContent.solutions.intro}
          </Text>
        </ScrollReveal>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {homeContent.solutions.cards.map((card, index) => (
            <motion.div key={index} variants={staggerContainer}>
              <AnimatedCard>
                <Text as="h3" variant="h3" className="mb-2">
                  {card.title}
                </Text>
                <Text variant="body" className="mb-4">
                  {card.description}
                </Text>
                <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mb-4 space-y-1">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
                <AnimatedButtonLink href={card.cta.href}>{card.cta.text}</AnimatedButtonLink>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
