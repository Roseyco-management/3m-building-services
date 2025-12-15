"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, Wrench, Heart } from "lucide-react";
import { companyInfo } from "@/data/company";
import Image from "next/image";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every project is completed to the highest standards with attention to detail.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We work closely with you throughout the entire project.",
  },
  {
    icon: Clock,
    title: "On Time Delivery",
    description: "We respect your time and always strive to complete projects on schedule without cutting corners.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete peace of mind with full insurance coverage and all necessary certifications.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description: "Our skilled team brings years of experience to every project, big or small.",
  },
  {
    icon: Heart,
    title: "Honest & Transparent",
    description: "Clear communication, honest quotes, and no hidden costs. What we quote is what you pay.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-construction-gray via-construction-gray-light to-construction-gray pt-32 lg:pt-40 pb-20 text-white">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-3xl">
              <p className="text-construction-orange font-semibold mb-4">ABOUT US</p>
              <Heading level={1} className="text-white mb-6">
                Building Excellence in South West London
              </Heading>
              <p className="text-xl text-gray-300 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* Company Story */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div>
                <Heading level={2} className="mb-6">
                  Our Story
                </Heading>
                <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                  <p>
                    Founded in {companyInfo.established}, {companyInfo.name} was born from a passion for quality craftsmanship and a commitment to excellence in the building industry.
                  </p>
                  <p>
                    Based in {companyInfo.address.city}, we've quickly established ourselves as a trusted name in building and construction services across South West London. Our team brings together years of combined experience in all aspects of building work, from new builds and extensions to renovations and maintenance.
                  </p>
                  <p>
                    What sets us apart is our unwavering commitment to quality and customer satisfaction. We treat every project as if it were our own home, ensuring that every detail is perfect and every deadline is met.
                  </p>
                  <p>
                    Whether you're planning a major extension, need expert decking installation, or require ongoing property maintenance, we have the skills, experience, and dedication to bring your vision to life.
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
                  alt="Construction team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </Container>
      </Section>

      {/* Company Values */}
      <Section variant="blueprint">
        <Container>
          <FadeInWhenVisible className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Our Values
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver exceptional results on every project.
            </p>
          </FadeInWhenVisible>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <value.icon className="h-12 w-12 text-construction-orange mb-4" />
                <h3 className="text-xl font-semibold text-construction-gray mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section>
        <Container>
          <div className="bg-construction-gray rounded-2xl p-12 text-white">
            <FadeInWhenVisible className="text-center mb-12">
              <Heading level={2} className="text-white mb-4">
                Why Choose Us?
              </Heading>
              <p className="text-gray-300 text-lg">
                The numbers speak for themselves
              </p>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <FadeInWhenVisible delay={0.1}>
                <div>
                  <div className="text-5xl font-bold text-construction-orange mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div>
                  <div className="text-5xl font-bold text-construction-orange mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.3}>
                <div>
                  <div className="text-5xl font-bold text-construction-orange mb-2">24h</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <div>
                  <div className="text-5xl font-bold text-construction-orange mb-2">{companyInfo.established}</div>
                  <div className="text-gray-300">Established</div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section className="bg-gray-50">
        <Container>
          <FadeInWhenVisible className="text-center max-w-3xl mx-auto">
            <Heading level={2} className="mb-6">
              Fully Certified & Insured
            </Heading>
            <p className="text-lg text-gray-600 mb-8">
              We are fully insured and hold all necessary certifications to ensure your project is completed safely and to the highest standards. Your peace of mind is important to us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <span className="font-semibold text-construction-gray">Public Liability Insurance</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <span className="font-semibold text-construction-gray">Fully Qualified Tradespeople</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <span className="font-semibold text-construction-gray">Health & Safety Certified</span>
              </div>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-construction-orange text-white">
        <Container>
          <FadeInWhenVisible className="text-center max-w-3xl mx-auto">
            <Heading level={2} className="text-white mb-6">
              Ready to Start Your Project?
            </Heading>
            <p className="text-xl mb-8 text-white/90">
              Get in touch today for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-construction-orange rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="/services"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-construction-orange transition-colors"
              >
                View Our Services
              </a>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>
    </>
  );
}
