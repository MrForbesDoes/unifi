import { Metadata } from "next";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Book a Demo | Unifi.id",
  description:
    "Discover how Cortex™ can deliver smarter buildings, safer people, and greener futures for your organisation. Book a personalised demonstration or get in touch with our team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us / Book Demo
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Discover how Cortex™ can deliver smarter buildings, safer people, and greener futures for your organisation. Book a personalised demonstration or get in touch with our team.
          </p>
        </div>
      </Section>

      {/* Two-Column Card Grid */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Book Your Demo */}
          <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Book Your Demo
            </h2>
            <p className="text-gray-600 mb-6">
              See Cortex™ in action with a tailored demonstration that shows how our platform can address your specific building management challenges and opportunities.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Personalised platform walkthrough",
                "ROI analysis for your buildings",
                "Integration planning discussion",
                "Next steps guidance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/book-demo" variant="primary" className="w-full">
              Book Demo
            </ButtonLink>
          </div>

          {/* Card 2: Get in Touch */}
          <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions about how Cortex™ can work for your organisation? Our team is here to help with expert guidance tailored to your specific needs.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Technical consultations",
                "Implementation planning",
                "Partnership opportunities",
                "Custom solution development",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="mailto:hello@unifi.id" variant="secondary" className="w-full">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Why Choose Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Cortex™?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                People-First Design
              </h3>
              <p className="text-gray-600">
                Every feature prioritises occupant wellbeing and experience
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Measurable improvements in efficiency, safety, and sustainability
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Works with your existing systems without disruption
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
