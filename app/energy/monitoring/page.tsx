'use client';
import { H1, H2, Body } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import { SEO } from '@/src/components/SEO';
import { BarChart3 } from 'lucide-react';

export default function EnergyMonitoring() {
  return (
    <>
      <SEO
        title="Energy Monitoring"
        description="Understand your energy consumption to identify savings opportunities and track the performance of your upgrades."
      />
      <Section className="min-h-[40vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-unifi-blue/10 flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-unifi-blue" />
            </div>
          </div>
          <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Energy Monitoring
          </H1>
          <Body className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Understand your energy consumption to identify savings opportunities and track the performance of your upgrades.
          </Body>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Content Coming Soon</H2>
          <Body className="mb-8 text-gray-600">
            We are currently developing this section to provide detailed information about our energy monitoring solutions. Check back soon for updates.
          </Body>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/energy/contact">Contact Energy Team</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">Back to Energy Hub</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
