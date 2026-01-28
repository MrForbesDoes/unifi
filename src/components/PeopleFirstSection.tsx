'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/src/content/home';
import Section from './Section';
import AnimatedButtonLink from './AnimatedButtonLink';
import AnimatedCard from './AnimatedCard';
import Text from './Text';
import ScrollReveal from './ScrollReveal';
import { staggerContainer } from '@/src/lib/animations';

export default function PeopleFirstSection() {
  return (
    <Section backgroundColor="white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Text as="h2" variant="h2" className="mb-6">
            {homeContent.peopleFirst.title}
          </Text>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 border-l-4 border-gray-300 pl-4">
            {homeContent.peopleFirst.quote}
          </blockquote>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Text variant="body" className="mb-10">
            {homeContent.peopleFirst.body}
          </Text>
        </ScrollReveal>
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {homeContent.peopleFirst.results.map((result, index) => (
            <motion.div key={index} variants={staggerContainer}>
              <AnimatedCard>
                <Text as="h3" variant="h3" className="mb-2">
                  {result.title}
                </Text>
                <Text variant="body">{result.description}</Text>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
        <ScrollReveal delay={0.2}>
          <AnimatedButtonLink href={homeContent.peopleFirst.cta.href}>
            {homeContent.peopleFirst.cta.text}
          </AnimatedButtonLink>
        </ScrollReveal>
      </div>
    </Section>
  );
}
