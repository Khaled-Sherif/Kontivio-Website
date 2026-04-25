import { Users, ClipboardCheck, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './common/ImageWithFallback';

interface BusinessDevelopmentProps {
  onNavigateHome: () => void;
}

export function BusinessDevelopment({ onNavigateHome }: BusinessDevelopmentProps) {
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
          <h1 className="text-5xl mb-6">Business Development Solutions</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Enhance your operations with our dedicated team management and quality assurance services. We help you build efficient, high-performing teams while maintaining exceptional service standards.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Dedicated Team Management */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWFuYWdlbWVudCUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyODk0NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dedicated Team Management"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-4xl text-gray-800">Dedicated Team Management</h2>
              <p className="text-lg text-gray-600">
                Get a fully managed, dedicated team that works exclusively for your business. We handle recruitment, training, performance management, and day-to-day operations, allowing you to focus on strategic growth.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl text-gray-800">Key Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Handpicked team members aligned with your business needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Experienced team leaders and supervisors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Comprehensive onboarding and training programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Performance tracking and regular reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Flexible scaling to meet changing business demands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Dedicated account manager for seamless communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Assurance & Monitoring */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwYXNzdXJhbmNlJTIwdGVhbXxlbnwxfHx8fDE3NjI4OTQ3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quality Assurance & Monitoring"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h2 className="text-4xl text-gray-800">Quality Assurance & Monitoring</h2>
              <p className="text-lg text-gray-600">
                Maintain exceptional service standards with our comprehensive quality assurance program. We continuously monitor, evaluate, and optimize every customer interaction to ensure consistent excellence.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl text-gray-800">Key Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Real-time monitoring of all customer interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Detailed quality scorecards and evaluations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Regular coaching and feedback sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Customizable quality standards and metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Call recording and interaction analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Comprehensive reporting and insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-800 text-center mb-12">Why Choose Our Business Development Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Strategic Focus</h3>
              <p className="text-gray-600">
                Free up your resources to focus on core business strategies while we handle operations.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Data-driven insights and regular optimization to continuously enhance performance.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Expert Management</h3>
              <p className="text-gray-600">
                Experienced team leaders with proven track records in outsourcing excellence.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Proven Processes</h3>
              <p className="text-gray-600">
                Industry best practices and established frameworks for optimal results.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Direct access to your team and management for seamless collaboration.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                Consistent high-quality service backed by rigorous monitoring and evaluation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Build Your Dream Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our business development solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#3b9ac9] hover:bg-gray-100"
              onClick={onNavigateHome}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
