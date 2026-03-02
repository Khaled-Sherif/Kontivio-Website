import { Headphones, MessageSquare, Clock, Users, Mail, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { FloatingCircles } from './BackgroundGraphics';
import { ImageWithFallback } from './common/ImageWithFallback';

const servicesData = [
  {
    icon: Headphones,
    title: 'Customer Support',
    shortDescription: 'Multi-channel customer support available 24/7 to keep your customers satisfied and engaged.',
    fullDescription: 'Our dedicated customer support teams are trained to handle all customer inquiries with professionalism and care. We provide support across multiple channels including phone, email, and chat, ensuring your customers can reach you whenever they need assistance.',
    features: [
      '24/7 availability across all time zones',
      'Multilingual support teams',
      'Customizable response scripts and workflows',
      'Real-time reporting and analytics',
      'Quality assurance and monitoring',
      'Scalable solutions for businesses of all sizes'
    ],
    image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0fGVufDF8fHx8MTc2Mjg2MDg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat Support',
    shortDescription: 'Real-time chat support to answer customer queries instantly and boost conversion rates.',
    fullDescription: 'Engage with your customers in real-time through our live chat support service. Our agents are trained to provide quick, accurate responses that help convert visitors into customers while maintaining high satisfaction rates.',
    features: [
      'Instant response to customer queries',
      'Proactive chat engagement strategies',
      'Integration with your existing platforms',
      'Chat transcript and history tracking',
      'Customizable chat widgets and branding',
      'AI-assisted responses for faster resolution'
    ],
    image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBjaGF0JTIwb25saW5lfGVufDF8fHx8MTc2MzkzNjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Technical Support',
    shortDescription: 'Skilled technical support teams to resolve complex issues and maintain customer trust.',
    fullDescription: 'Our technical support specialists are equipped to handle complex technical issues with expertise and patience. We provide comprehensive troubleshooting, product guidance, and technical assistance to keep your customers satisfied.',
    features: [
      'Tier 1, 2, and 3 technical support',
      'Remote troubleshooting and diagnostics',
      'Product knowledge training and certification',
      'Escalation management protocols',
      'Technical documentation support',
      'Bug tracking and reporting'
    ],
    image: 'https://images.unsplash.com/photo-1724260793422-7754e5d06fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYyODk0NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Sales Support',
    shortDescription: 'Professional sales representatives to help grow your business and increase revenue.',
    fullDescription: 'Our sales support team works as an extension of your business, helping to qualify leads, close deals, and drive revenue growth. We combine product knowledge with proven sales techniques to maximize your conversion rates.',
    features: [
      'Lead qualification and nurturing',
      'Outbound and inbound sales support',
      'CRM integration and management',
      'Sales script development',
      'Performance tracking and optimization',
      'Cross-selling and upselling strategies'
    ],
    image: 'https://images.unsplash.com/photo-1590649849991-e9af438ea77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2Mjg5NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Mail,
    title: 'Email Support',
    shortDescription: 'Professional email support services with quick response times and personalized attention.',
    fullDescription: 'Manage high volumes of customer emails efficiently with our dedicated email support team. We ensure every customer receives a timely, personalized response that addresses their concerns and maintains your brand voice.',
    features: [
      'Same-day response guarantee',
      'Email template management',
      'Priority inbox management',
      'Automated tagging and categorization',
      'Follow-up tracking and management',
      'Multi-language email support'
    ],
    image: 'https://images.unsplash.com/photo-1685381949388-bb0402fbe133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHN1cHBvcnQlMjBzZXJ2aWNlfGVufDF8fHx8MTc2Mjg5NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Share2,
    title: 'Social Media Support',
    shortDescription: 'Engage with your customers on social platforms and protect your brand reputation.',
    fullDescription: 'Monitor and respond to customer inquiries across all major social media platforms. Our social media support team helps maintain your brand presence, engage with your community, and turn social interactions into positive customer experiences.',
    features: [
      'Multi-platform monitoring and response',
      'Community management and engagement',
      'Crisis management and reputation protection',
      'Social listening and sentiment analysis',
      'Content moderation and guidelines',
      'Influencer and review management'
    ],
    image: 'https://images.unsplash.com/photo-1762330463580-9bfa9645b0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGN1c3RvbWVyJTIwc2VydmljZXxlbnwxfHx8fDE3NjI4OTQ3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-pink-500 to-rose-500'
  }
];

interface ServicesPageProps {
  onNavigateHome: () => void;
  onNavigateToContactUs?: () => void;
}

export function ServicesPage({ onNavigateHome, onNavigateToContactUs }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-20 px-6 overflow-hidden">
        {/* Background graphics */}
        <div className="absolute inset-0 text-white/10">
          <FloatingCircles />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={onNavigateHome}
            className="text-white hover:bg-white/10 mb-6"
          >
            ← Back to Home
          </Button>
          <h1 className="text-5xl mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Comprehensive customer experience solutions designed to help your business grow. 
            From customer support to sales, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto space-y-24">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-4xl text-gray-800">{service.title}</h2>
                  
                  <p className="text-lg text-gray-600">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl text-gray-800">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`bg-gradient-to-r ${service.color} text-white hover:opacity-90`}>
                    Get Started with {service.title}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help transform your customer experience
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
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}