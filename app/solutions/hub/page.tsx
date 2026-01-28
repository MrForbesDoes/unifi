"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { 
  Shield, AlertTriangle, Users, TrendingUp, Brain, Zap, 
  Radio, Footprints, Eye, Wifi, Layers, Network, Cpu,
  Building2, Heart, Landmark, ShoppingBag, Factory, GraduationCap
} from "lucide-react";

// Main tab type
type MainTab = "solutions" | "detection" | "fire";

// Sub-tab types
type SolutionsSubTab = "overview" | "access" | "fire-safety" | "occupancy" | "insights" | "energy";
type DetectionSubTab = "overview" | "sense" | "flow" | "cognito" | "echo";
type FireSubTab = "overview" | "fireguard" | "compliance";

export default function SolutionsHub() {
  const [mainTab, setMainTab] = useState<MainTab>("solutions");
  const [solutionsSubTab, setSolutionsSubTab] = useState<SolutionsSubTab>("overview");
  const [detectionSubTab, setDetectionSubTab] = useState<DetectionSubTab>("overview");
  const [fireSubTab, setFireSubTab] = useState<FireSubTab>("overview");

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Solutions Hub</h1>
          <p className="text-lg md:text-xl text-gray-600">
            The Unifi.id Solutions Hub brings together a suite of modular technologies designed to make your building safer, smarter, and more efficient. Each solution delivers immediate value — and when combined, forms a powerful ecosystem managed through LiveView and powered by Cortex™, our central intelligence layer.
          </p>
        </div>
      </Section>

      {/* Main Tabs */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
            <button
              onClick={() => setMainTab("solutions")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                mainTab === "solutions"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Smart Building Solutions
            </button>
            <button
              onClick={() => setMainTab("detection")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                mainTab === "detection"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Detection Technologies
            </button>
            <button
              onClick={() => setMainTab("fire")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                mainTab === "fire"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Fire Safety Systems
            </button>
          </div>

          {/* Tab Content */}
          {mainTab === "solutions" && <SolutionsTab subTab={solutionsSubTab} setSubTab={setSolutionsSubTab} />}
          {mainTab === "detection" && <DetectionTab subTab={detectionSubTab} setSubTab={setDetectionSubTab} />}
          {mainTab === "fire" && <FireTab subTab={fireSubTab} setSubTab={setFireSubTab} />}
        </div>
      </Section>
    </>
  );
}

// Solutions Tab Component
function SolutionsTab({ subTab, setSubTab }: { subTab: SolutionsSubTab; setSubTab: (tab: SolutionsSubTab) => void }) {
  return (
    <div>
      {/* Solutions Hero */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligence That Works Across Your Estate</h2>
        <p className="text-gray-700 mb-4">
          Every building is alive with movement, data, and systems — but without intelligence, they work in isolation. Unifi.id's Smart Building Solutions bring them together, transforming raw signals into actionable insights for safety, efficiency, and performance.
        </p>
        <p className="text-gray-700 font-semibold mb-4">We've organised our solutions by the challenges you face:</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Access Control & Security</strong> – Detect anomalies, prevent risks, and respond in real time.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Fire Safety & Evacuation</strong> – Know your systems are ready and your people are safe.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Live Occupancy Intelligence</strong> – See who's in, where they are, and how spaces are used.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Operational Insights</strong> – Understand the causes behind trends, not just the patterns.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Energy Performance</strong> – Align energy use with real demand, reducing cost and carbon.</span>
          </li>
        </ul>
        <p className="text-gray-700 italic">
          This is building intelligence, applied with purpose — tailored to the needs of your sector, and proven to deliver results.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: "overview" as const, label: "Overview" },
          { id: "access" as const, label: "Access & Security" },
          { id: "fire-safety" as const, label: "Fire Safety" },
          { id: "occupancy" as const, label: "Live Occupancy" },
          { id: "insights" as const, label: "Insights" },
          { id: "energy" as const, label: "Energy" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              subTab === tab.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sub Tab Content */}
      {subTab === "overview" && <SolutionsOverview setSubTab={setSubTab} />}
      {subTab === "access" && <AccessSecurity />}
      {subTab === "fire-safety" && <FireSafety />}
      {subTab === "occupancy" && <LiveOccupancy />}
      {subTab === "insights" && <OperationalInsights />}
      {subTab === "energy" && <EnergyPerformance />}
    </div>
  );
}

// Solutions Overview
function SolutionsOverview({ setSubTab }: { setSubTab: (tab: SolutionsSubTab) => void }) {
  const modules = [
    {
      icon: Shield,
      color: "bg-slate-100 text-slate-700",
      title: "SafeGuard",
      description: "Dynamic access and security. Adaptive access control that reacts in real time.",
      features: ["Tailgating detection", "Real-time access visibility", "Facial recognition", "Anti-passback enforcement"],
      tab: "access" as const,
    },
    {
      icon: AlertTriangle,
      color: "bg-orange-100 text-orange-700",
      title: "FireSafe",
      description: "Fire strategy intelligence. Evacuation, compliance, and command-level safety insights.",
      features: ["Live evacuation monitoring", "Real-time roll calls", "Muster point tracking", "Fire panel integration"],
      tab: "fire-safety" as const,
    },
    {
      icon: Users,
      color: "bg-blue-100 text-blue-700",
      title: "Pulse",
      description: "Real-time occupancy intelligence. Know who's in your building, and where.",
      features: ["Live headcount", "Zone-level occupancy", "Movement tracking", "Density monitoring"],
      tab: "occupancy" as const,
    },
    {
      icon: TrendingUp,
      color: "bg-green-100 text-green-700",
      title: "Predict",
      description: "Predictive building intelligence for capacity planning and forecasting.",
      features: ["Capacity forecasting", "Trend analysis", "Predictive alerts", "Resource optimization"],
      tab: "insights" as const,
    },
    {
      icon: Brain,
      color: "bg-purple-100 text-purple-700",
      title: "Insights",
      description: "Behavioral analytics for space optimization and predictive intelligence.",
      features: ["Space utilization", "Behavioral patterns", "Usage analytics", "Optimization recommendations"],
      tab: "insights" as const,
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Intelligence Modules turn building data into action</h3>
      <p className="text-gray-700 mb-8">
        From live occupancy tracking to predictive insights, each module focuses on a specific area of safety, security, and performance — giving you targeted solutions that work together as one intelligent platform.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <div key={module.title} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h4>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <ul className="space-y-2 mb-4">
                {module.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSubTab(module.tab)}
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-4">
          Discover how our intelligence modules can transform your building operations and provide the insights you need.
        </p>
        <ButtonLink href="/contact" variant="primary">
          Book a Demo
        </ButtonLink>
      </div>
    </div>
  );
}

// Access & Security Content
function AccessSecurity() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Access Control & Security</h3>
      <p className="text-gray-700 mb-6">
        Protect your building with intelligent access control and real-time security monitoring. Detect tailgating, unauthorized access, and security threats before they become incidents.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
            <Shield className="h-8 w-8 text-slate-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">SafeGuard</h4>
            <p className="text-lg text-primary font-semibold mb-3">More Than Access Control — Security That Thinks</p>
            <p className="text-gray-700">
              SafeGuard transforms traditional access systems into intelligent, adaptive security platforms. By overlaying our real-time occupancy and recognition capabilities, your buildings gain the ability to spot risks, verify identity instantly, and act on anomalies — before they become incidents.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Capabilities</h5>
            <ul className="space-y-2">
              {["Tailgating and unauthorised access detection", "Real-time visibility beyond access points", "Facial recognition validation", "Anti-passback enforcement", "Custom rule-based alerting"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Use Cases</h5>
            <ul className="space-y-2">
              {["Seamless integration with Acre/TDS", "Visitor and contractor monitoring", "After-hours alerts", "Role-based access tracking"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Compatible With</h5>
            <ul className="space-y-2">
              {["Pulse (occupancy verification)", "Cognito (ID authentication)", "LiveView (centralised monitoring)"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-4">
          Discover how our access control & security solutions can transform your building operations.
        </p>
        <ButtonLink href="/contact" variant="primary">
          Book a Demo
        </ButtonLink>
      </div>
    </div>
  );
}

// Fire Safety Content
function FireSafety() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Fire Safety & Evacuation</h3>
      <p className="text-gray-700 mb-6">
        Ensure fire safety compliance and real-time evacuation monitoring. Know who's evacuated, who's still inside, and coordinate emergency response with confidence.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="h-8 w-8 text-orange-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">FireSafe</h4>
            <p className="text-lg text-primary font-semibold mb-3">From Compliance to Command — Live Fire Strategy Intelligence</p>
            <p className="text-gray-700">
              FireSafe elevates your fire safety approach from checklist compliance to live, operational strategy. With zone-by-zone presence data and dynamic muster reports, you gain command-level visibility when it matters most — and verifiable compliance the rest of the time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Capabilities</h5>
            <ul className="space-y-2">
              {["Live evacuation monitoring", "Real-time occupancy-based roll calls", "Muster point alerts and tracking", "Fire panel integration", "Incident playback and documentation"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Use Cases</h5>
            <ul className="space-y-2">
              {["Faster, safer evacuations", "Automated muster management", "Insurance reporting", "Fire-safe crowd density tracking"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Compatible With</h5>
            <ul className="space-y-2">
              {["FireSure (risk visibility)", "Pulse (live headcount)", "LiveView (incident dashboard)", "Fire alarm panels"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-4">
          Discover how our fire safety & evacuation solutions can transform your building operations.
        </p>
        <ButtonLink href="/contact" variant="primary">
          Book a Demo
        </ButtonLink>
      </div>
    </div>
  );
}

// Live Occupancy Content
function LiveOccupancy() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Occupancy Intelligence</h3>
      <p className="text-gray-700 mb-6">
        Track people-flow in real time across floors and zones. Make smarter decisions about staffing, cleaning, heating/cooling, and safety drills with accurate occupancy data.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Users className="h-8 w-8 text-blue-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Pulse</h4>
            <p className="text-lg text-primary font-semibold mb-3">Know who's in your building — zone-by-zone, moment-by-moment</p>
            <p className="text-gray-700">
              Pulse uses RFID-enabled cards or cardholders to provide live visibility of occupants across every zone of your building. This isn't access control — it's true presence intelligence that powers smarter operations, safety, and space optimisation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Capabilities</h5>
            <ul className="space-y-2">
              {["Live headcounts by floor/zone", "Time-in-location tracking", "LiveView integration", "Privacy-first architecture"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Use Cases</h5>
            <ul className="space-y-2">
              {["Real-time fire safety roll call", "Hybrid workforce planning", "Desk utilisation", "Security escalation triggers"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Compatible With</h5>
            <ul className="space-y-2">
              {["All major RFID card systems", "Access control systems", "LiveView, FireSafe, Predict"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-4">
          Discover how our live occupancy intelligence solutions can transform your building operations.
        </p>
        <ButtonLink href="/contact" variant="primary">
          Book a Demo
        </ButtonLink>
      </div>
    </div>
  );
}

// Operational Insights Content
function OperationalInsights() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Insights</h3>
      <p className="text-gray-700 mb-6">
        Benchmark usage, spot trends, and feed predictive models. All insights available in clear, executive-ready dashboards or automated reports.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-green-700" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Predict</h4>
          <p className="text-gray-600 mb-4">Predictive building intelligence for capacity planning and forecasting.</p>
          <ul className="space-y-2 mb-4">
            {["Capacity forecasting", "Trend analysis", "Predictive alerts", "Resource optimization"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" variant="outline">
            Learn More
          </ButtonLink>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
            <Brain className="h-6 w-6 text-purple-700" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Insights</h4>
          <p className="text-gray-600 mb-4">Behavioral analytics for space optimization and predictive intelligence.</p>
          <ul className="space-y-2 mb-4">
            {["Space utilization", "Behavioral patterns", "Usage analytics", "Optimization recommendations"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" variant="outline">
            Learn More
          </ButtonLink>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-4">
          Discover how our operational insights solutions can transform your building operations.
        </p>
        <ButtonLink href="/contact" variant="primary">
          Book a Demo
        </ButtonLink>
      </div>
    </div>
  );
}

// Energy Performance Content
function EnergyPerformance() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Performance</h3>
      <p className="text-gray-700 mb-6">
        Reduce waste by syncing lighting, HVAC and more to actual use. Our intelligence identifies inefficiencies and recommends corrective actions based on real occupancy patterns.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
            <Zap className="h-8 w-8 text-yellow-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Energy Intelligence</h4>
            <p className="text-gray-700">
              Optimize energy consumption using real occupancy data and intelligent automation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Features</h5>
            <ul className="space-y-2">
              {["HVAC optimization", "Lighting automation", "Energy waste detection", "Carbon footprint reduction"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Benefits</h5>
            <ul className="space-y-2">
              {["Reduce energy costs by 20-40%", "Meet ESG targets", "Improve occupant comfort", "Real-time monitoring"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-4">
          Discover how our energy performance solutions can transform your building operations.
        </p>
        <ButtonLink href="/contact" variant="primary">
          Book a Demo
        </ButtonLink>
      </div>
    </div>
  );
}

// Detection Technologies Tab Component
function DetectionTab({ subTab, setSubTab }: { subTab: DetectionSubTab; setSubTab: (tab: DetectionSubTab) => void }) {
  return (
    <div>
      {/* Detection Hero */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Detection Technologies: Capturing the Signals That Matter</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Every building tells its story through countless small signals — a badge swipe, a face recognised, a movement in a corridor, a phone connecting to WiFi. But no single detection method sees everything.
          </p>
          <p>
            That's why Unifi.id offers a suite of complementary Detection Modules — each designed to capture presence in a different way, and each able to work seamlessly with our Intelligence Modules to deliver the full picture.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Sense</strong> – Passive RFID detection for silent, unobtrusive presence awareness.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Flow</strong> – 3D vision-based counting and movement analysis.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Cognito</strong> – Discreet facial recognition for identity-aware experiences.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Echo</strong> – WiFi-based passive device detection for ambient awareness.</span>
            </li>
          </ul>
          <p className="italic">
            Whether it's a single floor or a complex, multi-site estate, we help you choose the right mix of detection layers to match your operational needs, privacy requirements, and building complexity — so you can trust every presence signal, every time.
          </p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: "overview" as const, label: "Overview" },
          { id: "sense" as const, label: "Sense (RFID)" },
          { id: "flow" as const, label: "Flow (Vision)" },
          { id: "cognito" as const, label: "Cognito (Facial)" },
          { id: "echo" as const, label: "Echo (WiFi)" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              subTab === tab.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sub Tab Content */}
      {subTab === "overview" && <DetectionOverview setSubTab={setSubTab} />}
      {subTab === "sense" && <SenseDetection />}
      {subTab === "flow" && <FlowDetection />}
      {subTab === "cognito" && <CognitoDetection />}
      {subTab === "echo" && <EchoDetection />}
    </div>
  );
}

// Detection Overview
function DetectionOverview({ setSubTab }: { setSubTab: (tab: DetectionSubTab) => void }) {
  const detectionMethods = [
    {
      icon: Radio,
      color: "bg-blue-100 text-blue-700",
      title: "Sense",
      method: "RFID-based Detection",
      description: "Seamless Detection. Zero Effort. Real-Time Presence — Sense uses passive RFID detection to identify presence in and around your buildings without any manual input from users.",
      tab: "sense" as const,
    },
    {
      icon: Footprints,
      color: "bg-green-100 text-green-700",
      title: "Flow",
      method: "Anonymous Footfall Analytics",
      description: "Movement Intelligence. Privacy First. Actionable Insights — Flow captures anonymous movement patterns and behavioral analytics to optimize space utilization.",
      tab: "flow" as const,
    },
    {
      icon: Eye,
      color: "bg-purple-100 text-purple-700",
      title: "Cognito",
      method: "Facial Recognition",
      description: "Identity Intelligence. Instant Verification. Enhanced Security — Cognito provides advanced facial recognition and identity intelligence.",
      tab: "cognito" as const,
    },
    {
      icon: Wifi,
      color: "bg-indigo-100 text-indigo-700",
      title: "Echo",
      method: "WiFi Device Detection",
      description: "The Digital Whisper Layer — Echo uses passive WiFi detection to identify presence based on the quiet digital signals devices emit.",
      tab: "echo" as const,
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Layered Detection Architecture</h3>
      <p className="text-gray-700 mb-8">
        No single detection method is perfect. Layer multiple technologies to close gaps, increase confidence, and ensure comprehensive coverage.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {detectionMethods.map((method) => {
          const Icon = method.icon;
          return (
            <div key={method.title} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{method.method}</p>
              <p className="text-gray-700 mb-4 text-sm">{method.description}</p>
              <button
                onClick={() => setSubTab(method.tab)}
                className="text-primary font-semibold hover:underline text-sm"
              >
                Learn More →
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg p-6 text-white">
        <h4 className="text-xl font-bold mb-3">Best Practice: Layer Detection Methods</h4>
        <p>
          For maximum confidence in fire safety, combine Sense (RFID) + Echo (WiFi) for comprehensive evacuation validation. For security, layer Cognito (facial recognition) + Sense (access cards) for dual-factor verification.
        </p>
      </div>
    </div>
  );
}

// Individual Detection Method Components (simplified for brevity)
function SenseDetection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Sense - RFID Detection</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Radio className="h-8 w-8 text-blue-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Sense</h4>
            <p className="text-lg text-primary font-semibold mb-3">Seamless Detection. Zero Effort. Real-Time Presence</p>
            <p className="text-gray-700">
              Sense uses passive RFID detection to identify presence in and around your buildings without any manual input from users. No door swipes, no camera feeds—just continuous, anonymous awareness of where people are.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Capabilities</h5>
            <ul className="space-y-2">
              {["Passive RFID-based presence detection", "Entry and zone-level awareness", "Zero user interaction required", "Works with badges and wearables"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Use Cases</h5>
            <ul className="space-y-2">
              {["Fire safety roll calls", "Zone occupancy tracking", "Access verification", "Visitor management"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gray-50 rounded-lg p-6 text-center">
        <ButtonLink href="/contact" variant="primary">Book a Demo</ButtonLink>
      </div>
    </div>
  );
}

function FlowDetection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Flow - Vision-Based Analytics</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
            <Footprints className="h-8 w-8 text-green-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Flow</h4>
            <p className="text-lg text-primary font-semibold mb-3">Movement Intelligence. Privacy First.</p>
            <p className="text-gray-700">
              Flow captures anonymous movement patterns and behavioral analytics to optimize space utilization without compromising individual privacy.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Capabilities</h5>
            <ul className="space-y-2">
              {["3D vision-based counting", "Anonymous movement tracking", "Crowd density monitoring", "Privacy-preserving analytics"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Use Cases</h5>
            <ul className="space-y-2">
              {["Retail footfall analysis", "Crowd management", "Space optimization", "Queue monitoring"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gray-50 rounded-lg p-6 text-center">
        <ButtonLink href="/contact" variant="primary">Book a Demo</ButtonLink>
      </div>
    </div>
  );
}

function CognitoDetection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Cognito - Facial Recognition</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Eye className="h-8 w-8 text-purple-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Cognito</h4>
            <p className="text-lg text-primary font-semibold mb-3">Identity Intelligence. Instant Verification.</p>
            <p className="text-gray-700">
              Cognito provides advanced facial recognition and identity intelligence, enabling instant verification and seamless access control.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Capabilities</h5>
            <ul className="space-y-2">
              {["Advanced facial recognition", "Instant identity verification", "Works with face coverings", "Multi-factor authentication"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Use Cases</h5>
            <ul className="space-y-2">
              {["High-security access control", "VIP recognition", "Watchlist monitoring", "Frictionless entry"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gray-50 rounded-lg p-6 text-center">
        <ButtonLink href="/contact" variant="primary">Book a Demo</ButtonLink>
      </div>
    </div>
  );
}

function EchoDetection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Echo - WiFi Detection</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <Wifi className="h-8 w-8 text-indigo-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Echo</h4>
            <p className="text-lg text-primary font-semibold mb-3">The Digital Whisper Layer</p>
            <p className="text-gray-700">
              Echo uses passive WiFi detection to identify presence based on the quiet digital signals devices emit as people move through your building.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Capabilities</h5>
            <ul className="space-y-2">
              {["Passive WiFi device detection", "No app required", "Ambient presence awareness", "Closes occupancy gaps"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Use Cases</h5>
            <ul className="space-y-2">
              {["Visitor tracking", "Backup occupancy layer", "Evacuation verification", "Anonymous analytics"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gray-50 rounded-lg p-6 text-center">
        <ButtonLink href="/contact" variant="primary">Book a Demo</ButtonLink>
      </div>
    </div>
  );
}

// Fire Safety Systems Tab Component
function FireTab({ subTab, setSubTab }: { subTab: FireSubTab; setSubTab: (tab: FireSubTab) => void }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Fire Safety Systems & Compliance</h2>
        <p className="text-gray-700">
          Comprehensive fire safety intelligence with real-time monitoring, compliance automation, and insurance integration.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: "overview" as const, label: "Overview" },
          { id: "fireguard" as const, label: "FireGuard Platform" },
          { id: "compliance" as const, label: "Compliance" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              subTab === tab.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {subTab === "overview" && <FireOverview />}
      {subTab === "fireguard" && <FireGuardDetail />}
      {subTab === "compliance" && <FireCompliance />}
    </div>
  );
}

function FireOverview() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Fire Safety Intelligence</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-3">FireGuard Platform</h4>
          <p className="text-gray-700 mb-4">
            Complete fire safety intelligence with real-time monitoring, compliance, and insurance integration.
          </p>
          <ul className="space-y-2 mb-4">
            {["Real-time fire system monitoring", "Insurance risk reduction", "Compliance automation", "Independent deployment"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/solutions/fireguard" variant="primary">
            Discover FireGuard
          </ButtonLink>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-3">Compliance & Reporting</h4>
          <p className="text-gray-700 mb-4">
            Automated compliance reporting and audit-ready documentation for fire safety regulations.
          </p>
          <ul className="space-y-2 mb-4">
            {["Automated audit trails", "Regulatory compliance", "Incident documentation", "Insurance reporting"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" variant="outline">
            Learn More
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function FireGuardDetail() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">FireGuard Platform</h3>
      <p className="text-gray-700 mb-6">
        Complete fire safety intelligence with real-time monitoring, compliance automation, and insurance integration.
      </p>
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            {["Real-time fire system monitoring", "Live evacuation tracking", "Automated muster management", "Fire panel integration"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <span className="text-primary mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {["Insurance risk reduction", "Compliance automation", "Incident playback", "Audit-ready reporting"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <span className="text-primary mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <ButtonLink href="/solutions/fireguard" variant="primary" size="lg">
          Explore FireGuard Platform
        </ButtonLink>
      </div>
    </div>
  );
}

function FireCompliance() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Fire Safety Compliance</h3>
      <p className="text-gray-700 mb-6">
        Automated compliance reporting and audit-ready documentation for fire safety regulations.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Automated Audits", description: "Complete audit trails for all fire safety events and evacuations." },
          { title: "Regulatory Compliance", description: "Meet all fire safety regulations with automated reporting." },
          { title: "Insurance Ready", description: "Provide insurers with real-time risk data and incident reports." },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
        <ButtonLink href="/contact" variant="primary">Book a Compliance Demo</ButtonLink>
      </div>
    </div>
  );
}
