import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Linkedin,
  Facebook,
  Twitter,
  Building
} from 'lucide-react';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center px-6 py-16">
        <Card className="max-w-2xl w-full p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl mb-4">Message Sent Successfully!</h1>
          <p className="text-xl text-gray-600 mb-6">
            Thank you for contacting Kontivio. We've received your message and our team will get back to you within 24 hours.
          </p>
          <div className="bg-blue-50 border-l-4 border-[#3b9ac9] p-6 mb-8 text-left">
            <h3 className="mb-2">What's Next?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#3b9ac9] mt-0.5 flex-shrink-0" />
                <span>Our team will review your inquiry and assign it to the right specialist</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#3b9ac9] mt-0.5 flex-shrink-0" />
                <span>You'll receive a response via email within one business day</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#3b9ac9] mt-0.5 flex-shrink-0" />
                <span>For urgent matters, please call us directly at +20 123 456 7890</span>
              </li>
            </ul>
          </div>
          <Button 
            className="bg-[#3b9ac9] hover:bg-[#2d7a9e]"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            💬 We're Here to Help
          </div>
          <h1 className="text-5xl lg:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-4">
            Get in touch with our team to discuss how we can help your business grow
          </p>
          <p className="text-lg text-blue-100">
            Whether you have questions, need a quote, or want to partner with us, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 -mt-32 mb-16">
            <Card className="p-8 text-center shadow-xl bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Monday - Friday, 8am - 6pm EET</p>
              <a href="tel:+201234567890" className="text-[#3b9ac9] hover:underline">
                +20 123 456 7890
              </a>
              <p className="text-gray-500 text-sm mt-2">Egypt local</p>
            </Card>

            <Card className="p-8 text-center shadow-xl bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3b9ac9] to-[#2d7a9e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
              <a href="mailto:info@kontivio.com" className="text-[#3b9ac9] hover:underline">
                info@kontivio.com
              </a>
              <p className="text-gray-500 text-sm mt-2">General inquiries</p>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b9ac9]"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="pricing">Pricing & Quotes</option>
                      <option value="services">Service Information</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#3b9ac9] hover:bg-[#2d7a9e]"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Location & Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-4">Our Location</h2>
                <p className="text-gray-600 mb-8">
                  Based in Cairo, Egypt, we serve clients globally with excellence.
                </p>

                <div className="space-y-6">
                  {/* Headquarters */}
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-[#3b9ac9]" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-1">Headquarters</h3>
                        <div className="flex items-start gap-2 text-gray-600 mb-2">
                          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <div>
                            <p>Cairo, Egypt</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>+20 123 456 7890</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Business Hours */}
              <Card className="p-6">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#3b9ac9]" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM EET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM EET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-4 border-t mt-4">
                    <p className="text-sm text-gray-600">
                      <strong>24/7 Support Available</strong> for existing clients with active contracts
                    </p>
                  </div>
                </div>
              </Card>

              {/* Department Contacts */}
              <Card className="p-6">
                <h3 className="text-xl mb-4">Department Contacts</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#3b9ac9] mt-0.5" />
                    <div>
                      <p className="text-gray-900">Sales Inquiries</p>
                      <a href="mailto:sales@kontivio.com" className="text-[#3b9ac9] hover:underline text-sm">
                        sales@kontivio.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#3b9ac9] mt-0.5" />
                    <div>
                      <p className="text-gray-900">Customer Support</p>
                      <a href="mailto:support@kontivio.com" className="text-[#3b9ac9] hover:underline text-sm">
                        support@kontivio.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#3b9ac9] mt-0.5" />
                    <div>
                      <p className="text-gray-900">Careers & HR</p>
                      <a href="mailto:careers@kontivio.com" className="text-[#3b9ac9] hover:underline text-sm">
                        careers@kontivio.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#3b9ac9] mt-0.5" />
                    <div>
                      <p className="text-gray-900">Partnerships</p>
                      <a href="mailto:partners@kontivio.com" className="text-[#3b9ac9] hover:underline text-sm">
                        partners@kontivio.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl mb-4">Connect With Us</h3>
                <p className="text-gray-600 mb-4">
                  Follow us on social media for updates, news, and industry insights.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/company/kontivio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#0077b5] rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/kontivio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1DA1F2] rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/kontivio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#4267B2] rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Find Us on the Map</h2>
            <p className="text-gray-600">
              Our headquarters is located in Cairo, Egypt
            </p>
          </div>
          <Card className="p-4 bg-gray-100 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">
                Cairo, Egypt
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}