'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';
import { ShieldCheck, FileText, BarChart, Lock } from "lucide-react";
import { SEO } from '@/src/components/SEO';

export default function InsureLink() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="InsureLink | Verifiable Building Risk & Assurance Evidence"
        description="InsureLink bridges the gap between building performance and insurance risk. Provide verifiable evidence to reduce premiums and improve coverage."
      />
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center bg-unifi-dark text-white">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                <ShieldCheck className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">Risk & Assurance</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                InsureLink
              </H1>
              <Lead className="text-white/80 mb-10 max-w-2xl">
                Bridging the gap between building performance and insurance risk. InsureLink provides the verifiable evidence needed to reduce premiums and improve coverage.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/contact" variant="primary">Discuss InsureLink</ButtonLink>
                <ButtonLink href="/solutions/hub" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Back to Solutions
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-unifi-blue/20 blur-3xl rounded-full"></div>
                <PlaceholderImage className="relative aspect-square rounded-2xl shadow-2xl border border-white/10" label="InsureLink Risk Dashboard" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Capabilities */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Evidence-Led Assurance</H2>
            <Body>
              InsureLink transforms raw building data into a structured evidence layer that speaks the language of risk and insurance.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <FileText className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Verifiable Compliance</H3>
              <Body className="text-gray-600">
                Provide insurers with a continuous, tamper-proof audit trail of fire safety tests, maintenance schedules, and regulatory adherence.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <BarChart className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Risk Analytics</H3>
              <Body className="text-gray-600">
                Identify and quantify operational risks across your estate. Use real-time data to demonstrate proactive risk mitigation to your brokers.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Lock className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Asset Protection</H3>
              <Body className="text-gray-600">
                Improve the resilience of your physical assets. InsureLink ensures that critical safety systems are always operational and effective.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-white">Why InsureLink Matters</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-white">Premium Optimization</H3>
                    <Body className="text-white/60">Use defensible data to negotiate better insurance terms based on actual building performance and safety standards.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-white">Claims Acceleration</H3>
                    <Body className="text-white/60">In the event of an incident, provide immediate, verifiable data to accelerate the claims process and reduce business interruption.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-white">Demonstrable Duty of Care</H3>
                    <Body className="text-white/60">Prove to stakeholders and regulators that you are meeting your legal and ethical obligations with real-time evidence.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <H3 className="text-2xl font-bold mb-6 text-white">InsureLink Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Continuous compliance audit trails",
                  "Estate-wide risk profile reports",
                  "Safety system health monitoring",
                  "Insurance-ready data exports",
                  "Proactive risk mitigation alerts"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-unifi-blue flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ButtonLink href="/contact" className="w-full text-center">Request Risk Assessment</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H2 className="text-3xl font-bold mb-6">Ready to link data to assurance?</H2>
          <Body className="mb-10 text-lg">
            Discover how InsureLink can help you gain better coverage, reduce premiums, and prove your commitment to safety and risk management.
          </Body>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" size="lg">Contact Sales</ButtonLink>
            <ButtonLink href="/solutions/hub" variant="secondary" size="lg">Explore All Solutions</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
