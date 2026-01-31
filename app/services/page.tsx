'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { Section } from '@/src/components/Section';
import PlaceholderImage from '@/src/components/PlaceholderImage';
import Card from '@/src/components/Card';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
            <div className="flex-1">
              <H1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
                Our Services
              </H1>
              <div className="space-y-4 mb-8 max-w-3xl">
                <p className="text-lg md:text-xl text-gray-600">
                  Comprehensive solutions for your business needs
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                  Tailored services designed to drive success
                </p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <PlaceholderImage className="aspect-[4/3] lg:aspect-[3/2] shadow-sm" />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Grid Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Service Offerings
          </H2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            Explore our range of services designed to help your business thrive.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Consulting</H3>
              <p className="text-base md:text-lg text-gray-700">
                Expert guidance to help you make informed decisions
              </p>
            </Card>
            <Card>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</H3>
              <p className="text-base md:text-lg text-gray-700">
                Seamless deployment of solutions tailored to your needs
              </p>
            </Card>
            <Card>
              <H3 className="text-xl font-semibold text-gray-900 mb-2">Support</H3>
              <p className="text-base md:text-lg text-gray-700">
                Ongoing assistance to ensure optimal performance
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Additional Services Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6">
          <H2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Additional Services
          </H2>
          <p className="text-base md:text-lg text-gray-700">
            Beyond our core offerings, we provide specialized services including 
            custom development, training programs, and strategic planning to support 
            your long-term growth and success.
          </p>
        </div>
      </Section>
    </>
  );
}
