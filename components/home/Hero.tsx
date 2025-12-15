"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlueprintBackground } from "@/components/ui/BlueprintBackground";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen flex items-center overflow-hidden -mt-24 lg:-mt-28">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2340&auto=format&fit=crop"
          alt="Construction site"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-construction-gray/95 via-construction-gray/85 to-construction-gray/70" />

        {/* Blueprint overlay */}
        <div className="absolute inset-0 opacity-20">
          <BlueprintBackground opacity={0.3} gridSize={30} />
        </div>
      </motion.div>

      {/* Content */}
      <Container className="relative z-10 pt-24 lg:pt-28">
        <motion.div
          className="max-w-3xl"
          style={{ opacity }}
        >
          {/* Small badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-construction-orange/20 backdrop-blur-sm border border-construction-orange/30 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-2 w-2 rounded-full bg-construction-orange animate-pulse" />
            <span className="text-sm font-medium text-white">
              Established 2024 • London-Based Builders
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Excellence in{" "}
            <span className="relative">
              <span className="relative z-10">London</span>
              <motion.span
                className="absolute bottom-2 left-0 right-0 h-3 bg-construction-orange/40 -z-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional building, construction and maintenance services.
            <br />
            <span className="text-construction-orange font-medium">Quality craftsmanship, delivered.</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="primary" size="lg" href="/contact">
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/gallery"
              className="border-white/30 text-white hover:bg-white hover:text-construction-gray backdrop-blur-sm"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="flex flex-wrap gap-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-construction-orange/20 backdrop-blur-sm border border-construction-orange/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-construction-orange">50+</span>
              </div>
              <div>
                <div className="text-sm text-gray-300">Projects</div>
                <div className="text-xs text-gray-400">Completed</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-construction-orange/20 backdrop-blur-sm border border-construction-orange/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-construction-orange">100%</span>
              </div>
              <div>
                <div className="text-sm text-gray-300">Satisfaction</div>
                <div className="text-xs text-gray-400">Guaranteed</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-construction-orange/20 backdrop-blur-sm border border-construction-orange/30 flex items-center justify-center">
                <span className="text-xl font-bold text-construction-orange">SW20</span>
              </div>
              <div>
                <div className="text-sm text-gray-300">Based in</div>
                <div className="text-xs text-gray-400">South West London</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
