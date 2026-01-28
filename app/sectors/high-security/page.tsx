import type { Metadata } from "next";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ShieldCheck, Lock, Shield, Database, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "High Security Sector | Unifi.id",
  description: "Total control for high-security environments.",
};

export default function HighSecuritySector() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Total Control for High-Security Environments
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Defence facilities, data centres, and critical national infrastructure cannot tolerate uncertainty. Security failures, unauthorised access, or delayed emergency response can have national security implications. Cortex™ delivers military-grade building intelligence.
          </p>
        </div>
      </Section>

      {/* Key Challenges */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Challenges in High-Security Estates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Lock className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Access Control & Threat Detection</h3>
              <p className="text-gray-600">
                High-security sites must know who is on-site, where they are, and what they're doing — in real time. Manual logs, badge swipes, and periodic audits are insufficient.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Response & Accountability</h3>
              <p className="text-gray-600">
                In critical environments, emergency evacuation must be instantaneous and verifiable. Uncertainty about occupant location or status is unacceptable.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Database className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Security & Compliance</h3>
              <p className="text-gray-600">
                Classified facilities require end-to-end encryption, air-gapped architectures, and complete audit trails. Commercial building management systems cannot meet these standards.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <Gauge className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operational Continuity</h3>
              <p className="text-gray-600">
                High-security sites cannot afford downtime. Predictive maintenance and resilient systems are essential to mission-critical operations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How Cortex Helps */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cortex™ + High-Security Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Access & Presence Control</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Real-time occupancy monitoring with zone-level precision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Automated alerts for unauthorised presence or anomalous behaviour</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Integration with existing access control and perimeter security systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Response & Accountability</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Instant muster lists for all personnel across all zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Real-time evacuation verification with location tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">FireGuard provides continuous fire system monitoring with military-grade reliability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security & Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">End-to-end encryption with air-gapped deployment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Complete audit trails for security clearance and compliance verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Classified-grade data handling meeting defence and intelligence standards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Resilience</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Predictive maintenance prevents critical system failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Redundant architectures ensure continuous operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">Real-time system health monitoring with instant failover capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wide mb-4 text-blue-400">Result</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            High-security environments gain absolute control with military-grade intelligence that ensures safety, security, and operational continuity.
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Discover how Cortex™ delivers the certainty that critical infrastructure demands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/contact" variant="secondary">
              Book Secure Briefing
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Request Clearance
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
