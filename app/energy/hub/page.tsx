
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Building, TrendingUp, Shield, DollarSign, AlertTriangle, CheckCircle, Target, GraduationCap, School, Award, Users, ArrowRight, Lightbulb, Thermometer, Sun } from 'lucide-react';
import { H1, H2, H3, Body, Lead } from '@/src/components/Typography';
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { SEO } from '@/src/components/SEO';
import { fadeInUp, staggerContainer } from '@/src/components/motion';

export default function EnergyHubPage() {
  const [activeMainTab, setActiveMainTab] = useState('technology');
  const [activeTechTab, setActiveTechTab] = useState('led');
  const [activeSectorTab, setActiveSectorTab] = useState('education');
  const [activeEduTab, setActiveEduTab] = useState('higher-ed');

  return (
    <main className="pt-20">
      <SEO 
        title="Energy Hub | Decarbonisation & Energy Efficiency Solutions"
        description="Stop paying for wasted energy. Unifi.id helps you redirect wasted spend into fully funded upgrades in LED, heating, HVAC, and solar with zero capital outlay."
      />

      {/* Hero Section */}
      <Section backgroundColor="blue" className="relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <Zap className="w-12 h-12 text-unifi-green" />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <H1 className="text-white mb-6">Stop Paying for Wasted Energy. Start Investing in Your Future.</H1>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <Body className="text-white/90 text-xl leading-relaxed">
                Every month, organisations of every size — from schools to global corporates — pour money into the pockets of energy companies by running outdated lighting, heating, and HVAC systems. It feels like you don't have the budget for upgrades. In reality, you do. You're just spending it in the wrong place.
              </Body>
              <Body className="text-white/80 text-lg leading-relaxed">
                Unifi.id helps you redirect that wasted spend into fully funded upgrades in LED, heating, HVAC, solar and renewables. No capital outlay. No hidden costs. Just lower bills, lower carbon, and verifiable compliance. The savings stay with you, not your supplier.
              </Body>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Main Tabs Navigation */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="container px-6">
          <div className="flex justify-center gap-8">
            {[
              { id: 'technology', label: 'Explore by Technology', icon: Zap },
              { id: 'sector', label: 'Explore by Sector', icon: Building }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMainTab(tab.id)}
                className={`flex items-center gap-2 py-6 border-b-2 transition-all font-bold ${
                  activeMainTab === tab.id 
                    ? 'border-unifi-blue text-unifi-blue' 
                    : 'border-transparent text-unifi-gray-dark hover:text-unifi-blue'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeMainTab === 'technology' ? (
          <motion.div
            key="tech-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Tech Hero */}
            <Section backgroundColor="white">
              <div className="container px-6 text-center max-w-3xl mx-auto">
                <H2 className="mb-6">Choose Your Decarbonisation Technology</H2>
                <Body className="text-lg">
                  Start with the technology that delivers the biggest impact for your estate. Each solution can be implemented independently or as part of a comprehensive upgrade program.
                </Body>
              </div>
            </Section>

            {/* Tech Tabs */}
            <div className="bg-unifi-gray/50 py-4">
              <div className="container px-6 flex justify-center gap-4">
                {[
                  { id: 'led', label: 'LED Lighting', icon: Lightbulb },
                  { id: 'heating', label: 'Heating & HVAC', icon: Thermometer },
                  { id: 'solar', label: 'Solar & Renewables', icon: Sun }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTechTab(tab.id)}
                    className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                      activeTechTab === tab.id
                        ? 'bg-unifi-blue text-white shadow-lg'
                        : 'bg-white text-unifi-gray-dark hover:bg-unifi-blue/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTechTab === 'led' && (
              <div className="animate-in fade-in duration-500">
                {/* LED Hero Stats */}
                <Section backgroundColor="white">
                  <div className="container px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                      <H2 className="mb-4">LED Lighting Upgrades: Smarter Investment, Lifetime Returns</H2>
                      <Body className="text-lg text-unifi-gray-dark">
                        In today\'s climate of rising energy bills, stretched budgets, and ESG targets, LED upgrades remain one of the most powerful, proven investments available.
                      </Body>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                      {[
                        { val: '60%', label: 'Average Energy Reduction' },
                        { val: '3-5 Years', label: 'Typical Payback Period' },
                        { val: '25+ Years', label: 'LED Lifespan' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-unifi-blue/5 p-8 rounded-2xl text-center border border-unifi-blue/10">
                          <div className="text-4xl font-bold text-unifi-blue mb-2">{stat.val}</div>
                          <div className="text-unifi-gray-dark font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                      <Body className="text-lg leading-relaxed">
                        Modern LED systems are far more than simple replacements for old fixtures. They represent a complete transformation of your lighting infrastructure — combining energy efficiency, improved comfort, and dramatically reduced maintenance demands.
                      </Body>
                      <Body className="text-lg leading-relaxed">
                        While the upfront cost can feel significant, LED projects consistently deliver some of the best returns on investment of any sustainability measure. In many cases, the energy savings alone can fully finance the installation, allowing upgrades to proceed with no upfront capital outlay.
                      </Body>
                    </div>
                  </div>
                </Section>

                {/* LED Benefits */}
                <Section backgroundColor="gray">
                  <div className="container px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-green">
                        <div className="flex items-center gap-4 mb-6">
                          <DollarSign className="w-8 h-8 text-unifi-green" />
                          <H3>Funding Without the Pain</H3>
                        </div>
                        <Body className="mb-6 font-medium">With energy savings typically exceeding 60%, institutions can often finance the installation through third-party funding at competitive rates.</Body>
                        <ul className="space-y-4">
                          {
                            [
                              "Finance your LED upgrade without touching your capital budget",
                              "Third-party funding covers all installation costs",
                              "Immediate positive cash flow from month one",
                              "Energy cost reductions exceed financing payments from day one"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-green flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-unifi-blue">
                        <div className="flex items-center gap-4 mb-6">
                          <TrendingUp className="w-8 h-8 text-unifi-blue" />
                          <H3>Long-term Benefits</H3>
                        </div>
                        <ul className="space-y-4">
                          {
                            [
                              "Money redirected into your own infrastructure instead of energy companies",
                              "Improving your estate while reducing costs",
                              "Most upgrades pay for themselves in less than five years",
                              "Savings continue long after the finance term ends"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                <Body>{item}</Body>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Warning Section */}
                <Section backgroundColor="white">
                  <div className="container px-6">
                    <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                      <H2 className="text-red-900">Beware of Unrealistic Promises</H2>
                      </div>
                      <Body className="text-red-800 mb-8 text-lg">
                        The LED market can be confusing. Some installers promote dramatic savings figures, paired with ultra-low installation costs and budget products. While seductive, these offers often come at a hidden price:
                      </Body>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">Hidden Risks</H3>
                          <ul className="space-y-2 text-red-800">
                            <li>• Fixtures that fail long before their rated life</li>
                            <li>• Poor compliance with recognised lighting standards</li>
                            <li>• Higher energy use as fittings degrade over time</li>
                            <li>• Replacements and disruptions that erase projected savings</li>
                          </ul>
                        </div>
                        <div>
                          <H3 className="text-red-900 mb-4 text-xl">The Real Cost</H3>
                          <Body className="text-red-800 mb-4">The result: the \'cheap\' option is rarely cheap at all.</Body>
                          <ul className="space-y-2 text-red-800">
                            <li>• Products that are technically \'legal\' but non-compliant</li>
                            <li>• Early failures requiring costly replacements</li>
                            <li>• Maintenance disruptions affecting operations</li>
                            <li>• Lost savings that never materialize</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* The Unifi.id Standard */}
                <Section backgroundColor="gray">
                  <div className="container px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                      <H2 className="mb-4">The Unifi.id Standard</H2>
                      <Body className="text-lg">At Unifi.id, we deliver solutions that protect your budget not just this year, but every year:</Body>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <CheckCircle className="w-6 h-6 text-unifi-green" />
                          <H3 className="text-xl">Quality & Compliance</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Meeting or exceeding standards for education, workplaces, and public estates",
                              "Premium fixtures with certified performance ratings",
                              "20+ year LED lifespan with consistent performance",
                              "Fittings that maintain efficiency and light quality for their full rated life",
                              "Designed for longevity, protecting your long-term investment"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-green">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <Target className="w-6 h-6 text-unifi-blue" />
                          <H3 className="text-xl">Conservative & Reliable</H3>
                        </div>
                        <ul className="space-y-3">
                          {
                            [
                              "Realistic estimates based on real site conditions and dialogue",
                              "Conservative modelling, not unrealistic promises that disappoint",
                              "Experienced teams who handle the process end to end",
                              "Stress-free installation minimising disruption to your operations"
                            ].map((item, i) => (
                              <li key={i} className="flex gap-2 text-unifi-gray-dark">
                                <span className="text-unifi-blue">•</span> {item}
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </Section>
              </div>
            )}

            {activeTechTab === 'heating' && (
              <Section backgroundColor="white">
                <div className="container px-6 text-center py-20">
                  <Thermometer className="w-16 h-16 text-unifi-blue mx-auto mb-6" />
                  <H2>Heating & HVAC Solutions</H2>
                  <Body className="max-w-2xl mx-auto mt-4">
                    Optimise your building's climate control with intelligent heating and HVAC upgrades. Reduce waste and improve comfort with zero upfront capital.
                  </Body>
                  <div className="mt-12">
                    <ButtonLink href="/contact" variant="primary">Discuss HVAC Upgrades</ButtonLink>
                  </div>
                </div>
              </Section>
            )}

            {activeTechTab === 'solar' && (
              <Section backgroundColor="white">
                <div className="container px-6 text-center py-20">
                  <Sun className="w-16 h-16 text-unifi-green mx-auto mb-6" />
                  <H2>Solar & Renewables</H2>
                  <Body className="max-w-2xl mx-auto mt-4">
                    Generate your own clean energy and reduce reliance on the grid. Our fully funded solar solutions provide immediate savings and long-term energy security.
                  </Body>
                  <div className="mt-12">
                    <ButtonLink href="/contact" variant="primary">Explore Solar Options</ButtonLink>
                  </div>
                </div>
              </Section>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="sector-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Sector Tabs */}
            <div className="bg-unifi-gray/50 py-4">
              <div className="container px-6 flex justify-center gap-4">
                {[
                  { id: 'education', label: 'Education', icon: GraduationCap },
                  { id: 'corporate', label: 'Corporate', icon: Building },
                  { id: 'public', label: 'Public Sector', icon: Users }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSectorTab(tab.id)}
                    className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                      activeSectorTab === tab.id
                        ? 'bg-unifi-blue text-white shadow-lg'
                        : 'bg-white text-unifi-gray-dark hover:bg-unifi-blue/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeSectorTab === 'education' && (
              <div className="animate-in fade-in duration-500">
                <Section backgroundColor="white">
                  <div className="container px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                      <H2 className="mb-4">LED Lighting Solutions for Education</H2>
                      <Body className="text-lg">
                        From primary schools to sprawling university campuses, the education sector is facing unprecedented energy and infrastructure pressure. Our LED lighting solutions deliver immediate savings while modernizing learning environments across all education sectors.
                      </Body>
                    </div>

                    {/* Education Nested Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                      {[
                        { id: 'higher-ed', label: 'Higher Ed' },
                        { id: 'state-schools', label: 'State Schools' },
                        { id: 'mats', label: 'MATs' },
                        { id: 'independent', label: 'Independent' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveEduTab(tab.id)}
                          className={`px-6 py-2 rounded-lg font-bold transition-all ${
                            activeEduTab === tab.id
                              ? 'bg-unifi-blue/10 text-unifi-blue border-2 border-unifi-blue'
                              : 'bg-unifi-gray text-unifi-gray-dark border-2 border-transparent hover:border-unifi-blue/30'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {activeEduTab === 'higher-ed' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <GraduationCap className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Sustainable Estates. Without Capex Sacrifice.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Universities are global brands — and their estates shape the student experience, academic output, and institutional reputation.</Body>
                              <Body>But with capital tightly rationed between research, teaching, and student services, lighting infrastructure upgrades are often delayed — despite clear energy waste and rising compliance pressure.</Body>
                              <Body>Managing complex estates - with some buildings decades or even centuries old - outdated lighting fixtures drain budgets and compromise learning environments.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps universities deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades across entire estates",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Phased LED modernisation that avoids academic disruption",
                                  "Verifiable energy and carbon reductions for ESG",
                                  "VAT recovery on qualifying works to boost net ROI"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-12">University-Specific Challenges We Address</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Shield className="w-6 h-6 text-red-500" />
                              <H3 className="text-xl">Student Safety & Duty of Care</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Beyond fire drills, schools and universities must guarantee real-time oversight of students and staff across large, complex estates. Safeguarding requires visibility into who is on-site, where they are, and how quickly they can be accounted for in emergencies.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Building className="w-6 h-6 text-blue-500" />
                              <H3 className="text-xl">Security in Open Environments</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Education must remain welcoming — but also protected. Managing visitor access, monitoring anomalies, and securing high-risk zones without disrupting the learning environment is a constant balancing act.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Energy Costs & ESG Targets</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Rising utility bills and tightening sustainability mandates demand smarter building controls. Without live occupancy data, energy and carbon reporting remain guesswork — and budgets suffer.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Award className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Complex Estates & Compliance</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Multi-building campuses face scrutiny from auditors, insurers, and regulators. Paper-based evacuation lists, static access logs, and estimated energy reports are no longer defensible.
                            </Body>
                          </div>
                        </div>
                          {[
                            {
                              title: "Historic Buildings",
                              icon: Building,
                              desc: "Heritage-sensitive LED retrofits that preserve architectural character while modernizing lighting infrastructure.",
                              features: ["Heritage-compatible solutions", "Planning permission support", "Conservation-compliant"]
                            },
                            {
                              title: "Complex Estates",
                              icon: TrendingUp,
                              desc: "Coordinated LED upgrades across multi-building campuses with diverse lighting needs.",
                              features: ["Phased implementation", "Minimal academic disruption", "Campus-wide coordination"]
                            },
                            {
                              title: "ESG & Compliance",
                              icon: Shield,
                              desc: "LED-specific energy efficiency improvements that support sustainability commitments.",
                              features: ["LED-specific carbon reporting", "Energy efficiency compliance", "Sustainability rankings support"]
                            }
                          ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-unifi-gray">
                              <item.icon className="w-10 h-10 text-unifi-blue mb-6" />
                              <H3 className="text-xl mb-4">{item.title}</H3>
                              <Body className="mb-6 text-unifi-gray-dark">{item.desc}</Body>
                              <ul className="space-y-2">
                                {item.features.map((f, j) => (
                                  <li key={j} className="text-sm font-bold text-unifi-blue flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3" /> {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeEduTab === 'primary-secondary' && (
                      <div className="animate-in fade-in duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <School className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Safer Schools. Brighter Futures.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Primary and secondary schools are vital community hubs, but often operate with tight budgets and aging infrastructure. Our LED lighting solutions provide immediate energy savings while creating improved learning environments for students and staff.</Body>
                              <Body>Upgrading to LED lighting can significantly reduce operational costs, enhance safety through better visibility, and contribute to a school's sustainability goals without requiring upfront capital investment.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps primary & secondary schools deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades across school estates",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Improved learning environments with better light quality",
                                  "Reduced energy bills and carbon footprint",
                                  "Enhanced safety and security through improved visibility"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-12">Key Challenges for Primary & Secondary Education</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <DollarSign className="w-6 h-6 text-green-500" />
                              <H3 className="text-xl">Budget Constraints</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Schools often face severe budget limitations, making it difficult to fund essential infrastructure upgrades like modern lighting systems.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Outdated Infrastructure</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Many school buildings have old, inefficient lighting that consumes excessive energy and provides poor illumination, impacting learning and staff well-being.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Shield className="w-6 h-6 text-red-500" />
                              <H3 className="text-xl">Safety & Security</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Ensuring a safe and secure environment for students and staff is paramount. Improved lighting can deter unauthorized access and enhance visibility in and around school premises.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Award className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Environmental Targets</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Schools are increasingly under pressure to meet sustainability goals and reduce their carbon footprint, with energy consumption being a major factor.
                            </Body>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeEduTab === 'further-education' && (
                      <div className="animate-in fade-in duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <Users className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Optimised Learning Environments for Further Education.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>Further education colleges and vocational training centers play a crucial role in skill development, but often face unique challenges related to diverse learning spaces and student demographics. Our LED lighting solutions offer flexible, energy-efficient upgrades that support various educational needs.</Body>
                              <Body>Modern LED lighting can improve focus and productivity in classrooms and workshops, reduce operating costs, and enhance the overall appeal of facilities, attracting and retaining students.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps further education institutions deliver:</H3>
                            <ul className="space-y-4">
                              {
                                [
                                  "Fully funded LED lighting upgrades for diverse learning spaces",
                                  "Cashflow-positive projects paid from operational savings",
                                  "Improved lighting quality for enhanced learning and practical training",
                                  "Significant reductions in energy consumption and maintenance costs",
                                  "Modernized facilities to attract and retain students"
                                ].map((item, i) => (
                                  <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                    <Body>{item}</Body>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <H3 className="text-center mb-12">Key Challenges for Further Education</H3>
                        <div className="grid md:grid-cols-2 gap-12">
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Target className="w-6 h-6 text-blue-500" />
                              <H3 className="text-xl">Diverse Learning Environments</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Further education institutions encompass a wide range of spaces, from traditional classrooms to specialized workshops and vocational training areas, each with unique lighting requirements.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <DollarSign className="w-6 h-6 text-green-500" />
                              <H3 className="text-xl">Funding & Investment</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Securing funding for infrastructure improvements can be challenging, often requiring institutions to seek solutions that offer immediate financial benefits.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <TrendingUp className="w-6 h-6 text-purple-500" />
                              <H3 className="text-xl">Attracting & Retaining Students</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Modern, well-lit facilities are crucial for creating an attractive learning environment that can help institutions draw in new students and keep existing ones engaged.
                            </Body>
                          </div>
                          <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                              <Lightbulb className="w-6 h-6 text-yellow-500" />
                              <H3 className="text-xl">Energy Efficiency & Sustainability</H3>
                            </div>
                            <Body className="text-unifi-gray-dark">
                              Reducing energy consumption and operating costs while demonstrating a commitment to environmental responsibility are key priorities for further education providers.
                            </Body>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeEduTab === 'state-schools' && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <School className="w-12 h-12 text-unifi-blue" />
                              <H3 className="text-2xl">Smarter Lighting. Brighter Schools. Without Capex Sacrifice.</H3>
                            </div>
                            <div className="space-y-4 text-unifi-gray-dark">
                              <Body>State schools are under relentless pressure to stretch every pound — with estate budgets often fixed or ringfenced, upgrades are pushed back year after year.</Body>
                              <Body>But delaying improvements doesn't just defer costs. It locks schools into higher energy bills, growing maintenance burdens, and environments that fall short of supporting pupils and staff.</Body>
                            </div>
                          </div>
                          <div className="bg-unifi-blue/5 p-8 rounded-3xl border border-unifi-blue/10">
                            <H3 className="text-xl mb-6">Unifi.id helps state schools deliver:</H3>
                            <ul className="space-y-4">
                              {[
                                "Fully funded LED lighting upgrades across classrooms",
                                "Cashflow-positive projects paid from operational savings",
                                "Phased installations timed around school hours",
                                "Verifiable carbon reductions for regulatory standards"
                              ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                  <CheckCircle className="w-5 h-5 text-unifi-blue flex-shrink-0 mt-1" />
                                  <Body className="font-medium">{item}</Body>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Section>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA */}
      <Section backgroundColor="gray">
        <div className="container px-6">
          <div className="bg-unifi-blue rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
            <H2 className="text-white mb-6">Ready to Start Your Decarbonisation Journey?</H2>
            <Body className="text-white/80 text-lg mb-8">
              Join hundreds of organisations already saving millions in energy costs while protecting the planet.
            </Body>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" variant="primary" className="bg-white text-unifi-blue hover:bg-unifi-gray">
                Book an Energy Audit
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
                Talk to a Specialist
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
