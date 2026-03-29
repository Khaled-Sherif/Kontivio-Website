import { Headphones, MessageSquare, Clock, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const services = [
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Multi-channel customer support available 24/7 to keep your customers satisfied and engaged.'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat Support',
    description: 'Real-time chat support to answer customer queries instantly and boost conversion rates.'
  },
  {
    icon: Clock,
    title: 'Technical Support',
    description: 'Skilled technical support teams to resolve complex issues and maintain customer trust.'
  },
  {
    icon: Users,
    title: 'Sales Support',
    description: 'Professional sales representatives to help grow your business and increase revenue.'
  }
];

interface ServicesProps {
  onNavigateToServices: () => void;
}

export function Services({ onNavigateToServices }: ServicesProps) {
  return (
    <section id="services" className="relative py-20 bg-white px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-800">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive customer experience solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-2 border-[#3b9ac9] text-[#3b9ac9] hover:bg-[#3b9ac9] hover:text-white"
                    onClick={onNavigateToServices}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}