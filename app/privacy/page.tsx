import Section from '@/src/components/Section';

export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="white" className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl text-gray-600">
              Privacy Policy page
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              How we handle your personal information
            </p>
          </div>
        </div>
      </Section>

      {/* Privacy Content Section */}
      <Section backgroundColor="gray">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Privacy Policy
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Privacy Policy page - This page outlines how we collect, use, and protect 
            your personal information. We are committed to maintaining the privacy and 
            security of your data in accordance with applicable data protection laws.
          </p>
        </div>
      </Section>
    </>
  );
}
