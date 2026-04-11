import { Database, Settings, Zap, Shield, Globe, LineChart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './common/ImageWithFallback';

interface TechnologySolutionsProps {
  onNavigateHome: () => void;
  onNavigateToContactUs?: () => void;
}

export function TechnologySolutions({ onNavigateHome, onNavigateToContactUs }: TechnologySolutionsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={onNavigateHome}
            className="text-white hover:bg-white/10 mb-6"
          >
            ← Back to Home
          </Button>
          <h1 className="text-5xl mb-6">Technology Solutions</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Empower your business with our comprehensive CRM solutions. We provide, customize, and optimize CRM systems tailored to your unique business needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* CRM System Section */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm0lMjBzeXN0ZW0lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyODk0NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="CRM System"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <Database className="w-8 h-8" />
                </div>
                <h2 className="text-4xl text-gray-800">Custom CRM Solutions</h2>
                <p className="text-lg text-gray-600">
                  We understand that every business has unique needs. That's why we provide fully customizable CRM systems that adapt to your workflow, not the other way around. Whether you need a CRM from scratch or want to optimize your existing system, we've got you covered.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-4xl text-gray-800 text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-800 mb-3">Custom Configuration</h3>
                <p className="text-gray-600">
                  Tailored CRM setup that matches your business processes, workflows, and requirements perfectly.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-800 mb-3">System Integration</h3>
                <p className="text-gray-600">
                  Seamless integration with your existing tools and platforms for unified data management.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-800 mb-3">Data Security</h3>
                <p className="text-gray-600">
                  Enterprise-grade security measures to protect your sensitive customer data and business information.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-800 mb-3">Cloud-Based Access</h3>
                <p className="text-gray-600">
                  Access your CRM from anywhere, anytime with our secure cloud-based solutions.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-800 mb-3">Analytics & Reporting</h3>
                <p className="text-gray-600">
                  Comprehensive analytics and customizable reports to drive data-informed business decisions.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-800 mb-3">Scalable Solutions</h3>
                <p className="text-gray-600">
                  CRM systems that grow with your business, from startups to enterprise-level organizations.
                </p>
              </Card>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-4xl text-gray-800 mb-8">Why Choose Our CRM Solutions?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Customization at Every Level:</strong> From data fields to workflows, we customize every aspect to fit your business perfectly.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Expert Implementation:</strong> Our team of CRM specialists ensures smooth deployment and adoption across your organization.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Ongoing Support & Training:</strong> We provide comprehensive training and continuous support to maximize your CRM investment.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Cost-Effective Solutions:</strong> Get enterprise-level CRM capabilities without the enterprise-level costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Transform Your Customer Management?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our CRM solutions can streamline your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#3b9ac9] hover:bg-gray-100"
              onClick={onNavigateToContactUs}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}