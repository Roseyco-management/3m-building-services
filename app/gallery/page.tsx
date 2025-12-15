"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-construction-gray via-construction-gray-light to-construction-gray pt-32 lg:pt-40 pb-20 text-white">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-3xl">
              <p className="text-construction-orange font-semibold mb-4">OUR WORK</p>
              <Heading level={1} className="text-white mb-6">
                Portfolio of Completed Projects
              </Heading>
              <p className="text-xl text-gray-300 leading-relaxed">
                Browse through our collection of completed projects showcasing quality craftsmanship across South West London.
              </p>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* Gallery */}
      <Section>
        <Container>
          {/* Filter Buttons */}
          <FadeInWhenVisible className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {galleryCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.value
                      ? "bg-construction-orange text-white shadow-md"
                      : "bg-white text-construction-gray hover:bg-gray-100 shadow-sm"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </FadeInWhenVisible>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <FadeInWhenVisible className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </FadeInWhenVisible>
          )}
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-construction-orange transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <Section className="bg-construction-orange text-white">
        <Container>
          <FadeInWhenVisible className="text-center max-w-3xl mx-auto">
            <Heading level={2} className="text-white mb-6">
              Like What You See?
            </Heading>
            <p className="text-xl mb-8 text-white/90">
              Let's make your project the next success story.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-construction-orange rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </a>
          </FadeInWhenVisible>
        </Container>
      </Section>
    </>
  );
}
