import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';
import Text from '@/src/components/Text';

const solutionCards = [
  {
    title: 'Cortex platform',
    description:
      'The intelligence layer that unifies safety, occupancy, energy, and compliance into one decision system.',
    href: '/platform/overview',
    cta: 'Platform overview',
  },
  {
    title: 'FireGuard',
    description:
      'Proactive and verifiable fire safety and compliance designed for complex estates and audit-ready reporting.',
    href: '/solutions/fireguard',
    cta: 'Explore FireGuard',
  },
  {
    title: 'Energy',
    description:
      'Identify waste, prioritise upgrades, and route savings into funded improvements with conservative, defensible logic.',
    href: '/energy/hub',
    cta: 'Explore Energy',
  },
];

export default function SolutionsHub() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <Text as="h1" variant="h1" className="mb-6">
            Solutions
          </Text>
          <div className="space-y-4 mb-10 max-w-3xl">
            <Text variant="lead">
              A structured route from fragmented building management to control, savings, and verified outcomes.
            </Text>
            <Text variant="lead">
              Start with the platform, or enter by risk area fire safety, energy, or operational visibility.
            </Text>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/platform/overview">Start with Cortex</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Index */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <Text as="h2" variant="h2" className="mb-3">
              Navigate by solution
            </Text>
            <Text variant="body">
              Each route is designed to be decision-maker friendly: clear scope, clear outcomes, and a logical next step.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutionCards.map((card) => (
              <Card key={card.href}>
                <Text as="h3" variant="h3" className="mb-2">
                  {card.title}
                </Text>
                <Text variant="body" className="mb-6">
                  {card.description}
                </Text>
                <ButtonLink href={card.href}>{card.cta}</ButtonLink>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Next step */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Text as="h2" variant="h2" className="mb-3">
              No dead ends
            </Text>
            <Text variant="body" className="mb-10">
              If you're exploring by sector or by role, start here and then follow the pathways designed for your context.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/sectors" variant="secondary">
                Explore by sector
              </ButtonLink>
              <ButtonLink href="/roles" variant="secondary">
                Explore by role
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
