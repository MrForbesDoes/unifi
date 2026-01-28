import Section from '@/src/components/Section';
import ButtonLink from '@/src/components/ButtonLink';
import Card from '@/src/components/Card';

export default function SolutionsFireguard() {
  return (
    <>
      {/* Hero */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            FireGuard
          </h1>
          <div className="space-y-4 mb-10 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600">
              Proactive and verifiable fire safety and compliance designed for estates teams who
              need audit-ready evidence.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Reduce risk by moving from reactive checks to clear control, accountability, and
              reporting.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/contact">Discuss FireGuard</ButtonLink>
            <ButtonLink href="/platform/overview" variant="secondary">
              See Cortex
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Risks of traditional approach */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              The risk with traditional fire safety
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Fragmented systems and manual processes can create blind spots. When evidence is
              difficult to assemble, the organisation carries operational and reputational risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reactive evidence</h3>
              <p className="text-base md:text-lg text-gray-700">
                Teams spend time compiling proof rather than managing control.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inconsistent reporting</h3>
              <p className="text-base md:text-lg text-gray-700">
                Different buildings and contractors produce different standards of information.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unclear ownership</h3>
              <p className="text-base md:text-lg text-gray-700">
                Actions fall between responsibilities when systems are not connected.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section backgroundColor="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              FireGuard capabilities
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              FireGuard is built to support compliance-led teams: clear workflows, clear evidence,
              and a consistent approach across an estate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Control & visibility</h3>
              <p className="text-base md:text-lg text-gray-700">
                Maintain a clear view of risk, actions, and status across buildings.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Audit-ready evidence</h3>
              <p className="text-base md:text-lg text-gray-700">
                Produce consistent reporting that supports internal review and external scrutiny.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consistent delivery</h3>
              <p className="text-base md:text-lg text-gray-700">
                Standardise processes across buildings, teams, and contractors.
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/sectors" variant="secondary">
              Sector relevance
            </ButtonLink>
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
