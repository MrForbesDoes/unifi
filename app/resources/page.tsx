import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

const resourceCards = [
  {
    title: 'Platform overview',
    description:
      'Understand Cortex and how it supports safety, occupancy, energy, and compliance in one operating model.',
    href: '/platform/overview',
    cta: 'Read platform overview',
  },
  {
    title: 'Fire safety',
    description:
      'A practical, compliance-led route to proactive control and audit-ready evidence.',
    href: '/solutions/fireguard',
    cta: 'Explore FireGuard',
  },
  {
    title: 'Energy',
    description:
      'How to prioritise upgrades and funding logic without speculative claims or unsupported statistics.',
    href: '/energy/hub',
    cta: 'Explore Energy',
  },
];

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Resources
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              A structured library for decision makers: explainers, pathways, and clear next steps.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Content is written to be conservative, credible, and compliance-led.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/solutions/hub">Explore solutions</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Resource cards */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Start here
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              These pages explain the core routes and language used across the site.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resourceCards.map((card) => (
              <Card key={card.href}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-base md:text-lg text-gray-700 mb-6">{card.description}</p>
                <ButtonLink href={card.href}>{card.cta}</ButtonLink>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Need a clear next step?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              If you're deciding where to start, use the sector and role pages to enter by context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/sectors" variant="secondary">
                Explore sectors
              </ButtonLink>
              <ButtonLink href="/roles" variant="secondary">
                Explore roles
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
