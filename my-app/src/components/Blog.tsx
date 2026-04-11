import { Calendar, User, ArrowRight, TrendingUp, Users, Lightbulb, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './common/ImageWithFallback';

interface BlogProps {
  onNavigateHome: () => void;
}

export function Blog({ onNavigateHome }: BlogProps) {
  const blogPosts = [
    {
      title: '10 Best Practices for Remote Customer Support Teams',
      excerpt: 'Discover the proven strategies that help remote support teams maintain high performance and customer satisfaction rates.',
      author: 'Sarah Johnson',
      date: 'November 20, 2025',
      category: 'Best Practices',
      image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NjI4OTQ3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'The Future of AI in Customer Service',
      excerpt: 'Explore how artificial intelligence is transforming customer support and what it means for your business.',
      author: 'Michael Chen',
      date: 'November 18, 2025',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3klMjBmdXR1cmV8ZW58MXx8fHwxNzYyODk0NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'How to Scale Your Customer Support Operations',
      excerpt: 'Learn the key strategies for scaling your customer support while maintaining quality and efficiency.',
      author: 'Emily Rodriguez',
      date: 'November 15, 2025',
      category: 'Growth',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2Mjg5NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Customer Experience Trends to Watch in 2026',
      excerpt: 'Stay ahead of the curve with these emerging trends that will shape customer experience in the coming year.',
      author: 'David Kim',
      date: 'November 12, 2025',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGV4cGVyaWVuY2UlMjB0cmVuZHN8ZW58MXx8fHwxNzYyODk0NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Building a Customer-Centric Culture in Your Organization',
      excerpt: 'Transform your business with these strategies for creating a culture that puts customers first.',
      author: 'Lisa Thompson',
      date: 'November 10, 2025',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGN1bHR1cmUlMjB0ZWFtfGVufDF8fHx8MTc2Mjg5NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Users,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Measuring Customer Support ROI: A Complete Guide',
      excerpt: 'Learn how to effectively measure and demonstrate the return on investment of your customer support operations.',
      author: 'James Wilson',
      date: 'November 8, 2025',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2klMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyODk0NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500'
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
          <h1 className="text-5xl mb-6">Blog & Insights</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Stay informed with the latest trends, best practices, and insights in customer support and outsourcing.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>
              <div className="lg:w-1/2 p-12 text-white flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm mb-4 bg-white/20 rounded-full px-4 py-1 w-fit">
                  <span>Featured Post</span>
                </div>
                <h2 className="text-4xl mb-4">{blogPosts[0].title}</h2>
                <p className="text-lg opacity-90 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 mb-6 text-sm opacity-80">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <Button className="bg-white text-[#3b9ac9] hover:bg-gray-100 w-fit">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-800 mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => {
              const Icon = post.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-br ${post.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block text-xs bg-gray-100 text-gray-700 rounded-full px-3 py-1 mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl text-gray-800 mb-3 group-hover:text-[#3b9ac9] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-[#3b9ac9] hover:text-[#2d7a9e] p-0">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and get the latest insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b9ac9]"
            />
            <Button className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how Kontivio can help elevate your customer experience
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
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
