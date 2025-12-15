"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ContactFormSection } from "@/components/home/ContactFormSection";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-construction-gray via-construction-gray-light to-construction-gray pt-32 lg:pt-40 pb-20 text-white">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-3xl">
              <p className="text-construction-orange font-semibold mb-4">CONTACT US</p>
              <Heading level={1} className="text-white mb-6">
                Let's Discuss Your Project
              </Heading>
              <p className="text-xl text-gray-300 leading-relaxed">
                Get in touch today for a free, no-obligation quote. We respond to all enquiries within 24 hours.
              </p>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* Quick Contact Info Cards */}
      <Section className="bg-white -mt-10 relative z-10">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <FadeInWhenVisible delay={0.1}>
              <a
                href={`tel:${companyInfo.phone}`}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-construction-orange transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-lg bg-construction-orange/10 flex items-center justify-center group-hover:bg-construction-orange/20 transition-colors">
                    <Phone className="h-7 w-7 text-construction-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-construction-gray mb-1">Call Us</h3>
                    <p className="text-construction-orange font-semibold">
                      {companyInfo.phone}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri 8am-6pm</p>
                  </div>
                </div>
              </a>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <a
                href={`mailto:${companyInfo.email}`}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-construction-orange transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-lg bg-construction-orange/10 flex items-center justify-center group-hover:bg-construction-orange/20 transition-colors">
                    <Mail className="h-7 w-7 text-construction-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-construction-gray mb-1">Email Us</h3>
                    <p className="text-construction-orange font-semibold break-all">
                      {companyInfo.email}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">24h response time</p>
                  </div>
                </div>
              </a>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-lg bg-construction-orange/10 flex items-center justify-center">
                    <MapPin className="h-7 w-7 text-construction-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-construction-gray mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm">
                      {companyInfo.address.street}
                      <br />
                      {companyInfo.address.city}
                      <br />
                      {companyInfo.address.postcode}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Service Area */}
      <Section className="bg-gray-50">
        <Container>
          <FadeInWhenVisible className="text-center max-w-3xl mx-auto">
            <Heading level={2} className="mb-6">
              Our Service Area
            </Heading>
            <p className="text-lg text-gray-600 mb-8">
              We proudly serve South West London and surrounding areas. Based in {companyInfo.address.postcode}, we provide prompt, professional service across the region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "SW20",
                "SW19",
                "SW18",
                "SW17",
                "SW16",
                "SW15",
                "KT3",
                "KT4",
                "CR4",
                "CR0",
                "And surrounding areas",
              ].map((area) => (
                <div
                  key={area}
                  className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <span className="font-semibold text-construction-gray">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Outside our standard service area? Contact us - we may still be able to help!
            </p>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <FadeInWhenVisible className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Frequently Asked Questions
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </FadeInWhenVisible>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: "Do you offer free quotes?",
                a: "Yes! We provide free, no-obligation quotes for all projects. Simply fill out our contact form or give us a call.",
              },
              {
                q: "How quickly can you start?",
                a: "It depends on our current schedule and your project requirements. For urgent work, we can often start within 1-2 weeks. We'll discuss timelines during your consultation.",
              },
              {
                q: "Are you fully insured?",
                a: "Absolutely. We carry full public liability insurance and all our tradespeople are qualified and certified.",
              },
              {
                q: "Do you handle planning permissions?",
                a: "Yes, we can assist with planning permissions and building regulations. We'll guide you through the entire process.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, cheques, and card payments. Payment terms will be outlined in your quote.",
              },
              {
                q: "Do you offer guarantees?",
                a: "Yes, all our work comes with a comprehensive guarantee. Specific terms will be detailed in your contract.",
              },
            ].map((faq, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-construction-gray mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </Container>
      </Section>

      {/* Business Hours */}
      <Section className="bg-construction-gray text-white">
        <Container>
          <FadeInWhenVisible className="text-center max-w-2xl mx-auto">
            <Clock className="h-12 w-12 text-construction-orange mx-auto mb-6" />
            <Heading level={2} className="text-white mb-6">
              Business Hours
            </Heading>
            <div className="space-y-3 text-lg">
              <div className="flex justify-between max-w-md mx-auto">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="font-semibold">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between max-w-md mx-auto">
                <span className="text-gray-300">Saturday</span>
                <span className="font-semibold">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between max-w-md mx-auto">
                <span className="text-gray-300">Sunday</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
            <p className="text-gray-400 mt-6">
              Emergency services available 24/7 for existing clients
            </p>
          </FadeInWhenVisible>
        </Container>
      </Section>
    </>
  );
}
