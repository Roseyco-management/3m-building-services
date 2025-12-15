"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { companyInfo } from "@/data/company";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    postcode: "",
    message: "",
    hearAboutUs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      console.log("Form submitted:", formData);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          timeline: "",
          postcode: "",
          message: "",
          hearAboutUs: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Info */}
          <FadeInWhenVisible>
            <div className="lg:sticky lg:top-32">
              <Heading level={2} className="mb-6">
                Get Your Free Quote
              </Heading>
              <p className="text-lg text-gray-600 mb-8">
                Tell us about your project and we'll get back to you within 24 hours with a detailed quote.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-12 w-12 rounded-lg bg-construction-orange/10 flex items-center justify-center group-hover:bg-construction-orange/20 transition-colors">
                    <Phone className="h-6 w-6 text-construction-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Call us</div>
                    <div className="font-semibold text-construction-gray">
                      {companyInfo.phone}
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-12 w-12 rounded-lg bg-construction-orange/10 flex items-center justify-center group-hover:bg-construction-orange/20 transition-colors">
                    <Mail className="h-6 w-6 text-construction-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email us</div>
                    <div className="font-semibold text-construction-gray">
                      {companyInfo.email}
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-12 w-12 rounded-lg bg-construction-orange/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-construction-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Visit us</div>
                    <div className="font-semibold text-construction-gray">
                      {companyInfo.address.street}
                      <br />
                      {companyInfo.address.city}, {companyInfo.address.postcode}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Trust indicators */}
              <div className="p-6 bg-white rounded-lg border-2 border-construction-orange/20">
                <h3 className="font-semibold text-construction-gray mb-4">
                  Why Choose 3M Building Services?
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-construction-orange mt-1">✓</span>
                    <span>Free, no-obligation quotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-construction-orange mt-1">✓</span>
                    <span>Fully insured and certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-construction-orange mt-1">✓</span>
                    <span>24-hour response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-construction-orange mt-1">✓</span>
                    <span>Quality craftsmanship guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Right side - Form */}
          <FadeInWhenVisible delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone & Postcode Row */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all"
                    placeholder="020 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all"
                    placeholder="SW20 9ET"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-4">
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a project type...</option>
                  <option value="new-build">New Build</option>
                  <option value="extension">Extension</option>
                  <option value="renovation">Renovation</option>
                  <option value="decking">Decking & Outdoor Structures</option>
                  <option value="landscaping">Garden & Landscaping</option>
                  <option value="maintenance">Property Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget Range */}
              <div className="mb-4">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all bg-white"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-5k">Under £5,000</option>
                  <option value="5k-10k">£5,000 - £10,000</option>
                  <option value="10k-25k">£10,000 - £25,000</option>
                  <option value="25k-50k">£25,000 - £50,000</option>
                  <option value="50k-100k">£50,000 - £100,000</option>
                  <option value="over-100k">Over £100,000</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="mb-4">
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all bg-white"
                >
                  <option value="">When do you want to start?</option>
                  <option value="urgent">ASAP (Within 2 weeks)</option>
                  <option value="soon">Soon (1-3 months)</option>
                  <option value="planning">Planning Stage (3-6 months)</option>
                  <option value="future">Future Project (6+ months)</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project... What are you looking to achieve?"
                />
              </div>

              {/* How did you hear about us */}
              <div className="mb-6">
                <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="hearAboutUs"
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-construction-orange focus:ring-2 focus:ring-construction-orange/20 outline-none transition-all bg-white"
                >
                  <option value="">Select an option...</option>
                  <option value="google">Google Search</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="referral">Friend/Family Referral</option>
                  <option value="previous-customer">Previous Customer</option>
                  <option value="local">Local Advertising</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  submitStatus === "success"
                    ? "bg-green-500"
                    : "bg-construction-orange hover:bg-construction-orange-light"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                whileHover={{ scale: submitStatus === "success" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    ✓ Quote Request Sent!
                  </>
                ) : (
                  <>
                    Get Your Free Quote
                    <Send className="h-5 w-5" />
                  </>
                )}
              </motion.button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 mt-4 text-sm"
                >
                  Thank you! We'll be in touch within 24 hours.
                </motion.p>
              )}

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy and will never share your information.
              </p>
            </motion.form>
          </FadeInWhenVisible>
        </div>
      </Container>
    </Section>
  );
}
