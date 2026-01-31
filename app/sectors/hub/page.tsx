'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Metadata } from "next";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { GraduationCap, Heart, Building2, ShoppingBag, Factory, Shield, Landmark } from "lucide-react";


const sectors = [
  {
    icon: GraduationCap,
    iconColor: "text-blue-600",
    title: "Education",
    description: "Universities, schools, and campuses face unique challenges around student safety, energy efficiency, and regulatory compliance.",
    benefits: ["Fire safety compliance", "Campus-wide occupancy tracking", "Energy optimization", "Emergency response"],
    link: "/sectors/education",
  },
  {
    icon: Heart,
    iconColor: "text-red-600",
    title: "Healthcare",
    description: "Hospitals and care facilities require continuous safety monitoring, infection control support, and operational efficiency.",
    benefits: ["Patient safety monitoring", "Infection control zones", "Staff tracking", "Compliance reporting"],
    link: "/sectors/healthcare",
  },
  {
    icon: Landmark,
    iconColor: "text-purple-600",
    title: "Government",
    description: "Public sector buildings demand rigorous compliance, security, and transparent reporting for taxpayer accountability.",
    benefits: ["Regulatory compliance", "Security protocols", "Energy transparency", "Audit-ready reporting"],
    link: "/sectors/government",
  },
  {
    icon: Building2,
    iconColor: "text-gray-600",
    title: "Commercial",
    description: "Office buildings and corporate campuses need to optimize space utilization, reduce costs, and enhance employee experience.",
    benefits: ["Space optimization", "Hybrid work support", "Cost reduction", "ESG reporting"],
    link: "/sectors/commercial",
  },
  {
    icon: ShoppingBag,
    iconColor: "text-green-600",
    title: "Retail",
    description: "Retail environments require real-time capacity management, customer flow analytics, and safety compliance.",
    benefits: ["Capacity management", "Customer analytics", "Safety compliance", "Loss prevention"],
    link: "/sectors/retail",
  },
  {
    icon: Factory,
    iconColor: "text-orange-600",
    title: "Industrial",
    description: "Manufacturing and industrial facilities need robust safety systems, operational efficiency, and worker protection.",
    benefits: ["Worker safety", "Hazard zone monitoring", "Operational efficiency", "Incident prevention"],
    link: "/sectors/industrial",
  },
  {
    icon: Shield,
    iconColor: "text-slate-700",
    title: "High Security",
    description: "Defence, critical infrastructure, and secure facilities require the highest levels of access control and threat detection.",
    benefits: ["Advanced access control", "Threat detection", "Perimeter security", "Classified zone management"],
    link: "/sectors/high-security",
  },
];

export default function SectorsHub() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sectors</H1>
          <p className="text-lg md:text-xl text-gray-600">
            Cortex™ delivers intelligent building solutions tailored to the unique challenges and compliance requirements of your sector.
          </p>
        </div>
      </Section>

      {/* Sectors Grid */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.title} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                  <Icon className={`h-12 w-12 ${sector.iconColor} mb-4`} />
                  <H3 className="text-2xl font-bold text-gray-900 mb-3">{sector.title}</H3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <ul className="space-y-2 mb-6">
                    {sector.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-primary mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={sector.link} variant="outline" className="w-full">
                    Explore {sector.title}
                  </ButtonLink>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Sector-Specific */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <H2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Sector-Specific Solutions Matter</H2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Compliance</H3>
                <p className="text-gray-600">Each sector has unique regulatory requirements that Cortex™ addresses directly.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Operational Context</H3>
                <p className="text-gray-600">Solutions designed around how your sector actually operates day-to-day.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <H3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</H3>
                <p className="text-gray-600">Case studies and outcomes specific to your industry.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Which Sector Fits Your Needs?</H2>
          <p className="text-gray-600 mb-6">
            Our team can help you identify the right solution for your specific building portfolio and requirements.
          </p>
          <ButtonLink href="/contact" variant="primary" size="lg">
            Talk to Our Team
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
