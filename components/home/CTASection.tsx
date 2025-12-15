"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { BlueprintBackground } from "@/components/ui/BlueprintBackground";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";

export function CTASection() {
  return (
    <Section className="bg-construction-gray text-white">
      <BlueprintBackground opacity={0.05} />
      <Container className="relative z-10">
        <FadeInWhenVisible className="text-center max-w-3xl mx-auto">
          <Heading level={2} className="text-white mb-6">
            Ready to Start Your Project?
          </Heading>
          <p className="text-lg text-gray-300 mb-8">
            Get in touch today for a free consultation and quote. We're here to
            help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">
              Contact Us Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/services"
              className="border-white text-white hover:bg-white hover:text-construction-gray"
            >
              View Services
            </Button>
          </div>
        </FadeInWhenVisible>
      </Container>
    </Section>
  );
}
