import { CheckCircle, ArrowRight, MessageSquare, Users, Settings, Headphones, Database } from 'lucide-react';
import { Card } from './ui/card';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Initial Contact",
      icon: MessageSquare,
      description: "Reach out to us through our contact form, email, or schedule a consultation call. We'll discuss your business needs, support volume, and specific requirements."
    },
    {
      number: 2,
      title: "Needs Assessment",
      icon: Settings,
      description: "Our team conducts a comprehensive analysis of your support requirements, including volume projections, product complexity, and coverage needs. We'll determine the best pricing model for you."
    },
    {
      number: 3,
      title: "CRM Setup",
      icon: Database,
      description: "If you don't have a CRM system, don't worry! We provide a fully integrated CRM solution tailored to your needs. If you already have one, we'll seamlessly integrate with your existing system."
    },
    {
      number: 4,
      title: "Team Assembly & Training",
      icon: Users,
      description: "We carefully select and assemble your dedicated support team. Our agents undergo comprehensive training on your products, services, brand voice, and specific processes."
    },
    {
      number: 5,
      title: "Launch & Ongoing Support",
      icon: Headphones,
      description: "Your support team goes live! We provide continuous monitoring, quality assurance, performance reporting, and ongoing optimization to ensure exceptional service delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6">How It Works</h1>
          <p className="text-xl text-blue-100">
            From first contact to exceptional service delivery - here's our proven partnership process
          </p>
        </div>
      </section>

      {/* Flow Chart */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl text-center mb-12">Our Partnership Journey</h2>
            
            {/* Visual Flow Chart */}
            <div className="relative">
              {/* Desktop Flow - Horizontal */}
              <div className="hidden lg:block">
                <div className="flex justify-between items-start relative">
                  {/* Connecting Line */}
                  <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e]" 
                       style={{ width: 'calc(100% - 8rem)', left: '4rem' }}></div>
                  
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex flex-col items-center" style={{ width: '18%' }}>
                        {/* Circle with Icon */}
                        <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] flex items-center justify-center shadow-lg mb-4">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        {/* Step Number */}
                        <div className="bg-white border-2 border-[#3b9ac9] w-8 h-8 rounded-full flex items-center justify-center mb-3">
                          <span className="text-[#3b9ac9]">{step.number}</span>
                        </div>
                        {/* Title */}
                        <h3 className="text-center mb-2">{step.title}</h3>
                      </div>
                    );
                  })}
                </div>

                {/* CRM Branch Indicator */}
                <div className="mt-8 flex justify-center">
                  <div className="relative w-64">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-px h-8 bg-[#3b9ac9]"></div>
                    <Card className="p-4 bg-blue-50 border-2 border-[#3b9ac9]">
                      <p className="text-sm text-center">
                        <span className="block mb-1">🔀 Decision Point</span>
                        <span className="text-gray-600">Have CRM? We integrate.</span><br/>
                        <span className="text-gray-600">No CRM? We provide one.</span>
                      </p>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Mobile Flow - Vertical */}
              <div className="lg:hidden space-y-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4">
                        {/* Icon Circle */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-white border-2 border-[#3b9ac9] w-7 h-7 rounded-full flex items-center justify-center">
                              <span className="text-sm text-[#3b9ac9]">{step.number}</span>
                            </div>
                            <h3>{step.title}</h3>
                          </div>
                        </div>
                      </div>
                      {/* Connecting Line */}
                      {index < steps.length - 1 && (
                        <div className="ml-8 w-px h-8 bg-gradient-to-b from-[#3b9ac9] to-[#2d7a9e]"></div>
                      )}
                      {/* CRM Branch on mobile */}
                      {index === 2 && (
                        <div className="ml-8 mt-4 mb-4">
                          <Card className="p-3 bg-blue-50 border-2 border-[#3b9ac9]">
                            <p className="text-sm">
                              <span className="block mb-1">🔀 Decision Point</span>
                              <span className="text-gray-600">Have CRM? We integrate.</span><br/>
                              <span className="text-gray-600">No CRM? We provide one.</span>
                            </p>
                          </Card>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Step-by-Step Process</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] flex items-center justify-center mb-2">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <span className="inline-block bg-blue-100 text-[#3b9ac9] px-3 py-1 rounded-full text-sm">
                          Step {step.number}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3">{step.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Special CRM Callout */}
                      {step.number === 3 && (
                        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-[#3b9ac9] rounded">
                          <h4 className="mb-2 text-[#3b9ac9]">No CRM? No Problem!</h4>
                          <p className="text-gray-700">
                            We provide a complete CRM solution including:
                          </p>
                          <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm">Ticket management system</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm">Customer database and history tracking</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm">Reporting and analytics dashboard</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm">Integration with your existing tools</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how Kontivio can transform your customer support experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3b9ac9] rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              View Pricing Options
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
