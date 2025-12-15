"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { services } from "@/data/services";
import { Building, Fence, Paintbrush, Trees, Wrench, Home, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = {
  building: Building,
  fence: Fence,
  paintbrush: Paintbrush,
  trees: Trees,
  wrench: Wrench,
  home: Home,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-construction-gray via-construction-gray-light to-construction-gray pt-32 lg:pt-40 pb-20 text-white">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-3xl">
              <p className="text-construction-orange font-semibold mb-4">OUR SERVICES</p>
              <Heading level={1} className="text-white mb-6">
                Quality Building Services Across London
              </Heading>
              <p className="text-xl text-gray-300 leading-relaxed">
                From new builds to renovations, decking to landscaping - we deliver exceptional craftsmanship on every project, big or small.
              </p>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
          <StaggerChildren className="space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Building;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? "" : "lg:order-2"}`}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          index % 2 === 0 ? "1541888946425" : "1504307651254"
                        }-d81bb19240f5?q=80&w=2000`}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "" : "lg:order-1"}`}>
                    <Icon className="h-16 w-16 text-construction-orange mb-6" />
                    <h2 className="text-3xl font-bold text-construction-gray mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {service.features && (
                      <div className="space-y-3 mb-6">
                        <h3 className="font-semibold text-construction-gray">
                          What we offer:
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-construction-orange mt-1">✓</span>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <a
                      href="/contact"
                      className="inline-block px-6 py-3 bg-construction-orange text-white rounded-lg font-semibold hover:bg-construction-orange-light transition-colors"
                    >
                      Get a Quote
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </StaggerChildren>
        </Container>
      </Section>

      {/* Process Section */}
      <Section variant="blueprint">
        <Container>
          <FadeInWhenVisible className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Our Process
            </Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project runs smoothly from start to finish.
            </p>
          </FadeInWhenVisible>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your vision, requirements, and budget to understand exactly what you need.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed planning and design work with transparent quotes and timelines.",
              },
              {
                step: "03",
                title: "Execution",
                description: "Our skilled team brings your project to life with precision and care.",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspection, cleanup, and handover. Your satisfaction guaranteed.",
              },
            ].map((item, index) => (
              <FadeInWhenVisible key={item.step} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-5xl font-bold text-construction-orange/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-construction-gray mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <Container>
          <div className="bg-construction-gray rounded-2xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInWhenVisible>
                <div>
                  <Heading level={2} className="text-white mb-6">
                    Why Choose 3M Building Services?
                  </Heading>
                  <ul className="space-y-4">
                    {[
                      "Free, no-obligation quotes",
                      "Fully insured and certified tradespeople",
                      "Transparent pricing with no hidden costs",
                      "Quality materials and expert craftsmanship",
                      "On-time project completion",
                      "Comprehensive cleanup after every job",
                      "Ongoing support and maintenance",
                      "100% satisfaction guarantee",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-construction-orange mt-1">✓</span>
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-construction-orange mb-2">
                      50+
                    </div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-construction-orange mb-2">
                      100%
                    </div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-construction-orange mb-2">
                      24h
                    </div>
                    <div className="text-gray-300">Response Time</div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-construction-orange text-white">
        <Container>
          <FadeInWhenVisible className="text-center max-w-3xl mx-auto">
            <Heading level={2} className="text-white mb-6">
              Ready to Get Started?
            </Heading>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-construction-orange rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="/gallery"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-construction-orange transition-colors"
              >
                View Our Work
              </a>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>
    </>
  );
}
