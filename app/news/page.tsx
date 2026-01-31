'use client';
import { H1, H3 } from "@/src/components/Typography";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { ArrowRight } from "lucide-react";
import { SEO } from '@/src/components/SEO';

const blogPosts = [
  {
    title: "Data-Driven Security That Works Smarter",
    excerpt: "Traditional access control focuses on the door. Modern security requires presence intelligence — real-time awareness of who is actually somewhere.",
    image: "/unifi-assets/security-data.jpg",
    link: "/news/data-driven-security",
  },
  {
    title: "Transforming Fire Safety with Real-Time Evacuation Intelligence",
    excerpt: "Fire drills and evacuation protocols are often treated as tick-box exercises — necessary but not always effective. In reality, emergencies demand live data and instant insight.",
    image: "/unifi-assets/fire-safety.jpg",
    link: "/news/transforming-fire-safety",
  },
  {
    title: "Beyond Capacity: Using Occupancy Data to Keep Venues Safe & Compliant",
    excerpt: "Managing a venue's capacity isn't just about guest experience — it's a legal obligation and the foundation of your operating license.",
    image: "/unifi-assets/occupancy.jpg",
    link: "/news/beyond-capacity",
  },
  {
    title: "The Future of Smart Buildings: A 2025 Outlook",
    excerpt: "Discover the key trends shaping the future of building management, from AI-driven energy savings to enhanced security protocols.",
    image: "/unifi-assets/smart-buildings.jpg",
    link: "/news/future-of-smart-buildings",
  },
  {
    title: "Beyond the Certificate: Living Fire System Intelligence, 24/7",
    excerpt: "Most commercial buildings pass their annual fire safety inspection. But what happens in the 364 days between one certificate and the next?",
    image: "/unifi-assets/fireguard.jpg",
    link: "/news/fireguard-post",
  },
  {
    title: "Unifi.id & FireGuard: A New Era in Fire Safety",
    excerpt: "Learn how our integrated FireGuard solution is revolutionizing fire safety compliance and response times in complex environments.",
    image: "/unifi-assets/fireguard-era.jpg",
    link: "/news/fireguard-new-era",
  },
  {
    title: "The Power of LiveView – Total Building Awareness in One Place",
    excerpt: "Most buildings are a mess of disconnected systems. Unifi.id's unified command centre transforms fragmented data into actionable building intelligence.",
    image: "/unifi-assets/liveview.jpg",
    link: "/news/live-view-post",
  },
  {
    title: "Data-Driven Partnerships — How Unifi.id Makes Other Systems Better",
    excerpt: "Our platform was designed to make your existing infrastructure smarter — not obsolete. We turn legacy systems into intelligent systems.",
    image: "/unifi-assets/partnerships.jpg",
    link: "/news/data-driven-partnerships",
  },
  {
    title: "Decarbonisation: Why Waiting Costs More Than Acting",
    excerpt: "For estates managers, finance teams, and boardroom leaders, decarbonisation is no longer a distant ambition — it's a commercial and regulatory reality.",
    image: "/unifi-assets/sustainability.jpg",
    link: "/news/decarbonisation-funding-post",
  },
  {
    title: "Decarbonisation Deep Dive: The ROI of Green Tech",
    excerpt: "We break down the long-term financial benefits of investing in decarbonisation technologies for your property portfolio.",
    image: "/unifi-assets/green-tech.jpg",
    link: "/news/3",
  },
  {
    title: "Case Study: How a University Saved 30% on Energy Costs",
    excerpt: "Explore our recent partnership with a leading educational institution and see how Cortex delivered verifiable energy savings.",
    image: "/unifi-assets/case-study.jpg",
    link: "/news/4",
  },
];

export default function NewsHub() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="News & Blog | Smart Building Insights & Case Studies"
        description="Stay updated with the latest insights, case studies, and updates on smart building intelligence, fire safety, and sustainability from Unifi.id."
      />
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <H1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">News & Blog</H1>
          <p className="text-lg md:text-xl text-gray-600">
            Insights, case studies, and updates on smart building intelligence, fire safety, sustainability, and more.
          </p>
        </div>
      </Section>

      {/* Blog Grid */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%239ca3af'%3EImage%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-6">
                  <H3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</H3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <ButtonLink href={post.link} variant="outline" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
