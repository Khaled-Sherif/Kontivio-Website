import { Headphones, MessageSquare, Database, BarChart3, Phone, Mail, FileText, Cloud } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface TechnologyPartnersProps {
  onNavigateHome: () => void;
}

export function TechnologyPartners({ onNavigateHome }: TechnologyPartnersProps) {
  const technologies = [
    {
      category: 'CRM & Customer Management',
      icon: Database,
      tools: [
        { name: 'Salesforce', description: 'Industry-leading CRM platform for managing customer relationships' },
        { name: 'HubSpot', description: 'All-in-one CRM platform for sales, marketing, and service' },
        { name: 'Zoho CRM', description: 'Comprehensive CRM solution for businesses of all sizes' },
        { name: 'Microsoft Dynamics 365', description: 'Enterprise CRM and ERP applications' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Communication & Phone Systems',
      icon: Phone,
      tools: [
        { name: 'Twilio', description: 'Cloud communications platform for voice and messaging' },
        { name: 'RingCentral', description: 'Cloud-based business phone and communications system' },
        { name: 'Vonage', description: 'Unified communications and contact center solutions' },
        { name: 'Five9', description: 'Cloud contact center software for customer engagement' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Live Chat & Messaging',
      icon: MessageSquare,
      tools: [
        { name: 'Zendesk Chat', description: 'Live chat software for customer support teams' },
        { name: 'Intercom', description: 'Customer messaging platform for support and engagement' },
        { name: 'LiveChat', description: 'Online chat software for customer service and sales' },
        { name: 'Drift', description: 'Conversational marketing and sales platform' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Help Desk & Ticketing',
      icon: Headphones,
      tools: [
        { name: 'Zendesk Support', description: 'Complete help desk and ticketing solution' },
        { name: 'Freshdesk', description: 'Cloud-based customer support software' },
        { name: 'Jira Service Management', description: 'IT service management and help desk software' },
        { name: 'ServiceNow', description: 'Enterprise IT service management platform' }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Email Management',
      icon: Mail,
      tools: [
        { name: 'Gmail for Business', description: 'Professional email with Google Workspace' },
        { name: 'Microsoft Outlook', description: 'Email and calendar management solution' },
        { name: 'Help Scout', description: 'Email-based customer support platform' },
        { name: 'Front', description: 'Shared inbox and team collaboration tool' }
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      category: 'Analytics & Reporting',
      icon: BarChart3,
      tools: [
        { name: 'Google Analytics', description: 'Web analytics and reporting platform' },
        { name: 'Tableau', description: 'Business intelligence and data visualization' },
        { name: 'Power BI', description: 'Microsoft business analytics and reporting service' },
        { name: 'Mixpanel', description: 'Product analytics for customer engagement' }
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      category: 'Knowledge Management',
      icon: FileText,
      tools: [
        { name: 'Confluence', description: 'Team collaboration and knowledge base software' },
        { name: 'Notion', description: 'All-in-one workspace for notes and documentation' },
        { name: 'Document360', description: 'Knowledge base software for customer support' },
        { name: 'Guru', description: 'Knowledge management platform for teams' }
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      tools: [
        { name: 'Amazon Web Services', description: 'Comprehensive cloud computing platform' },
        { name: 'Microsoft Azure', description: 'Cloud computing services and solutions' },
        { name: 'Google Cloud Platform', description: 'Suite of cloud computing services' },
        { name: 'Cloudflare', description: 'Web infrastructure and security services' }
      ],
      color: 'from-teal-500 to-green-500'
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
          <h1 className="text-5xl mb-6">Technology Partners</h1>
          <p className="text-xl max-w-3xl opacity-90">
            We leverage industry-leading technologies and platforms to deliver exceptional customer support experiences. Our tech stack is carefully chosen to ensure reliability, scalability, and superior service quality.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-gray-800 mb-6">Powered by Best-in-Class Technology</h2>
            <p className="text-lg text-gray-600">
              At Kontivio, we believe that great customer service starts with great technology. We partner with the world's leading software providers to build a robust, integrated tech ecosystem that empowers our teams to deliver outstanding support. Our technology stack is continuously evaluated and updated to stay at the forefront of the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {technologies.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl text-gray-800">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <Card key={toolIndex} className="p-6 hover:shadow-xl transition-shadow">
                      <h3 className="text-xl text-gray-800 mb-2">{tool.name}</h3>
                      <p className="text-gray-600">{tool.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integration Approach */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-800 text-center mb-12">Our Integration Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                We integrate with your existing systems and workflows, ensuring smooth data flow and minimal disruption.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Access comprehensive dashboards and reports to track performance and make data-driven decisions.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Cloud-Based Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security and compliance measures to protect your data across all platforms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Want to Learn More About Our Technology?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our technology stack can transform your customer support operations
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
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
