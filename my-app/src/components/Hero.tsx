import { Button } from './ui/button';
import { ArrowRight, CheckCircle, Headphones, Clock } from 'lucide-react';
import bannerImage from "../assets/Image-hero.webp";

interface HeroProps {
  onGetStarted?: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative h-[650px] lg:h-[700px] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={bannerImage} 
          alt="Professional customer support agent"
          className="w-full h-full object-cover"
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b9ac9]/95 via-[#2d7a9e]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Trusted by 150+ Companies Worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Exceptional Customer Support,
            <span className="block text-blue-100">
              Delivered Remotely
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Scale your customer support with our dedicated remote teams. Available 24/7, trained on your products, and committed to your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-[#3b9ac9] hover:bg-gray-100 shadow-xl group"
              onClick={onGetStarted}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/20">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/20">
              <Headphones className="w-4 h-4" />
              <span className="text-sm">24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/20">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{'<'}2 Min Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}