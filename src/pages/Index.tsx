
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, HeadphonesIcon, Mic, VolumeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const applications = [
    {
      id: 1,
      title: "Customer Support Voice AI",
      description: "Handle 90% of support calls with human-like conversation quality",
      icon: "📞",
      features: ["Multi-language support", "CRM integration", "Smart escalation"],
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "AI Receptionist",
      description: "Instant deployment for small businesses in under 5 minutes",
      icon: "☎️",
      features: ["Appointment booking", "Call routing", "FAQ handling"],
      badge: "Quick Setup"
    },
    {
      id: 3,
      title: "Medical Clinic Voice AI",
      description: "HIPAA-compliant appointment booking and patient assistance",
      icon: "🧑‍⚕️",
      features: ["HIPAA compliant", "Insurance verification", "Emergency triage"],
      badge: "Healthcare"
    },
    {
      id: 4,
      title: "Delivery & Logistics Agent",
      description: "Handle high-volume calls from drivers and customers",
      icon: "📦",
      features: ["Real-time tracking", "ETAs", "Route optimization"],
      badge: "Enterprise"
    },
    {
      id: 5,
      title: "Government Services AI",
      description: "Help citizens navigate government processes via phone",
      icon: "🏛️",
      features: ["Form assistance", "Process guidance", "Multi-language"],
      badge: "Public Sector"
    },
    {
      id: 6,
      title: "Elderly Companion Calls",
      description: "Daily wellness check-ins and medication reminders",
      icon: "🧓",
      features: ["Wellness tracking", "Family alerts", "Health monitoring"],
      badge: "Healthcare"
    },
    {
      id: 7,
      title: "Blue-Collar Field Work AI",
      description: "Voice-first assistant for construction and field workers",
      icon: "🛠️",
      features: ["Time logging", "Status reports", "Material requests"],
      badge: "Field Work"
    },
    {
      id: 8,
      title: "Political Campaign Voice AI",
      description: "Intelligent voter conversations and sentiment analysis",
      icon: "🗣️",
      features: ["Sentiment analysis", "Multi-language", "Voter outreach"],
      badge: "Campaign"
    },
    {
      id: 9,
      title: "Payment Reminder Agent",
      description: "Empathetic debt collection and payment processing",
      icon: "🧾",
      features: ["Legal compliance", "Payment plans", "Stress reduction"],
      badge: "Finance"
    },
    {
      id: 10,
      title: "Universal Voice Plugin",
      description: "Add voice AI to any website or app with no-code",
      icon: "📞",
      features: ["No-code setup", "Custom branding", "API integration"],
      badge: "Developer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VoiceAI Platform
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Documentation</Button>
              <Button onClick={() => navigate('/dashboard')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Launch Dashboard
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Future of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Voice AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business communications with AI voice agents that sound human, 
            understand context, and integrate seamlessly with your existing systems.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3"
            >
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">1T+</div>
              <div className="text-sm text-gray-600">Business Calls Annually</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">90%</div>
              <div className="text-sm text-gray-600">Call Resolution Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5min</div>
              <div className="text-sm text-gray-600">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            10 Powerful Voice AI Applications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From customer support to government services, deploy AI voice agents 
            across every industry and use case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <Card key={app.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-2">{app.icon}</div>
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0">
                    {app.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {app.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {app.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors"
                  onClick={() => navigate('/dashboard')}
                >
                  Configure Agent
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Voice AI Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for scale with the security, reliability, and integrations 
              your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Human-Like Conversations</h3>
              <p className="text-gray-600">Advanced AI that handles interruptions, accents, and context switches naturally.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
              <p className="text-gray-600">Communicate in 50+ languages with real-time translation and cultural awareness.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <VolumeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Integrations</h3>
              <p className="text-gray-600">Connect with CRMs, calendars, payment systems, and 1000+ other tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using Voice AI to improve customer experience.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/dashboard')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
          >
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">VoiceAI Platform</span>
          </div>
          <p className="text-gray-400 mb-4">
            The future of business communication is here.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 VoiceAI Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
