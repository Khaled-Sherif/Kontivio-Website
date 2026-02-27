import { Globe, Shield, Cpu, Maximize2 } from 'lucide-react';
import { Card } from './ui/card';

const benefits = [
  {
    icon: Globe,
    title: 'Expertise & Reliability',
    description: 'Industry-leading professionals delivering consistent, high-quality service across all customer touchpoints.'
  },
  {
    icon: Shield,
    title: 'Technical Excellence',
    description: 'Cutting-edge tools and deep technical knowledge to handle complex support scenarios with confidence.'
  },
  {
    icon: Cpu,
    title: 'Technology & Innovation',
    description: 'Leveraging AI and automation to enhance efficiency while maintaining the human touch your customers expect.'
  },
  {
    icon: Maximize2,
    title: 'Scalability & Flexibility',
    description: 'Seamlessly scale your support operations up or down based on your business needs and growth trajectory.'
  }
];

export function WhyPartner() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center mb-16 text-gray-800">
          Why Partner with Kontivio?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-none bg-white">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#3b9ac9]/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#3b9ac9]" />
                  </div>
                  <h3 className="text-xl text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}