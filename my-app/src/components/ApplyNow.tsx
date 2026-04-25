import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  ArrowRight, 
  Upload, 
  CheckCircle, 
  FileText,
  User,
  Mail,
  Briefcase,
  Globe
} from 'lucide-react';

interface ApplyNowProps {
  selectedPosition?: string;
}

export function ApplyNow({ selectedPosition = '' }: ApplyNowProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: selectedPosition,
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    yearsOfExperience: '',
    availability: '',
    expectedSalary: '',
    howHeard: ''
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const positions = [
    "Customer Support Specialist",
    "Senior Customer Support Agent",
    "Technical Support Engineer",
    "Team Leader - Customer Support",
    "Quality Assurance Specialist",
    "Business Development Representative",
    "Other Position"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData, resumeFile);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center px-6 py-16">
        <Card className="max-w-2xl w-full p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl mb-4">Application Submitted Successfully!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for applying to Kontivio. We've received your application and our recruitment team will review it carefully.
          </p>
          <div className="bg-blue-50 border-l-4 border-[#3b9ac9] p-6 mb-8 text-left">
            <h3 className="mb-2">What Happens Next?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#3b9ac9] mt-0.5 flex-shrink-0" />
                <span>Our HR team will review your application within 3-5 business days</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#3b9ac9] mt-0.5 flex-shrink-0" />
                <span>If selected, you'll receive an email to schedule an initial screening call</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#3b9ac9] mt-0.5 flex-shrink-0" />
                <span>Check your email regularly for updates on your application status</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              In the meantime, feel free to explore more about Kontivio and our culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#3b9ac9] hover:bg-[#2d7a9e]"
                onClick={() => window.location.reload()}
              >
                Submit Another Application
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.history.back()}
              >
                Back to Careers
              </Button>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Questions? Email us at <a href="mailto:careers@kontivio.com" className="text-[#3b9ac9] hover:underline">careers@kontivio.com</a>
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3b9ac9] to-[#2d7a9e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
            ✨ Start Your Journey with Kontivio
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4">Apply for a Position</h1>
          <p className="text-xl text-blue-100">
            Take the first step towards an exciting career in customer support excellence
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl mb-2">Application Form</h2>
              <p className="text-gray-600">
                Please fill out all required fields. Fields marked with * are mandatory.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#3b9ac9]" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
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
                      placeholder="john.doe@email.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Position Information */}
              <div>
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#3b9ac9]" />
                  Position Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="position">Position Applying For *</Label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b9ac9]"
                    >
                      <option value="">Select a position</option>
                      {positions.map((pos) => (
                        <option key={pos} value={pos}>{pos}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
                    <select
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      required
                      value={formData.yearsOfExperience}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b9ac9]"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="availability">When can you start? *</Label>
                    <Input
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleInputChange}
                      placeholder="e.g., Immediately, 2 weeks notice"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedSalary">Expected Salary (Annual)</Label>
                    <Input
                      id="expectedSalary"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      placeholder="e.g., $50,000 - $60,000"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Online Presence */}
              <div>
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#3b9ac9]" />
                  Online Presence
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <Input
                      id="linkedIn"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio/Website</Label>
                    <Input
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://yourportfolio.com"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#3b9ac9]" />
                  Resume/CV
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#3b9ac9] transition-colors">
                  <input
                    data-testid="resume-upload"
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label
                    htmlFor="resume"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Upload className="w-8 h-8 text-[#3b9ac9]" />
                    </div>
                    <h4 className="mb-2">Upload Your Resume/CV *</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      PDF, DOC, or DOCX (Max 5MB)
                    </p>
                    {resumeFile ? (
                      <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded">
                        <CheckCircle className="w-5 h-5" />
                        <span>{resumeFile.name}</span>
                      </div>
                    ) : (
                      <Button type="button" variant="outline">
                        Choose File
                      </Button>
                    )}
                  </label>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#3b9ac9]" />
                  Cover Letter
                </h3>
                <div>
                  <Label htmlFor="coverLetter">
                    Tell us why you're interested in this position *
                  </Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    required
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Share your motivation, relevant experience, and what makes you a great fit for this role..."
                    className="mt-2 min-h-[200px]"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Minimum 100 characters
                  </p>
                </div>
              </div>

              {/* Additional Question */}
              <div>
                <Label htmlFor="howHeard">How did you hear about this position?</Label>
                <select
                  id="howHeard"
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b9ac9]"
                >
                  <option value="">Select an option</option>
                  <option value="website">Kontivio Website</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="job-board">Job Board</option>
                  <option value="referral">Employee Referral</option>
                  <option value="social-media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Consent */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I consent to the processing of my personal data by Kontivio for recruitment purposes. 
                    I understand that my information will be stored securely and used only for evaluating 
                    my application. *
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-[#3b9ac9] hover:bg-[#2d7a9e]"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center text-gray-600">
            <p>Need help with your application?</p>
            <p className="mt-2">
              Contact our HR team at{' '}
              <a href="mailto:careers@kontivio.com" className="text-[#3b9ac9] hover:underline">
                careers@kontivio.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
