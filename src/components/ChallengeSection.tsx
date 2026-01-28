'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/src/content/home';
import Section from './Section';
import AnimatedCard from './AnimatedCard';
import Text from './Text';
import ScrollReveal from './ScrollReveal';
import { staggerContainer } from '@/src/lib/animations';

export default function ChallengeSection() {
  return (
    <Section backgroundColor="white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Text as="h2" variant="h2" className="mb-6">
            {homeContent.challenge.title}
          </Text>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Text variant="body" className="mb-8">
            {homeContent.challenge.intro}
          </Text>
        </ScrollReveal>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {homeContent.challenge.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={staggerContainer}
            >
              <AnimatedCard>
                <Text as="h3" variant="h3" className="mb-2">
                  {card.title}
                </Text>
                <Text variant="body">{card.description}</Text>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
        <ScrollReveal delay={0.2}>
          <Text variant="body">{homeContent.challenge.closing}</Text>
        </ScrollReveal>
      </div>
    </Section>
  );
}
