import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface PricingProps {
  onNavigateHome: () => void;
}

export function Pricing({ onNavigateHome }: PricingProps) {
  const perContactPackages = [
    {
      name: 'Starter',
      price: '$0.50',
      unit: 'per contact',
      description: 'Perfect for small businesses getting started',
      features: [
        'Email & chat support',
        'Basic reporting',
        'Standard response time',
        'Business hours coverage',
        'Knowledge base access',
        'Monthly performance reports'
      ]
    },
    {
      name: 'Professional',
      price: '$0.85',
      unit: 'per contact',
      description: 'Ideal for growing businesses',
      features: [
        'Multi-channel support',
        'Advanced analytics',
        'Priority response time',
        'Extended hours coverage',
        'Custom workflows',
        'Weekly performance reports',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      unit: 'per contact',
      description: 'For large-scale operations',
      features: [
        'All channels included',
        'Real-time analytics',
        'Instant response time',
        '24/7 coverage available',
        'Fully customized workflows',
        'Daily performance reports',
        'Dedicated team & manager',
        'SLA guarantees'
      ]
    }
  ];

  const perAgentPackages = [
    {
      name: 'Basic Agent',
      price: '$2,500',
      unit: 'per agent/month',
      description: 'Dedicated support specialist',
      features: [
        'Full-time dedicated agent',
        'Standard training included',
        'Business hours availability',
        'Email & chat support',
        'Monthly performance reviews',
        'Standard reporting'
      ]
    },
    {
      name: 'Professional Agent',
      price: '$3,200',
      unit: 'per agent/month',
      description: 'Experienced support professional',
      features: [
        'Senior dedicated agent',
        'Advanced training included',
        'Extended hours availability',
        'Multi-channel support',
        'Bi-weekly performance reviews',
        'Advanced analytics',
        'Deep product knowledge',
        'Quality assurance included'
      ],
      popular: true
    },
    {
      name: 'Elite Agent',
      price: '$4,500',
      unit: 'per agent/month',
      description: 'Premium support expert',
      features: [
        'Expert-level dedicated agent',
        'Specialized training included',
        '24/7 availability options',
        'All channels supported',
        'Weekly performance reviews',
        'Real-time analytics',
        'Deep product knowledge',
        'Team lead supervision',
        'Priority escalation handling'
      ]
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Cost Structure',
      perContact: 'Pay only for actual customer interactions',
      perAgent: 'Predictable monthly cost per agent'
    },
    {
      category: 'Scalability',
      perContact: 'Easily scales with customer volume fluctuations',
      perAgent: 'Scales by adding or removing agents as needed'
    },
    {
      category: 'Best For',
      perContact: 'Seasonal businesses and variable customer volumes',
      perAgent: 'Consistent support needs and predictable workload'
    },
    {
      category: 'Availability',
      perContact: 'Standard to extended hours based on package',
      perAgent: '24/7 options available with Elite Agent package',
      agentAdvantage: true
    },
    {
      category: 'Product Expertise',
      perContact: 'General customer service training',
      perAgent: 'Deep product knowledge with dedicated training',
      agentAdvantage: true
    },
    {
      category: 'Response Time',
      perContact: 'Shared resource pool - fast but variable',
      perAgent: 'Dedicated focus - consistent and immediate'
    },
    {
      category: 'Customization',
      perContact: 'Standard workflows with some customization',
      perAgent: 'Fully customized to your processes'
    },
    {
      category: 'Team Consistency',
      perContact: 'Rotating team members',
      perAgent: 'Same dedicated agent(s) every day'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Button 
            variant="ghost" 
            onClick={onNavigateHome}
            className="text-white hover:bg-white/10 mb-6"
          >
            ← Back to Home
          </Button>
          <h1 className="text-5xl mb-6">Flexible Pricing for Every Business</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Choose between pay-per-contact or dedicated agent pricing models. Both designed to deliver exceptional value and support quality.
          </p>
        </div>
      </section>

      {/* Per Contact Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-800 mb-4">Per Contact Pricing</h2>
            <p className="text-lg text-gray-600">Pay only for the customer interactions you need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {perContactPackages.map((pkg, index) => (
              <Card key={index} className={`p-8 relative ${pkg.popular ? 'ring-2 ring-[#3b9ac9] shadow-xl' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl text-gray-800 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl text-gray-800">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{pkg.unit}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e]' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  Get Pricing Details
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Per Agent Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-800 mb-4">Per Agent Head Pricing</h2>
            <p className="text-lg text-gray-600">Dedicated agents fully trained on your products and processes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {perAgentPackages.map((pkg, index) => (
              <Card key={index} className={`p-8 relative ${pkg.popular ? 'ring-2 ring-[#3b9ac9] shadow-xl' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl text-gray-800 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl text-gray-800">{pkg.price}</span>
                  <span className="text-gray-600 ml-2 text-sm">{pkg.unit}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e]' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  Get Pricing Details
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-800 mb-4">Which Model is Right for You?</h2>
            <p className="text-lg text-gray-600">Compare the advantages of each pricing model</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white">
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-left">Per Contact Model</th>
                    <th className="px-6 py-4 text-left">Per Agent Head Model</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-6 py-4 font-medium text-gray-800">{feature.category}</td>
                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-start gap-2">
                          <span>{feature.perContact}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-start gap-2">
                          {feature.agentAdvantage && (
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span>{feature.perAgent}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="p-8">
              <h3 className="text-2xl text-gray-800 mb-4">Per Contact Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No minimum commitments - pay only for what you use</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Perfect for seasonal or fluctuating support needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lower initial investment to get started</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Instant scalability without hiring concerns</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl text-gray-800 mb-4">Per Agent Head Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>24/7 availability options</strong> with Elite Agent package</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Deep product knowledge</strong> through dedicated training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Consistent team members who know your business intimately</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#3b9ac9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Predictable costs for budgeting and planning</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our team help you choose the perfect pricing model for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#3b9ac9] hover:bg-gray-100"
            >
              Get Pricing Details <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={onNavigateHome}
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
