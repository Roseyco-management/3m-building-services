"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { featuredServices } from "@/data/services";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import {
  Building,
  Fence,
  Paintbrush,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  building: Building,
  fence: Fence,
  paintbrush: Paintbrush,
};

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <FadeInWhenVisible className="text-center mb-12">
          <Heading level={2} className="mb-4">
            Our Services
          </Heading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From new builds to renovations, we deliver quality craftsmanship
            across all building services.
          </p>
        </FadeInWhenVisible>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] || Building;

            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Card className="h-full flex flex-col">
                  <Icon className="h-12 w-12 text-construction-orange mb-4" />
                  <h3 className="text-xl font-semibold text-construction-gray mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  {service.features && (
                    <ul className="text-sm text-gray-500 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-construction-orange mt-1">
                            •
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>

        <FadeInWhenVisible className="text-center">
          <Button variant="outline" size="lg" href="/services">
            View All Services
          </Button>
        </FadeInWhenVisible>
      </Container>
    </Section>
  );
}
