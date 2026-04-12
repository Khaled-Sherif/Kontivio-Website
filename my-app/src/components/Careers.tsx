import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Heart, 
  Globe, 
  Briefcase,
  GraduationCap,
  Zap,
  Shield,
  Coffee,
  Home,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface CareersProps {
  onApplyNow?: (position: string) => void;
}

export function Careers({ onApplyNow }: CareersProps) {
  const openPositions = [
    {
      id: 1,
      title: "Customer Support Specialist",
      department: "Customer Support",
      location: "Remote",
      type: "Full-time",
      experience: "Entry Level",
      description: "Join our team to provide exceptional customer support to clients across various industries. Perfect for those passionate about helping others.",
      requirements: [
        "Excellent written and verbal communication skills",
        "Problem-solving mindset",
        "Ability to work independently in a remote environment",
        "Basic computer skills and willingness to learn new systems"
      ]
    },
    {
      id: 2,
      title: "Senior Customer Support Agent",
      department: "Customer Support",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Lead support initiatives and mentor junior team members while handling complex customer issues with technical products.",
      requirements: [
        "2+ years of customer support experience",
        "Experience with CRM systems and ticketing platforms",
        "Strong mentoring and leadership abilities",
        "Technical aptitude and troubleshooting skills"
      ]
    },
    {
      id: 3,
      title: "Technical Support Engineer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Provide advanced technical support for complex software and technology products, working directly with enterprise clients.",
      requirements: [
        "3+ years of technical support experience",
        "Strong understanding of software/SaaS products",
        "Experience with APIs, integrations, and troubleshooting",
        "Bachelor's degree in Computer Science or related field preferred"
      ]
    },
    {
      id: 4,
      title: "Team Leader - Customer Support",
      department: "Management",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead and manage a team of customer support agents, ensuring quality standards and driving team performance.",
      requirements: [
        "4+ years in customer support with 2+ years in leadership",
        "Proven track record of team management",
        "Strong analytical and reporting skills",
        "Experience with performance metrics and KPIs"
      ]
    },
    {
      id: 5,
      title: "Quality Assurance Specialist",
      department: "Quality",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Monitor and evaluate customer interactions to ensure quality standards, providing feedback and coaching to support agents.",
      requirements: [
        "2+ years in QA or customer support",
        "Excellent attention to detail",
        "Strong communication and coaching skills",
        "Experience with quality monitoring tools"
      ]
    },
    {
      id: 6,
      title: "Business Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      description: "Generate new business opportunities and build relationships with potential clients in the outsourcing industry.",
      requirements: [
        "1-3 years in sales or business development",
        "Strong prospecting and communication skills",
        "Self-motivated and target-driven",
        "Experience with CRM systems (Salesforce, HubSpot, etc.)"
      ]
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: "100% Remote Work",
      description: "Work from anywhere in the world with flexible hours"
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-leading compensation with performance bonuses"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths and professional development opportunities"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Continuous learning programs and skill enhancement workshops"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: Coffee,
      title: "Paid Time Off",
      description: "Generous vacation days, sick leave, and holidays"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with regular team events"
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "Work with cutting-edge tools and platforms"
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency and honesty in everything we do"
    },
    {
      icon: Heart,
      title: "Customer-First",
      description: "Our clients' success is our success"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together to achieve extraordinary results"
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for the highest quality in all our work"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            🚀 We're Hiring - Join Our Growing Team
          </div>
          <h1 className="text-5xl lg:text-6xl mb-6">Build Your Career with Kontivio</h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8">
            Join a dynamic team that's revolutionizing customer support. Work remotely, grow professionally, and make an impact.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Remote-First Company</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>150+ Team Members</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Fast Growing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kontivio */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Work at Kontivio?</h2>
            <p className="text-xl text-gray-600">
              We're more than just a company - we're a community committed to your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#3b9ac9]" />
                  </div>
                  <h3 className="text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Find your perfect role and start your journey with us
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl">{position.title}</h3>
                      <Badge variant="secondary" className="bg-blue-100 text-[#3b9ac9]">
                        {position.department}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{position.description}</p>

                    <div className="mb-4">
                      <h4 className="mb-2 text-gray-900">Key Requirements:</h4>
                      <div className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-6 flex-shrink-0">
                    <Button 
                      className="bg-[#3b9ac9] hover:bg-[#2d7a9e] w-full lg:w-auto"
                      size="lg"
                      onClick={() => onApplyNow && onApplyNow(position.title)}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and designed to find the perfect fit
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-2">Apply Online</h3>
              <p className="text-gray-600">Submit your application through our portal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-2">Initial Screening</h3>
              <p className="text-gray-600">Phone or video call with our HR team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-2">Team Interview</h3>
              <p className="text-gray-600">Meet with the hiring manager and team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl mb-2">Offer & Onboarding</h3>
              <p className="text-gray-600">Receive offer and start your journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Don't See the Right Position?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[#3b9ac9] hover:bg-gray-100"
            >
              Send General Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Contact HR Team
            </Button>
          </div>
          <p className="mt-8 text-blue-100">
            Email us at <a href="mailto:careers@kontivio.com" className="underline hover:text-white">careers@kontivio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}