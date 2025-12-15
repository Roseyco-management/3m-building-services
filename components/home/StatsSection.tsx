"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { stats } from "@/data/stats";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  LucideIcon,
} from "lucide-react";
import { staggerItem } from "@/lib/animations";
import { StaggerChildren } from "@/components/animations/StaggerChildren";

const iconMap: Record<string, LucideIcon> = {
  "check-circle": CheckCircle,
  star: Star,
  "map-pin": MapPin,
  calendar: Calendar,
};

export function StatsSection() {
  return (
    <Section variant="blueprint">
      <Container>
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon ? iconMap[stat.icon] : null;

            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center"
              >
                {Icon && (
                  <Icon className="h-12 w-12 mx-auto mb-4 text-construction-orange" />
                )}
                <div className="text-4xl sm:text-5xl font-bold text-construction-gray mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
