'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';

export default function EnergyContact() {
  return (
    <>
      <Section className="min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Energy Contact
          </H1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              A dedicated contact route for energy and decarbonisation conversations.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              For now, this routes to the main contact page.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/contact">Go to contact</ButtonLink>
            <ButtonLink href="/energy/hub" variant="secondary">
              Back to hub
            </ButtonLink>
          </div>
        

          <div className="mt-10">
            <PlaceholderImage className="aspect-[4/3] lg:aspect-[3/2] shadow-sm" />
          </div>
</div>
      </Section>
    </>
  );
}
