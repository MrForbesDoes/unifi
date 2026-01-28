import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

export default function EnergyHub() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Energy
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Identify wasted energy spend and route savings into funded upgrades with conservative,
              defensible logic.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Built for organisations balancing budget pressure, compliance expectations, and
              disruption risk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/contact">Discuss an energy pathway</ButtonLink>
            <ButtonLink href="/solutions/hub" variant="secondary">
              Back to solutions
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* How to explore */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Explore by technology or by sector
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              The energy hub is structured to support decision making: what to do, where it applies,
              what standards matter, and what the next step is.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">LED lighting</h3>
              <p className="text-base md:text-lg text-gray-700">
                A practical, low-disruption route to reduce waste and improve reliability.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heating & HVAC</h3>
              <p className="text-base md:text-lg text-gray-700">
                Improve control and performance with a focus on compliance and operational impact.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solar & renewables</h3>
              <p className="text-base md:text-lg text-gray-700">
                A structured approach to generation that aligns with real constraints and verification.
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
              Start with your context
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-10">
              If you prefer to enter by sector or role, use the pathways below and then follow the
              relevant energy route.
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
