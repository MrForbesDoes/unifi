'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import PlaceholderImage from "@/src/components/PlaceholderImage";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

export default function BlogPost() {
  return (
    <>
      <Section className="bg-gray-50 pt-32">
        <div className="max-w-4xl mx-auto px-6">
          <ButtonLink href="/news" variant="outline" size="sm" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
          </ButtonLink>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 10, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Unifi.id Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Fire Safety</span>
            </div>
          </div>

          <H1 className="text-4xl md:text-5xl font-bold mb-8">Beyond the Certificate: Living Fire System Intelligence, 24/7</H1>
          <Lead className="mb-12">
            Most commercial buildings pass their annual fire safety inspection. But what happens in the 364 days between one certificate and the next?
          </Lead>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto px-6">
          <PlaceholderImage className="aspect-video rounded-2xl mb-12 shadow-lg" label="Continuous Fire Safety Monitoring" />
          
          <div className="prose prose-lg max-w-none">
            <Body className="mb-6">
              Fire safety compliance is often viewed as a series of periodic checks: the annual inspection, the monthly alarm test, the weekly fire door check. While these are essential, they only provide a snapshot of a building's safety at a specific moment in time.
            </Body>
            
            <H2 className="text-2xl font-bold mt-12 mb-6">The Gap in Compliance</H2>
            <Body className="mb-6">
              In the intervals between these checks, a building's fire safety status can change significantly. A fire door can be propped open, an alarm sensor can fail, or a new hazard can be introduced. Without continuous monitoring, these issues can go undetected until it's too late.
            </Body>

            <H2 className="text-2xl font-bold mt-12 mb-6">Living Fire System Intelligence</H2>
            <Body className="mb-6">
              Unifi.id's FireGuard™ platform introduces the concept of "living fire system intelligence." By providing 24/7 monitoring of your building's fire safety systems, we ensure that you have a continuous, real-time view of your compliance status.
            </Body>

            <blockquote className="border-l-4 border-unifi-blue pl-6 my-10 italic text-xl text-gray-700">
              "Compliance isn't a certificate on a wall; it's a continuous state of readiness. Living fire system intelligence ensures that your building is safe every day of the year, not just on inspection day."
            </blockquote>

            <H2 className="text-2xl font-bold mt-12 mb-6">The Benefits of 24/7 Monitoring</H2>
            <Body className="mb-6">
              With FireGuard™, building managers can:
            </Body>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Receive instant alerts when a fire safety system component fails or is tampered with.</li>
              <li>Identify and address compliance gaps in real-time.</li>
              <li>Provide a continuous, tamper-proof audit trail for regulators and insurers.</li>
              <li>Improve the overall safety and resilience of their property portfolio.</li>
            </ul>

            <H2 className="text-2xl font-bold mt-12 mb-6">Conclusion</H2>
            <Body className="mb-12">
              In the modern regulatory environment, "good enough" is no longer acceptable when it comes to fire safety. By embracing living fire system intelligence, building managers can move beyond the annual certificate and provide a higher standard of protection for their occupants and their business.
            </Body>
          </div>

          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="bg-unifi-dark rounded-2xl p-8 text-white text-center">
              <H3 className="text-2xl font-bold mb-4 text-white">Experience Living Fire System Intelligence</H3>
              <Body className="text-white/70 mb-8">
                Discover how FireGuard™ can provide the continuous monitoring your building needs.
              </Body>
              <ButtonLink href="/solutions/fireguard" variant="primary">Explore FireGuard</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
