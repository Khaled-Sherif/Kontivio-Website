import { Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './common/ImageWithFallback';

interface BoardOfDirectorsProps {
  onNavigateHome: () => void;
}

export function BoardOfDirectors({ onNavigateHome }: BoardOfDirectorsProps) {
  const boardMembers = [
    {
      name: 'Robert Anderson',
      title: 'Chairman & CEO',
      bio: 'Robert brings over 25 years of experience in business process outsourcing and customer experience management. He has led multiple successful ventures in the technology and services sectors.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbnxlbnwxfHx8fDE3NjI4OTQ3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
      email: 'r.anderson@kontivio.com'
    },
    {
      name: 'Sarah Mitchell',
      title: 'Chief Operating Officer',
      bio: 'Sarah specializes in operational excellence and quality management. With her background in Six Sigma and lean operations, she ensures Kontivio maintains the highest service standards.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc2Mjg5NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
      email: 's.mitchell@kontivio.com'
    },
    {
      name: 'David Chen',
      title: 'Chief Technology Officer',
      bio: 'David leads Kontivio\'s technology strategy and innovation initiatives. His expertise in AI, machine learning, and cloud infrastructure drives our technological advancement.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI4OTQ3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
      email: 'd.chen@kontivio.com'
    },
    {
      name: 'Maria Rodriguez',
      title: 'Chief Customer Officer',
      bio: 'Maria champions customer success and satisfaction at Kontivio. Her passion for creating exceptional customer experiences shapes our service delivery approach.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2Mjg5NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
      email: 'm.rodriguez@kontivio.com'
    },
    {
      name: 'James Thompson',
      title: 'Chief Financial Officer',
      bio: 'James oversees Kontivio\'s financial strategy and operations. His expertise in corporate finance and strategic planning ensures sustainable growth and profitability.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHN1aXR8ZW58MXx8fHwxNzYyODk0NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
      email: 'j.thompson@kontivio.com'
    },
    {
      name: 'Emily Carter',
      title: 'Chief Human Resources Officer',
      bio: 'Emily leads talent acquisition, development, and retention strategies. She ensures Kontivio attracts and nurtures the best remote customer support professionals globally.',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2Mjg5NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
      email: 'e.carter@kontivio.com'
    }
  ];

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
          <h1 className="text-5xl mb-6">Board of Directors</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Meet the experienced leaders guiding Kontivio's vision and strategic direction. Our board brings together decades of expertise in outsourcing, technology, and customer experience.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-gray-800 mb-6">Leadership That Drives Excellence</h2>
          <p className="text-lg text-gray-600">
            Our board of directors comprises industry veterans and visionary leaders who are committed to maintaining Kontivio's position as a premier provider of remote customer support solutions. Their collective expertise spans technology, operations, finance, and customer experience, ensuring we deliver exceptional value to our clients and create meaningful opportunities for our team members.
          </p>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-[#3b9ac9] mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex gap-3">
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-[#3b9ac9] text-white flex items-center justify-center hover:bg-[#2d7a9e] transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-800 text-center mb-12">Our Governance Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center mx-auto mb-4 text-xl">
                1
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">
                Open communication and honest reporting at all levels of the organization
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mx-auto mb-4 text-xl">
                2
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Accountability</h3>
              <p className="text-gray-600 text-sm">
                Clear responsibilities and ownership for decisions and outcomes
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center mx-auto mb-4 text-xl">
                3
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Ethics</h3>
              <p className="text-gray-600 text-sm">
                Unwavering commitment to ethical business practices and integrity
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mx-auto mb-4 text-xl">
                4
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Continuous improvement and embracing new technologies and methodologies
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Partner with Industry Leaders</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference that strong leadership and governance make in service excellence
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
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
