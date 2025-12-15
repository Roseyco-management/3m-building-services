"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInWhenVisible({
  children,
  delay = 0,
  className,
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        ...fadeInUp,
        visible: {
          ...fadeInUp.visible,
          transition: { ...fadeInUp.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
