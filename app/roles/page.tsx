import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

const roles = [
  {
    title: 'Estates directors',
    description:
      'Visibility and control across portfolios, with clear accountability and defensible reporting.',
  },
  {
    title: 'Facilities managers',
    description:
      'A practical operating model to manage work, reduce risk, and avoid reactive compliance.',
  },
  {
    title: 'Finance directors',
    description:
      'Clarity on cost drivers and outcomes, with financial logic that supports investment decisions.',
  },
  {
    title: 'Sustainability & ESG leads',
    description:
      'Verifiable data and reporting, aligned to real constraints and conservative modelling.',
  },
  {
    title: 'Public sector decision makers',
    description:
      'Governance-friendly structure for multi-site estates where assurance and transparency matter.',
  },
];

export default function Roles() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Roles
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Unifi.id is built for decision makers and delivery teams responsible for safety,
              cost, and carbon.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Use this page to orient your priorities then follow the pathways to platform,
              FireGuard, or Energy.
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

      {/* Role cards */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Role pathways
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Each pathway is written to match how decisions are made: risk, cost, compliance, and
              operational delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <Card key={role.title}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-base md:text-lg text-gray-700">{role.description}</p>
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
              Choose your next step
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              If you want the full operating model, start with Cortex. If you have an immediate
              focus, enter through FireGuard or Energy.
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
