"use client";

import { motion } from "framer-motion";
import { gridPulse } from "@/lib/animations";

interface BlueprintBackgroundProps {
  opacity?: number;
  gridSize?: number;
}

export function BlueprintBackground({
  opacity = 0.1,
  gridSize = 20,
}: BlueprintBackgroundProps) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      variants={gridPulse}
      initial="initial"
      animate="animate"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(74, 144, 226, ${opacity}) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(74, 144, 226, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
      }}
    />
  );
}
