import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

export default function PlatformOverview() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Cortex
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Cortex is the intelligence layer that unifies safety, occupancy, energy, and
              compliance into one decision system.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              It is designed for people running complex estates not for dashboards that create
              noise.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/solutions/hub">Explore solutions</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Talk to Unifi
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Definition + Value */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              A decision system, not just software
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Cortex helps organisations move from reactive building management to controlled,
              verifiable outcomes with clear accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unify data</h3>
              <p className="text-base md:text-lg text-gray-700">
                Bring fragmented building inputs into a consistent system of record.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prioritise action</h3>
              <p className="text-base md:text-lg text-gray-700">
                Support decisions with evidence what matters, what's next, and why.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prove outcomes</h3>
              <p className="text-base md:text-lg text-gray-700">
                Enable reporting that stands up to scrutiny financial, operational, and compliance.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* What it replaces */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              What Cortex replaces
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Most estates teams are forced to manage risk and energy through disconnected
              tools, spreadsheets, and reactive workflows. Cortex replaces fragmentation with a
              coherent operating model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Disconnected systems</h3>
              <p className="text-base md:text-lg text-gray-700">
                Multiple vendors, no shared truth, and inconsistent reporting.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reactive compliance</h3>
              <p className="text-base md:text-lg text-gray-700">
                Chasing evidence after the fact instead of managing control in real time.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manual coordination</h3>
              <p className="text-base md:text-lg text-gray-700">
                Important decisions locked in email threads and fragmented task trackers.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Who it is for + CTA */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Who Cortex is for
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Cortex is designed for decision makers and delivery teams who need defensible
              outcomes across safety, cost, and carbon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Estates & facilities</h3>
              <p className="text-base md:text-lg text-gray-700">
                Reduce operational risk, improve visibility, and create repeatable processes.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finance & ESG</h3>
              <p className="text-base md:text-lg text-gray-700">
                Understand cost drivers, verify upgrades, and report performance credibly.
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/solutions/hub">
              See how Cortex supports FireGuard and Energy
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
