'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { ButtonLink } from '@/src/components/ButtonLink';
import { Section } from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';
import { Shield, Eye, Users, Bell } from "lucide-react";

export default function RoleSecurityHead() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center bg-unifi-dark text-white">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                <Shield className="w-4 h-4 text-unifi-blue" />
                <span className="text-xs font-bold uppercase tracking-widest">Security Leadership</span>
              </div>
              <H1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Security Head
              </H1>
              <Lead className="text-white/80 mb-10 max-w-2xl">
                Access control, threat detection, and perimeter security. Cortex™ provides the real-time presence intelligence needed to transform physical security into a proactive, data-led operation.
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink href="/platform/overview" variant="primary">Platform Overview</ButtonLink>
                <ButtonLink href="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Book a Demo
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-unifi-blue/20 blur-3xl rounded-full"></div>
                <PlaceholderImage className="relative aspect-square rounded-2xl shadow-2xl border border-white/10" label="Security Command & Control Dashboard" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Security Priorities */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <H2 className="text-3xl md:text-4xl font-bold mb-4">Security Priorities</H2>
            <Body>
              Cortex™ addresses the critical need for total building awareness and rapid incident response across complex property portfolios.
            </Body>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Eye className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Presence Intelligence</H3>
              <Body className="text-gray-600">
                Know exactly who is on-site, where they are, and how they are moving in real-time. Move beyond simple door logs to total building awareness.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Bell className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Anomaly Detection</H3>
              <Body className="text-gray-600">
                Identify security threats before they escalate. Cortex™ uses real-time movement data to detect unusual patterns and trigger instant alerts.
              </Body>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Users className="w-12 h-12 text-unifi-blue mb-6" />
              <H3 className="text-xl font-bold mb-4">Incident Response</H3>
              <Body className="text-gray-600">
                Coordinate faster, more effective responses to security incidents. Provide your teams with the live data they need to act with confidence.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Security Metrics Section */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <H2 className="text-3xl font-bold mb-6 text-white">Security Metrics That Matter</H2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">01</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-white">Real-Time Occupancy Awareness</H3>
                    <Body className="text-white/60">A live, zone-by-zone view of building occupancy to ensure security protocols are being followed.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">02</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-white">Security Anomaly Alert Rate</H3>
                    <Body className="text-white/60">Track the effectiveness of your proactive threat detection and the speed of your team's response.</Body>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-unifi-blue/20 flex items-center justify-center text-unifi-blue font-bold">03</div>
                  <div>
                    <H3 className="text-lg font-bold mb-2 text-white">Perimeter Integrity Score</H3>
                    <Body className="text-white/60">A unified metric of the health and status of all access control and perimeter security systems.</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <H3 className="text-2xl font-bold mb-6 text-white">Cortex™ Security Deliverables</H3>
              <ul className="space-y-4">
                {[
                  "Real-time presence intelligence dashboard",
                  "Proactive anomaly detection and alerts",
                  "Integrated incident response coordination",
                  "Estate-wide security risk analytics",
                  "Unified access control and monitoring"
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
                <ButtonLink href="/contact" className="w-full text-center">Request Security Audit</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H2 className="text-3xl font-bold mb-6">Ready to transform your security?</H2>
          <Body className="mb-10 text-lg">
            Discover how Cortex™ can help you gain total building awareness, detect threats proactively, and protect your people with real-time intelligence.
          </Body>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" size="lg">Book a Demo</ButtonLink>
            <ButtonLink href="/platform/overview" variant="secondary" size="lg">Explore the Platform</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
