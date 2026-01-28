'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/src/content/home';
import Section from './Section';
import AnimatedButtonLink from './AnimatedButtonLink';
import AnimatedCard from './AnimatedCard';
import Text from './Text';
import ScrollReveal from './ScrollReveal';
import { staggerContainer } from '@/src/lib/animations';

export default function CortexSection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Text as="h2" variant="h2" className="mb-6">
            {homeContent.cortex.title}
          </Text>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Text variant="body" className="mb-4">
            {homeContent.cortex.description}
          </Text>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Text variant="body" className="mb-10">
            {homeContent.cortex.intro}
          </Text>
        </ScrollReveal>
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {homeContent.cortex.pillars.map((pillar, index) => (
            <motion.div key={index} variants={staggerContainer}>
              <AnimatedCard>
                <Text as="h3" variant="h3" className="mb-2">
                  {pillar.title}
                </Text>
                <Text variant="body">{pillar.description}</Text>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
        <ScrollReveal delay={0.2}>
          <Text variant="body" className="mb-6">
            {homeContent.cortex.note}
          </Text>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <AnimatedButtonLink href={homeContent.cortex.cta.href}>
            {homeContent.cortex.cta.text}
          </AnimatedButtonLink>
        </ScrollReveal>
      </div>
    </Section>
  );
}
