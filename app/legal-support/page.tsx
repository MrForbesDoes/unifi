"use client";

import { useState } from "react";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { FileText, Shield, HelpCircle, Mail } from "lucide-react";

const legalSections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: Shield,
    content: `Unifi.id is committed to protecting your privacy and handling your data with transparency and care.

**Data Collection:**
We collect only the data necessary to deliver our services, including building occupancy data, system integration data, and user account information.

**Data Usage:**
Your data is used exclusively to provide intelligent building management services, generate analytics, and improve our platform.

**Data Security:**
We employ industry-standard encryption, secure data centers, and regular security audits to protect your information.

**Your Rights:**
You have the right to access, modify, or delete your data at any time. Contact our support team for assistance.

**Compliance:**
We comply with GDPR, CCPA, and other relevant data protection regulations.`,
  },
  {
    id: "terms",
    title: "Terms of Service",
    icon: FileText,
    content: `These Terms of Service govern your use of the Cortex™ platform and related services provided by Unifi.id.

**Service Agreement:**
By using our platform, you agree to use it in compliance with all applicable laws and regulations.

**User Responsibilities:**
You are responsible for maintaining the security of your account credentials and for all activities under your account.

**Service Availability:**
We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service due to maintenance or unforeseen circumstances.

**Intellectual Property:**
All platform content, features, and functionality are owned by Unifi.id and protected by copyright and trademark laws.

**Limitation of Liability:**
Unifi.id shall not be liable for indirect, incidental, or consequential damages arising from platform use.

**Termination:**
We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    icon: HelpCircle,
    content: `Unifi.id uses cookies to enhance your experience and improve our services.

**What Are Cookies:**
Cookies are small text files stored on your device that help us remember your preferences and analyze site usage.

**Types of Cookies We Use:**
- Essential cookies: Required for platform functionality
- Analytics cookies: Help us understand how you use our platform
- Preference cookies: Remember your settings and preferences

**Managing Cookies:**
You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect platform functionality.

**Third-Party Cookies:**
We may use third-party analytics services that set their own cookies. Please review their privacy policies for more information.`,
  },
  {
    id: "support",
    title: "Support & Help Center",
    icon: Mail,
    content: `Need assistance? Our support team is here to help you get the most out of Cortex™.

**Support Channels:**
- Email: support@unifi.id
- Phone: Available during business hours
- Live Chat: Available within the platform
- Knowledge Base: Comprehensive guides and documentation

**Response Times:**
- Critical issues: Within 2 hours
- Standard inquiries: Within 24 hours
- General questions: Within 48 hours

**Support Hours:**
Monday - Friday: 9:00 AM - 6:00 PM GMT
Emergency support available 24/7 for critical system issues

**Resources:**
- Platform documentation
- Video tutorials
- Integration guides
- Best practices library`,
  },
];

export default function LegalSupportPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Legal & Support</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Transparency, compliance, and support you can rely on.
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {legalSections.map((section) => {
              const Icon = section.icon;
              const isExpanded = activeSection === section.id;

              return (
                <div key={section.id} className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => setActiveSection(isExpanded ? null : section.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center gap-4"
                  >
                    <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <h2 className="text-xl font-bold text-gray-900 flex-1">{section.title}</h2>
                    <div className="text-gray-400 text-2xl">
                      {isExpanded ? "−" : "+"}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                      <div className="prose prose-gray max-w-none">
                        {section.content.split('\n\n').map((paragraph, index) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                                {paragraph.replace(/\*\*/g, '')}
                              </h3>
                            );
                          }
                          return (
                            <p key={index} className="text-gray-700 mb-4">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch for any legal, privacy, or support inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/contact" variant="primary">
              Contact Support
            </ButtonLink>
            <ButtonLink href="mailto:legal@unifi.id" variant="outline">
              Legal Inquiries
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
