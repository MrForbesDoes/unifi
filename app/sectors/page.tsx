import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

const sectors = [
  {
    title: 'Education',
    description:
      'Support estates teams under budget pressure while maintaining compliance and minimising disruption.',
  },
  {
    title: 'Corporate',
    description:
      'Create consistent visibility across office and mixed-use estates, with clear accountability and reporting.',
  },
  {
    title: 'Public sector',
    description:
      'Reduce risk and waste across complex, multi-site portfolios where assurance and governance matter.',
  },
];

export default function Sectors() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Sectors
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Navigate Unifi.id by sector and then follow the relevant pathways across platform,
              fire safety, and energy.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Every route is designed to address budget pressure, compliance expectations, and
              disruption risk.
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

      {/* Sector cards */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Sector pathways
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Use these pathways to orient your priorities. Each sector then connects to the same
              core routes: Cortex, FireGuard, and Energy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Card key={sector.title}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{sector.title}</h3>
                <p className="text-base md:text-lg text-gray-700">{sector.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Next step */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Choose a starting point
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              If you want to understand the platform first, start with Cortex. If you're focused
              on immediate risk reduction, start with FireGuard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/platform/overview" variant="secondary">
                Cortex overview
              </ButtonLink>
              <ButtonLink href="/solutions/fireguard" variant="secondary">
                FireGuard
              </ButtonLink>
              <ButtonLink href="/energy/hub" variant="secondary">
                Energy
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
