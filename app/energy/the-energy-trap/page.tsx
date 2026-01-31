'use client';
import { H1, H2, Body } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import { SEO } from '@/src/components/SEO';
import { FileText } from 'lucide-react';

export default function TheEnergyTrap() {
  return (
    <>
      <SEO
        title="The Energy Trap | Why Energy Prices Remain High"
        description="A research paper on why energy prices are set to remain high and what organisations can do to mitigate the impact."
      />
      <Section className="min-h-[40vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
              <FileText className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            The Energy Trap
          </H1>
          <Body className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A research paper on why energy prices are set to remain high and what organisations can do to mitigate the impact.
          </Body>
        </div>
      </Section>

      <Section backgroundColor="gray">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Research Paper Coming Soon</H2>
          <Body className="mb-8 text-gray-600">
            Our analysis of the long-term energy market trends is being finalized. Please check back soon to download the full research paper.
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
