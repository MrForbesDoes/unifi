'use client';

import { homeContent } from '@/src/content/home';
import Section from './Section';
import Text from './Text';
import PlaceholderImage from './PlaceholderImage';
import { m, useEnterVariants } from './motion';

export default function HeroSection() {
  const headline = useEnterVariants('left');
  const lines = useEnterVariants('right');

  return (
    <Section className="min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            {/* Headline */}
            <m.div {...headline} transition={{ delay: 0.05 }}>
              <Text as="h1" variant="h1" className="mb-6">
                {homeContent.hero.headline}
              </Text>
            </m.div>

            {/* Supporting lines */}
            <m.div {...lines} transition={{ delay: 0.14 }} className="space-y-4">
              {homeContent.hero.supportingLines.map((line, index) => (
                <Text key={index} variant="lead">
                  {line}
                </Text>
              ))}
            </m.div>
          </div>

          <div className="lg:col-span-6">
            <m.div {...lines} transition={{ delay: 0.22 }}>
              <PlaceholderImage priority className="aspect-[4/3] lg:aspect-[3/2] shadow-sm" />
            </m.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
