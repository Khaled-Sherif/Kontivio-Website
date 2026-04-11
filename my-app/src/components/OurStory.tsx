import { Rocket, Users, TrendingUp, Globe, Award, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './common/ImageWithFallback';

interface OurStoryProps {
  onNavigateHome: () => void;
}

export function OurStory({ onNavigateHome }: OurStoryProps) {
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
          <h1 className="text-5xl mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl opacity-90">
            From a simple vision to a global customer support partner—discover the journey that shaped Kontivio.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMG9mZmljZXxlbnwxfHx8fDE3NjI4OTQ3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Beginning"
              className="w-full h-auto rounded-2xl shadow-2xl mb-8"
            />
            <h2 className="text-4xl text-gray-800 mb-6">The Beginning</h2>
            <p className="text-lg text-gray-600 mb-4">
              Kontivio was founded with a simple yet powerful vision: to help businesses deliver exceptional customer experiences without the overhead and complexity of managing in-house support teams. Our founders recognized that in an increasingly digital world, companies needed flexible, scalable, and high-quality customer support solutions that could adapt to their unique needs.
            </p>
            <p className="text-lg text-gray-600">
              What started as a small team of passionate customer service professionals has grown into a thriving organization serving clients across multiple industries and continents. Our journey has been driven by an unwavering commitment to excellence and a genuine desire to make a positive impact on both our clients' businesses and our team members' lives.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-4xl text-gray-800 mb-12 text-center">Our Journey</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                    <Rocket className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-800 mb-2">The Foundation</h3>
                  <p className="text-gray-600">
                    Kontivio was established with a core team of experienced customer service professionals who shared a vision of transforming the outsourcing industry. We started small, working with a handful of clients who believed in our mission and gave us the opportunity to prove our worth.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-800 mb-2">Building Our Team</h3>
                  <p className="text-gray-600">
                    As our reputation grew, so did our team. We focused on recruiting top talent from around the world, building a diverse and skilled workforce that could handle any customer service challenge. Our commitment to training and development became a cornerstone of our success.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-800 mb-2">Scaling Our Operations</h3>
                  <p className="text-gray-600">
                    With proven results and satisfied clients, we expanded our service offerings to include technical support, sales support, and specialized customer service solutions. We invested in cutting-edge technology and infrastructure to support our growing client base and ensure consistent service quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg">
                    <Globe className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-800 mb-2">Global Expansion</h3>
                  <p className="text-gray-600">
                    Today, Kontivio serves clients across multiple continents, offering 24/7 support in multiple languages. We've built a truly global organization that combines local expertise with international best practices, allowing us to deliver world-class service to businesses of all sizes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                    <Award className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-800 mb-2">Recognition & Growth</h3>
                  <p className="text-gray-600">
                    Our commitment to excellence has earned us recognition as a leading provider in the customer support outsourcing industry. We continue to innovate, introducing new technologies and methodologies to stay ahead of industry trends and deliver even greater value to our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Culture */}
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-4xl text-gray-800">Our Culture</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              At the heart of Kontivio is a culture built on respect, collaboration, and continuous improvement. We believe that happy, engaged employees deliver better service to our clients. That's why we invest heavily in creating a positive work environment where team members feel valued, supported, and empowered to excel.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Comprehensive training and professional development programs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Recognition and rewards for outstanding performance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Flexible work arrangements and work-life balance</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Diverse and inclusive workplace environment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Clear career advancement pathways</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Open communication and collaborative leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl text-gray-800 mb-6">Looking Forward</h2>
          <p className="text-lg text-gray-600 mb-8">
            As we look to the future, we remain committed to our founding principles while embracing innovation and change. We're excited about the opportunities ahead and the chance to continue serving our clients with excellence. Our story is still being written, and we invite you to be part of it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Be Part of Our Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us as we continue to redefine excellence in customer support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#3b9ac9] hover:bg-gray-100"
              onClick={onNavigateHome}
            >
              Partner With Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
