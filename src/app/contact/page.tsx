"use client";

import Header from '@/components/valdio/Header';
import Footer from '@/components/valdio/Footer';
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    address: '',
    homeAge: '',
    description: '',
    contactPreference: 'phone'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[hsl(210,51%,25%)] text-white py-20">
          <div className="container-valdio text-center">
            <h1 className="text-white mb-6">Get Your Free Estimate</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to transform your home? Fill out the form below or give us a call to discuss your project.
            </p>
          </div>
        </section>

        {/* Contact Methods & Form Section */}
        <section className="section-padding bg-white">
          <div className="container-valdio">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-[hsl(0,0%,96%)] p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[hsl(210,51%,25%)] mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(212,65%,90%)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[hsl(210,51%,25%)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[hsl(210,51%,25%)]">Phone</p>
                        <a href="tel:6474464233" className="text-[hsl(38,91%,55%)] hover:underline">
                          (647) 446-4233
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(212,65%,90%)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[hsl(210,51%,25%)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[hsl(210,51%,25%)]">Email</p>
                        <a href="mailto:valdiorenovations@outlook.com" className="text-[hsl(38,91%,55%)] hover:underline break-all">
                          valdiorenovations@outlook.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(212,65%,90%)] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[hsl(210,51%,25%)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[hsl(210,51%,25%)]">Service Area</p>
                        <p className="text-gray-600">Greater Toronto Area</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, and surrounding areas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(212,65%,90%)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[hsl(210,51%,25%)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[hsl(210,51%,25%)]">Business Hours</p>
                        <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[hsl(210,51%,25%)] p-6 rounded-xl text-white">
                  <h4 className="font-bold text-lg mb-3">Why Choose Valdio?</h4>
                  <ul className="space-y-2 text-white/90">
                    <li>✓ 30+ years of experience</li>
                    <li>✓ Licensed and insured</li>
                    <li>✓ Quality workmanship guarantee</li>
                    <li>✓ Transparent pricing</li>
                    <li>✓ On-time project completion</li>
                  </ul>
                </div>
              </div>

              {/* Estimate Request Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
                  <h2 className="text-2xl font-bold text-[hsl(210,51%,25%)] mb-6">Request a Free Estimate</h2>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                      <p className="font-semibold">Thank you for your request!</p>
                      <p className="text-sm mt-1">We'll contact you within 24 hours to discuss your project.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent"
                          placeholder="(647) 555-0123"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent"
                        placeholder="john.smith@email.com"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block font-semibold text-gray-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">Select a project type</option>
                          <option value="kitchen">Kitchen Renovation</option>
                          <option value="bathroom">Bathroom Renovation</option>
                          <option value="flooring">Flooring Installation</option>
                          <option value="painting">Interior Painting</option>
                          <option value="full">Full Home Renovation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block font-semibold text-gray-700 mb-2">
                          Budget Range *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">Select your budget</option>
                          <option value="under10k">Under $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="over100k">$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block font-semibold text-gray-700 mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6+months">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    {/* Property Details */}
                    <div>
                      <label htmlFor="address" className="block font-semibold text-gray-700 mb-2">
                        Property Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent"
                        placeholder="123 Main St, Toronto, ON"
                      />
                    </div>

                    <div>
                      <label htmlFor="homeAge" className="block font-semibold text-gray-700 mb-2">
                        Approximate Home Age
                      </label>
                      <input
                        type="text"
                        id="homeAge"
                        name="homeAge"
                        value={formData.homeAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent"
                        placeholder="e.g., 10 years, 1980s, New construction"
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block font-semibold text-gray-700 mb-2">
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(210,51%,25%)] focus:border-transparent resize-y"
                        placeholder="Tell us about your project, current condition, and what you'd like to achieve..."
                      />
                    </div>

                    {/* Contact Preference */}
                    <div>
                      <label className="block font-semibold text-gray-700 mb-3">
                        Preferred Contact Method *
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactPreference"
                            value="phone"
                            checked={formData.contactPreference === 'phone'}
                            onChange={handleChange}
                            className="w-4 h-4 text-[hsl(210,51%,25%)] focus:ring-[hsl(210,51%,25%)]"
                          />
                          <span>Phone</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactPreference"
                            value="email"
                            checked={formData.contactPreference === 'email'}
                            onChange={handleChange}
                            className="w-4 h-4 text-[hsl(210,51%,25%)] focus:ring-[hsl(210,51%,25%)]"
                          />
                          <span>Email</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactPreference"
                            value="text"
                            checked={formData.contactPreference === 'text'}
                            onChange={handleChange}
                            className="w-4 h-4 text-[hsl(210,51%,25%)] focus:ring-[hsl(210,51%,25%)]"
                          />
                          <span>Text Message</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[hsl(38,91%,55%)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 transition-all shadow-gold"
                    >
                      Submit Request
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields. We'll respond within 24 hours.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-[hsl(0,0%,96%)]">
          <div className="container-valdio max-w-4xl">
            <h2 className="text-center text-[hsl(210,51%,25%)] mb-12">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-[hsl(210,51%,25%)] mb-2">How long does a typical renovation take?</h3>
                <p className="text-gray-700">
                  Timeline varies by project scope. Kitchen renovations typically take 3-4 weeks, bathrooms 2-3 weeks, and flooring 3-7 days. We provide detailed timelines during the estimate.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-[hsl(210,51%,25%)] mb-2">Do you provide warranties on your work?</h3>
                <p className="text-gray-700">
                  Yes! All our work is backed by warranties. Workmanship is covered for 1 year, and materials carry manufacturer warranties. We stand behind every project.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-[hsl(210,51%,25%)] mb-2">Are estimates really free?</h3>
                <p className="text-gray-700">
                  Absolutely! We provide free, no-obligation estimates. We'll visit your property, discuss your vision, and provide a detailed quote with no hidden fees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-[hsl(210,51%,25%)] mb-2">What areas do you serve?</h3>
                <p className="text-gray-700">
                  We serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, and surrounding communities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-[hsl(210,51%,25%)] mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept cash, checks, e-transfers, and all major credit cards. Payment schedules are discussed during the estimate and typically involve deposits and progress payments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
