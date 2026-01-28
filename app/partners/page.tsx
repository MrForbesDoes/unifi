import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

const partnerTypes = [
  {
    title: 'Delivery partners',
    description:
      'Specialists who support implementation and on-site delivery across estates and projects.',
  },
  {
    title: 'Technology partners',
    description:
      'Tools and systems that connect into a coherent operating model where appropriate.',
  },
  {
    title: 'Sector partners',
    description:
      'Organisations aligned with compliance-led outcomes across public sector, education, and corporate estates.',
  },
];

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Partners
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Unifi.id works with partners who value credible delivery, clear accountability, and
              verifiable outcomes.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              The goal is consistency: the same operating model applied across buildings, teams,
              and programmes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/contact">Talk about partnering</ButtonLink>
            <ButtonLink href="/solutions/hub" variant="secondary">
              Explore solutions
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Partner types */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Partner pathways
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              This page provides a simple overview of partnership routes. Detailed criteria and
              programme information can be added without changing the site structure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((partner) => (
              <Card key={partner.title}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.title}</h3>
                <p className="text-base md:text-lg text-gray-700">{partner.description}</p>
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
              Next step
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              If you're exploring a partnership, start with a short conversation about scope,
              governance, and delivery expectations.
            </p>
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
