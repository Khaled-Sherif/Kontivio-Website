import { Target, Eye, Heart, Users, Globe, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './common/ImageWithFallback';

interface AboutUsProps {
  onNavigateHome: () => void;
  onNavigateToContactUs?: () => void;
}

export function AboutUs({ onNavigateHome, onNavigateToContactUs }: AboutUsProps) {
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
          <h1 className="text-5xl mb-6">About Kontivio</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Your trusted partner in delivering exceptional customer experiences through innovative outsourcing solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="w-full lg:w-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyODk0NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Mission"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600">
                At Kontivio, our mission is to empower businesses worldwide by providing exceptional remote customer support services that enhance customer satisfaction, drive growth, and build lasting relationships. We are committed to being more than just a service provider—we aim to be a strategic partner in your success.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Deliver world-class customer experiences that exceed expectations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Foster innovation and continuous improvement in everything we do</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Build long-term partnerships based on trust and mutual success</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNpb24lMjBmdXR1cmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjI4OTQ3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Vision"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-4xl text-gray-800">Our Vision</h2>
              <p className="text-lg text-gray-600">
                We envision a future where Kontivio is recognized globally as the leading provider of remote customer support solutions. We strive to set industry standards for quality, innovation, and customer satisfaction, while creating opportunities for talented professionals worldwide to thrive in the digital economy.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Become the most trusted name in outsourced customer support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Pioneer innovative technologies that transform customer service</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Create meaningful employment opportunities for remote professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-800 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Customer First</h3>
              <p className="text-gray-600">
                We put customers at the heart of everything we do, ensuring their success is our top priority.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in every interaction and service we provide.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Teamwork</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration and work together to achieve extraordinary results.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek new and better ways to serve our clients and improve their experiences.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency, honesty, and ethical practices in all our business dealings.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Accountability</h3>
              <p className="text-gray-600">
                We take ownership of our commitments and deliver on our promises, every time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Join Us on Our Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with Kontivio and experience the difference that our values and commitment can make
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
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}