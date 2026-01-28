'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/src/content/home';
import Section from './Section';
import AnimatedButtonLink from './AnimatedButtonLink';
import Text from './Text';
import ScrollReveal from './ScrollReveal';
import { staggerContainer } from '@/src/lib/animations';

export default function SectorsSection() {
  return (
    <Section backgroundColor="white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Text as="h2" variant="h2" className="mb-6">
            {homeContent.sectors.title}
          </Text>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Text variant="body" className="mb-10">
            {homeContent.sectors.intro}
          </Text>
        </ScrollReveal>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerContainer}>
            <ScrollReveal>
              <Text as="h3" variant="h3" className="mb-4">
                {homeContent.sectors.bySector.title}
              </Text>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ul className="space-y-3 mb-6">
                {homeContent.sectors.bySector.items.map((item, index) => (
                  <li key={index} className="text-base md:text-lg text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <AnimatedButtonLink href={homeContent.sectors.bySector.cta.href}>
                {homeContent.sectors.bySector.cta.text}
              </AnimatedButtonLink>
            </ScrollReveal>
          </motion.div>
          <motion.div variants={staggerContainer}>
            <ScrollReveal>
              <Text as="h3" variant="h3" className="mb-4">
                {homeContent.sectors.byRole.title}
              </Text>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ul className="space-y-3 mb-6">
                {homeContent.sectors.byRole.items.map((item, index) => (
                  <li key={index} className="text-base md:text-lg text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <AnimatedButtonLink href={homeContent.sectors.byRole.cta.href}>
                {homeContent.sectors.byRole.cta.text}
              </AnimatedButtonLink>
            </ScrollReveal>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
