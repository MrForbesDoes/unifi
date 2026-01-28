import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            About Unifi.id
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Unifi.id is a people-first smart building and decarbonisation platform.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              The focus is simple: reduce waste and risk through integrated, funded, and verifiable
              building intelligence and upgrades.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/platform/overview">Platform overview</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              The problem we address
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Many organisations manage buildings through fragmented systems and reactive processes.
              That creates avoidable cost, unnecessary carbon, and compliance risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fragmentation</h3>
              <p className="text-base md:text-lg text-gray-700">
                Multiple vendors and tools make it hard to create a single, trusted view.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reactive management</h3>
              <p className="text-base md:text-lg text-gray-700">
                Decisions are forced by incidents and deadlines rather than evidence and priorities.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unverified outcomes</h3>
              <p className="text-base md:text-lg text-gray-700">
                It becomes difficult to demonstrate what changed, what improved, and why.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Explore the operating model
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              If you want the clear structure first, start with Cortex. If you have an immediate
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
