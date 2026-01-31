'use client';
import { useState, useMemo } from 'react';
import { ButtonLink } from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Hero from '@/src/components/Hero';
import PageActions from '@/src/components/PageActions';
import { Section } from '@/src/components/Section';
import Text from '@/src/components/Text';
import { SEO } from '@/src/components/SEO';
import { Search, Bookmark, FileText, Users, TrendingUp, Zap } from 'lucide-react';

type ResourceCategory = 'all' | 'fire-safety' | 'occupancy' | 'sustainability' | 'analytics' | 'strategy';

const resources = [
  { title: 'Data-Driven Security That Works Smarter', excerpt: 'Traditional access control focuses on the door. Modern security requires presence intelligence — real-time awareness of who is actually somewhere.', link: '/news/data-driven-security', category: 'occupancy' as const, type: 'Article', date: 'Oct 2025', readTime: '5 min' },
  { title: 'Transforming Fire Safety with Real-Time Evacuation Intelligence', excerpt: 'Fire drills and evacuation protocols are often treated as tick-box exercises. In reality, emergencies demand live data and instant insight.', link: '/news/transforming-fire-safety', category: 'fire-safety' as const, type: 'Article', date: 'Oct 2025', readTime: '6 min' },
  { title: 'Beyond Capacity: Using Occupancy Data to Keep Venues Safe & Compliant', excerpt: "Managing a venue's capacity isn't just about guest experience — it's a legal obligation and the foundation of your operating license.", link: '/news/beyond-capacity', category: 'occupancy' as const, type: 'Article', date: 'Oct 2025', readTime: '5 min' },
  { title: 'The Future of Smart Buildings: A 2025 Outlook', excerpt: 'Discover the key trends shaping the future of building management, from AI-driven energy savings to enhanced security protocols.', link: '/news/future-of-smart-buildings', category: 'strategy' as const, type: 'Article', date: 'Oct 2025', readTime: '4 min' },
  { title: 'Beyond the Certificate: Living Fire System Intelligence, 24/7', excerpt: 'Most commercial buildings pass their annual fire safety inspection. But what happens in the 364 days between one certificate and the next?', link: '/news/fireguard-post', category: 'fire-safety' as const, type: 'Article', date: 'Oct 2025', readTime: '6 min' },
  { title: 'Unifi.id & FireGuard: A New Era in Fire Safety', excerpt: 'Learn how our integrated FireGuard solution is revolutionising fire safety compliance and response times in complex environments.', link: '/news/fireguard-new-era', category: 'fire-safety' as const, type: 'Article', date: 'Oct 2025', readTime: '5 min' },
  { title: 'The Power of LiveView – Total Building Awareness in One Place', excerpt: "Most buildings are a mess of disconnected systems. Unifi.id's unified command centre transforms fragmented data into actionable building intelligence.", link: '/news/live-view-post', category: 'analytics' as const, type: 'Article', date: 'Oct 2025', readTime: '5 min' },
  { title: 'Data-Driven Partnerships — How Unifi.id Makes Other Systems Better', excerpt: 'Our platform was designed to make your existing infrastructure smarter — not obsolete. We turn legacy systems into intelligent systems.', link: '/news/data-driven-partnerships', category: 'strategy' as const, type: 'Article', date: 'Oct 2025', readTime: '5 min' },
  { title: 'Decarbonisation: Why Waiting Costs More Than Acting', excerpt: 'For estates managers, finance teams, and boardroom leaders, decarbonisation is no longer a distant ambition — it is a commercial and regulatory reality.', link: '/news/decarbonisation-funding-post', category: 'sustainability' as const, type: 'Article', date: 'Oct 2025', readTime: '6 min' },
  { title: 'Decarbonisation Deep Dive: The ROI of Green Tech', excerpt: 'We break down the long-term financial benefits of investing in decarbonisation technologies for your property portfolio.', link: '/news/3', category: 'sustainability' as const, type: 'Deep Dive', date: 'Oct 2025', readTime: '8 min' },
  { title: 'Case Study: How a University Saved 30% on Energy Costs', excerpt: 'Explore our recent partnership with a leading educational institution and see how Cortex delivered verifiable energy savings.', link: '/news/4', category: 'sustainability' as const, type: 'Case Study', date: 'Oct 2025', readTime: '5 min' },
];

const featuredResources = resources.slice(0, 2);
const allResources = resources.slice(2);

const resourceTypes = [
  { icon: FileText, title: 'Whitepapers', description: 'In-depth analysis and research on building intelligence, compliance, and technology.', color: 'text-blue-600 bg-blue-100' },
  { icon: Users, title: 'Case Studies', description: 'Real-world examples of how organisations have transformed their estates with Cortex™.', color: 'text-green-600 bg-green-100' },
  { icon: TrendingUp, title: 'Industry Reports', description: 'Trends, benchmarks, and insights from the smart building and fire safety sector.', color: 'text-purple-600 bg-purple-100' },
  { icon: Zap, title: 'Quick Guides', description: 'Practical, actionable guides to get started with building intelligence.', color: 'text-orange-600 bg-orange-100' },
];

const categoryLabels: Record<ResourceCategory, string> = {
  'all': 'All',
  'fire-safety': 'Fire Safety',
  'occupancy': 'Occupancy',
  'sustainability': 'Sustainability',
  'analytics': 'Analytics',
  'strategy': 'Strategy',
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState<ResourceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    let list = activeTab === 'all' ? resources : resources.filter(r => r.category === activeTab);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(r => r.title.toLowerCase().includes(q) || r.excerpt.toLowerCase().includes(q));
    }
    return list;
  }, [activeTab, searchQuery]);

  const featuredFiltered = filteredResources.slice(0, 2);
  const restFiltered = filteredResources.slice(2);

  return (
    <main className="min-h-screen">
      <SEO 
        title="Resources | Knowledge Hub for Building Intelligence"
        description="A structured library for decision makers: explainers, pathways, and clear next steps. Explore our conservative, credible, and compliance-led resources."
      />
      <Hero
        title={
          <Text as="h1" variant="h1" className="mb-6">
            Smart Building Intelligence Resources
          </Text>
        }
        lead={
          <div className="space-y-4">
            <Text variant="lead">A structured library for decision makers: explainers, pathways, and clear next steps.</Text>
            <Text variant="body">Content is written to be conservative, credible, and compliance-led.</Text>
          </div>
        }
        actions={
          <div className="w-full max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
          </div>
        }
      />

      <Section>
        <div className="max-w-7xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
            {(Object.keys(categoryLabels) as ResourceCategory[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {categoryLabels[tab]}
              </button>
            ))}
          </div>

          {/* Tab Content: Featured (All tab only) */}
          {activeTab === 'all' && !searchQuery && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <Bookmark className="h-6 w-6 text-primary" />
                <Text as="h2" variant="h2">Featured Resources</Text>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredResources.map((resource) => (
                  <Card key={resource.link} className="border-l-4 border-primary">
                    <div className="flex gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium">{resource.type}</span>
                      <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium capitalize">{resource.category.replace('-', ' ')}</span>
                    </div>
                    <Text as="h3" variant="h3" className="mb-2">
                      <a href={resource.link} className="hover:text-primary transition-colors">{resource.title}</a>
                    </Text>
                    <Text variant="body" className="mb-4">{resource.excerpt}</Text>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.date}</span>
                      <span>{resource.readTime} read</span>
                    </div>
                    <ButtonLink href={resource.link}>Read More</ButtonLink>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Resources */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              {activeTab === 'all' && !searchQuery && <Text as="h2" variant="h2">All Resources</Text>}
              {(activeTab !== 'all' || searchQuery) && <Text as="h2" variant="h2">{searchQuery ? 'Search Results' : categoryLabels[activeTab]} Resources</Text>}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTab === 'all' && !searchQuery ? allResources : filteredResources).map((resource) => (
                <Card key={resource.link}>
                  <div className="flex gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium">{resource.type}</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium capitalize">{resource.category.replace('-', ' ')}</span>
                  </div>
                  <Text as="h3" variant="h3" className="mb-2 line-clamp-2">
                    <a href={resource.link} className="hover:text-primary transition-colors">{resource.title}</a>
                  </Text>
                  <Text variant="body" className="mb-4 line-clamp-3 text-gray-600">{resource.excerpt}</Text>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.date}</span>
                    <span>{resource.readTime} read</span>
                  </div>
                  <ButtonLink href={resource.link} variant="outline">Read More</ButtonLink>
                </Card>
              ))}
            </div>
          </div>

          {/* Explore by Resource Type */}
          <div className="mt-20">
            <Text as="h2" variant="h2" className="mb-8">Explore by Resource Type</Text>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceTypes.map((rt) => {
                const Icon = rt.icon;
                return (
                  <Card key={rt.title}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${rt.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Text as="h3" variant="h3" className="mb-2">{rt.title}</Text>
                    <Text variant="body" className="text-gray-600">{rt.description}</Text>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-blue-50 rounded-xl p-10">
            <Text as="h3" variant="h2" className="mb-4">Stay Updated with Smart Building Intelligence</Text>
            <Text variant="body" className="mb-6 max-w-2xl">
              Get the latest insights, case studies, and updates delivered to your inbox. No spam — just actionable content for decision makers.
            </Text>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
              <button type="submit" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Text as="h3" variant="h2" className="mb-4">Need Specific Information?</Text>
            <Text variant="body" className="mb-6 max-w-2xl mx-auto">Can't find what you're looking for? Our research team can help point you to the right resource or provide tailored guidance.</Text>
            <ButtonLink href="/contact" variant="outline">Contact Our Research Team</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
