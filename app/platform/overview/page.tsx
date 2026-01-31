'use client';

import { useState } from 'react';
import { Section } from '@/src/components/Section';
import Text from '@/src/components/Text';
import { ButtonLink } from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import { SEO } from '@/src/components/SEO';

export default function PlatformOverviewPage() {
  const [activeTab, setActiveTab] = useState('modular');

  return (
    <main className="min-h-screen">
      <SEO 
        title="Cortex™ Platform Overview | Unifi.id Real-Time Intelligence"
        description="Discover Cortex™, the intelligence layer behind Unifi.id's mission to transform buildings into adaptive, responsive environments. Gain total operational awareness."
      />
      {/* Hero Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-6 text-center py-16">
          <Text as="h1" variant="h1" className="mb-4">
            Introducing Cortex™
          </Text>
          <Text variant="lead" className="text-blue-600 font-semibold mb-8">
            The Real-Time Intelligence Engine for Smart Buildings
          </Text>
          <Text variant="body" className="text-lg mb-6">
            Smart organisations don't just manage buildings—they optimise them around the people who bring them to life.
          </Text>
          <Text variant="body" className="mb-6">
            Cortex™ is the intelligence layer behind Unifi.id's mission to transform buildings from static spaces into adaptive, responsive environments. It connects the dots between systems and sensors—occupancy, lighting, energy, fire safety, compliance, and more—turning raw data into meaningful, real-time insight.
          </Text>
          <div className="mt-8">
            <Text variant="body" className="font-semibold mb-4">
              With Cortex™, leadership teams gain total operational awareness:
            </Text>
            <div className="text-left max-w-2xl mx-auto space-y-2">
              <Text variant="body">• Who is in the building and where</Text>
              <Text variant="body">• Whether safety protocols are being followed</Text>
              <Text variant="body">• Which spaces are under- or over-utilised</Text>
              <Text variant="body">• Where energy is being wasted or saved</Text>
              <Text variant="body">• What actions are needed to meet compliance and ESG targets</Text>
            </div>
          </div>
        </div>
      </Section>

      {/* Cortex Capabilities */}
      <Section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Text as="h2" variant="h2" className="text-center mb-12">
            Cortex™ Capabilities
          </Text>
          
          <div className="grid md:grid-cols-5 gap-6">
            <Card className="border-t-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
              <Text as="h3" variant="h3" className="text-center mb-3 text-sm">
                Live Occupancy Intelligence
              </Text>
              <Text variant="body" className="text-sm text-center">
                Track people-flow in real time across floors and zones. Make smarter decisions about staffing, cleaning, heating/cooling, and safety drills.
              </Text>
            </Card>

            <Card className="border-t-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-orange-600 text-xl">🛡️</span>
              </div>
              <Text as="h3" variant="h3" className="text-center mb-3 text-sm">
                Risk & Security
              </Text>
              <Text variant="body" className="text-sm text-center">
                Know when restricted areas are breached or usage patterns are irregular. Flag anomalies before they become threats.
              </Text>
            </Card>

            <Card className="border-t-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-600 text-xl">🔥</span>
              </div>
              <Text as="h3" variant="h3" className="text-center mb-3 text-sm">
                Fire Safety Compliance
              </Text>
              <Text variant="body" className="text-sm text-center">
                See instant alerts for blocked exits, overcrowding, or floor breaches. Support live headcounts and real-time evacuation insight.
              </Text>
            </Card>

            <Card className="border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 text-xl">⚡</span>
              </div>
              <Text as="h3" variant="h3" className="text-center mb-3 text-sm">
                Energy Performance
              </Text>
              <Text variant="body" className="text-sm text-center">
                Reduce waste by syncing lighting, HVAC and more to actual use. Cortex™ identifies inefficiencies and recommends corrective actions.
              </Text>
            </Card>

            <Card className="border-t-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
              <Text as="h3" variant="h3" className="text-center mb-3 text-sm">
                Operational Insights
              </Text>
              <Text variant="body" className="text-sm text-center">
                Benchmark usage, spot trends, and feed predictive models. All insights available in clear, executive-ready dashboards or automated reports.
              </Text>
            </Card>
          </div>
        </div>
      </Section>

      {/* Tabbed Content */}
      <Section>
        <div className="max-w-6xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
            {[
              { id: 'modular', label: 'Modular Solutions' },
              { id: 'architecture', label: 'Platform Architecture' },
              { id: 'licensing', label: 'Licensing' },
              { id: 'integration', label: 'Integration' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content - Modular Solutions */}
          {activeTab === 'modular' && (
            <div className="space-y-12">
              <div>
                <Text as="h2" variant="h2" className="mb-4">
                  How Modular Solutions Work
                </Text>
                <Text variant="body" className="text-lg">
                  Build your intelligent building ecosystem step by step. Start with core platform capabilities, add detection technologies as needed, and deploy specialized intelligence modules for specific outcomes.
                </Text>
              </div>

              {/* Foundation Platform */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📚</span>
                  </div>
                  <Text as="h3" variant="h3">Foundation Platform</Text>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  The essential building blocks that power every intelligent building solution
                </Text>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Cortex™', desc: 'Central intelligence platform that processes all building data' },
                    { title: 'Pulse', desc: 'Aggregator of detection technologies data into clear, zone-by-zone occupancy audits' },
                    { title: 'LiveView', desc: 'Live building visualization and control interface' }
                  ].map((item) => (
                    <Card key={item.title}>
                      <Text as="h3" variant="h3" className="mb-2">{item.title}</Text>
                      <Text variant="body">{item.desc}</Text>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Detection Technologies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">🌐</span>
                  </div>
                  <Text as="h3" variant="h3">Detection Technologies</Text>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  Advanced sensor technologies that capture critical building and occupant data
                </Text>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: 'Sense', desc: 'Multi-sensor environmental monitoring' },
                    { title: 'Flow', desc: 'People counting and movement tracking' },
                    { title: 'Cognito', desc: 'AI-powered computer vision analytics' },
                    { title: 'Echo', desc: 'Acoustic monitoring and sound analysis' }
                  ].map((item) => (
                    <Card key={item.title}>
                      <Text as="h3" variant="h3" className="mb-2">{item.title}</Text>
                      <Text variant="body">{item.desc}</Text>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Intelligence Modules */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-xl">🧠</span>
                  </div>
                  <Text as="h3" variant="h3">Intelligence Modules</Text>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  Specialized AI modules that transform sensor data into actionable insights
                </Text>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: 'SafeGuard', desc: 'Comprehensive security monitoring' },
                    { title: 'FireSafe', desc: 'Advanced fire prevention and detection' },
                    { title: 'Predict', desc: 'Occupancy forecasting and planning' },
                    { title: 'Insights', desc: 'Executive reporting and analytics' }
                  ].map((item) => (
                    <Card key={item.title}>
                      <Text as="h3" variant="h3" className="mb-2">{item.title}</Text>
                      <Text variant="body">{item.desc}</Text>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would go here with similar structure */}
          {activeTab !== 'modular' && (
            <div className="py-20 text-center text-gray-500">
              Content for {activeTab} is being updated with the latest audit data.
            </div>
          )}
        </div>
      </Section>

      {/* Final CTA */}
      <Section backgroundColor="gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Text as="h2" variant="h2" className="mb-6">Ready to see Cortex™ in action?</Text>
          <Text variant="body" className="mb-8 text-lg">
            Book a personalized demo to discover how our real-time intelligence platform can transform your estate management.
          </Text>
          <ButtonLink href="/contact">Book Your Demo</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
