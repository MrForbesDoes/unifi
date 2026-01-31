'use client';


import { useState } from 'react';
import { Section } from '@/src/components/Section';
import Text from '@/src/components/Text';
import { ButtonLink } from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

export default function PlatformOverviewPage() {
  const [activeTab, setActiveTab] = useState('modular');

  return (
    <main className="min-h-screen">
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
                    { title: 'Predict', desc: 'Predictive maintenance and optimization' },
                    { title: 'Insights', desc: 'Advanced analytics and reporting' }
                  ].map((item) => (
                    <Card key={item.title}>
                      <Text as="h3" variant="h3" className="mb-2">{item.title}</Text>
                      <Text variant="body">{item.desc}</Text>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Complete Specialized Platforms */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 text-xl">🛡️</span>
                  </div>
                  <Text as="h3" variant="h3">Complete Specialised Platforms</Text>
                </div>
                <Text variant="body" className="mb-6 text-gray-600">
                  Pre-integrated solutions combining multiple modules for specific industry needs
                </Text>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <Text as="h3" variant="h3" className="mb-3">FireGuard</Text>
                    <Text variant="body" className="mb-4">
                      Complete fire safety ecosystem combining detection, prevention, and emergency response capabilities
                    </Text>
                    <ButtonLink href="/solutions/fireguard" variant="secondary">Learn More</ButtonLink>
                  </Card>
                  <Card>
                    <Text as="h3" variant="h3" className="mb-3">InsureLink</Text>
                    <Text variant="body" className="mb-4">
                      Insurance-integrated platform that reduces premiums through demonstrated risk management
                    </Text>
                    <ButtonLink href="/solutions/insurelink" variant="secondary">Learn More</ButtonLink>
                  </Card>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-slate-50 p-12 rounded-lg text-center">
                <Text as="h2" variant="h2" className="mb-4">Ready to Build Your Solution?</Text>
                <Text variant="body" className="mb-6 text-lg">
                  Explore our complete portfolio of solutions and discover how to create the perfect intelligent building ecosystem for your needs.
                </Text>
                <ButtonLink href="/solutions/hub">View Solutions Hub</ButtonLink>
              </div>
            </div>
          )}

          {/* Tab Content - Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-12">
              <div>
                <Text as="h2" variant="h2" className="mb-4">Enterprise-Grade Technical Foundation</Text>
                <Text variant="body" className="text-lg">
                  Built on a cloud-native, AI-powered architecture that delivers enterprise-grade performance, security, and scalability for any building portfolio.
                </Text>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <Text as="h3" variant="h3" className="mb-4 text-blue-600">Cloud-Native Infrastructure</Text>
                  <div className="space-y-2">
                    <Text variant="body">• Auto-scaling microservices architecture</Text>
                    <Text variant="body">• 99.9% uptime with global redundancy</Text>
                    <Text variant="body">• Edge computing for real-time processing</Text>
                    <Text variant="body">• Unlimited scalability for any portfolio size</Text>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <Text as="h3" variant="h3" className="mb-4 text-green-600">AI & Data Processing</Text>
                  <div className="space-y-2">
                    <Text variant="body">• Real-time machine learning inference</Text>
                    <Text variant="body">• Stream processing for millions of events/second</Text>
                    <Text variant="body">• Advanced analytics and predictive modeling</Text>
                    <Text variant="body">• Continuous learning and model optimization</Text>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <Text as="h3" variant="h3" className="mb-4 text-purple-600">Security & Compliance</Text>
                  <div className="space-y-2">
                    <Text variant="body">• Zero-trust architecture with end-to-end encryption</Text>
                    <Text variant="body">• SOC 2 Type II and ISO 27001 certified</Text>
                    <Text variant="body">• GDPR compliant with data residency options</Text>
                    <Text variant="body">• Advanced threat detection and monitoring</Text>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg">
                <Text as="h3" variant="h3" className="mb-6 text-center">Platform Architecture Overview</Text>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { icon: '📥', title: 'Data Layer', desc: 'Real-time data ingestion and processing' },
                    { icon: '🧠', title: 'AI Engine', desc: 'Machine learning and analytics' },
                    { icon: '🔌', title: 'API Gateway', desc: 'Integration and orchestration' },
                    { icon: '💻', title: 'Application Layer', desc: 'User interfaces and experiences' }
                  ].map((item) => (
                    <div key={item.title} className="text-center p-6 bg-white rounded-lg">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <Text as="h3" variant="h3" className="text-sm mb-2">{item.title}</Text>
                      <Text variant="body" className="text-sm">{item.desc}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - Licensing */}
          {activeTab === 'licensing' && (
            <div className="space-y-12">
              <div>
                <Text as="h2" variant="h2" className="mb-4">Flexible Licensing for Every Need</Text>
                <Text variant="body" className="text-lg">
                  Choose the licensing model that best fits your organization, from single buildings to enterprise-wide deployments.
                </Text>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-blue-600 text-xl">🏢</span>
                  </div>
                  <Text as="h3" variant="h3" className="mb-3">Per-Building</Text>
                  <Text variant="body" className="mb-4 text-gray-600">Perfect for single sites or gradual rollouts</Text>
                  <div className="space-y-2 mb-6">
                    <Text variant="body">• Monthly or annual per-building pricing</Text>
                    <Text variant="body">• No minimum commitment required</Text>
                    <Text variant="body">• Scale up or down as needed</Text>
                    <Text variant="body">• Full feature access included</Text>
                  </div>
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Starting from £500/month
                  </div>
                </Card>

                <Card className="border-2 border-green-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-green-600 text-xl">🌐</span>
                  </div>
                  <Text as="h3" variant="h3" className="mb-3">Enterprise</Text>
                  <Text variant="body" className="mb-4 text-gray-600">Comprehensive agreements for large portfolios</Text>
                  <div className="space-y-2 mb-6">
                    <Text variant="body">• Volume discounts for multiple buildings</Text>
                    <Text variant="body">• Dedicated account management</Text>
                    <Text variant="body">• Priority support and SLA guarantees</Text>
                    <Text variant="body">• Custom integrations included</Text>
                  </div>
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Contact for pricing
                  </div>
                </Card>

                <Card className="border-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-purple-600 text-xl">🎯</span>
                  </div>
                  <Text as="h3" variant="h3" className="mb-3">Outcome-Based</Text>
                  <Text variant="body" className="mb-4 text-gray-600">Pay based on achieved savings and benefits</Text>
                  <div className="space-y-2 mb-6">
                    <Text variant="body">• Share of energy savings achieved</Text>
                    <Text variant="body">• Performance guarantees included</Text>
                    <Text variant="body">• Aligned incentives for optimization</Text>
                    <Text variant="body">• Risk mitigation for customers</Text>
                  </div>
                  <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    15-25% of savings
                  </div>
                </Card>
              </div>

              <div className="text-center">
                <ButtonLink href="/contact">Discuss Licensing Options</ButtonLink>
              </div>
            </div>
          )}

          {/* Tab Content - Integration */}
          {activeTab === 'integration' && (
            <div className="space-y-12">
              <div>
                <Text as="h2" variant="h2" className="mb-4">Universal Integration Capabilities</Text>
                <Text variant="body" className="text-lg">
                  Connect with any building system, sensor, or software through our comprehensive integration framework.
                </Text>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <Text as="h3" variant="h3" className="mb-6">Integration Benefits</Text>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <Text as="h3" variant="h3" className="mb-2 text-blue-600">Modular Deployment</Text>
                      <Text variant="body">Deploy individual modules without affecting existing systems. Each module integrates independently.</Text>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <Text as="h3" variant="h3" className="mb-2 text-green-600">Unified Platform</Text>
                      <Text variant="body">Single dashboard for all building systems. No more switching between multiple interfaces.</Text>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-6">
                      <Text as="h3" variant="h3" className="mb-2 text-purple-600">Future-Ready</Text>
                      <Text variant="body">Add new modules and capabilities as they become available without system overhauls.</Text>
                    </div>
                  </div>
                </div>

                <div>
                  <Text as="h3" variant="h3" className="mb-6">Supported Systems</Text>
                  <div className="grid grid-cols-2 gap-3">
                    {['BACnet', 'Modbus', 'MQTT', 'REST APIs', 'OPC-UA', 'SNMP', 'Wi-Fi', 'Ethernet', 'Cellular', 'Fire Systems', 'HVAC', 'Lighting', 'Access Control'].map((system) => (
                      <div key={system} className="px-4 py-2 bg-slate-100 rounded-lg text-center">
                        <Text variant="body" className="font-semibold">{system}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <ButtonLink href="/contact">View Integration Guide</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Schedule Technical Demo</ButtonLink>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto">
          <Text as="h2" variant="h2" className="mb-4">Ready to Transform Your Buildings?</Text>
          <Text variant="body" className="mb-6 text-lg">
            See how the Cortex™ platform can deliver measurable results for your organization. Book a personalized demo today.
          </Text>
          <ButtonLink href="/contact">Book Your Platform Demo</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
