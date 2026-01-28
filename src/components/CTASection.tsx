'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/src/content/home';
import Section from './Section';
import AnimatedButtonLink from './AnimatedButtonLink';
import Text from './Text';
import ScrollReveal from './ScrollReveal';
import { staggerContainer } from '@/src/lib/animations';

export default function CTASection() {
  return (
    <Section backgroundColor="gray">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Text as="h2" variant="h2" className="mb-6">
            {homeContent.cta.title}
          </Text>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Text variant="body" className="mb-10">
            {homeContent.cta.description}
          </Text>
        </ScrollReveal>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {homeContent.cta.buttons.map((button, index) => (
            <motion.div key={index} variants={staggerContainer}>
              <AnimatedButtonLink href={button.href}>
                {button.text}
              </AnimatedButtonLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
