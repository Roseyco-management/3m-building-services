import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "building-construction",
    title: "Building & Construction",
    description: "Professional building services for residential and commercial properties. From new builds to major renovations, we deliver quality craftsmanship.",
    icon: "building",
    features: [
      "New builds and extensions",
      "Structural alterations",
      "Commercial projects",
      "Project management"
    ]
  },
  {
    id: "decking-outdoor",
    title: "Decking & Outdoor Structures",
    description: "Transform your outdoor space with beautifully crafted decking, pergolas, and garden structures built to last.",
    icon: "fence",
    features: [
      "Custom decking installations",
      "Pergolas and gazebos",
      "Outdoor entertaining areas",
      "Weather-resistant materials"
    ]
  },
  {
    id: "renovations",
    title: "Renovations & Refurbishment",
    description: "Breathe new life into your property with our comprehensive renovation services. We handle everything from concept to completion.",
    icon: "paintbrush",
    features: [
      "Kitchen and bathroom renovations",
      "Full property refurbishment",
      "Period property restoration",
      "Modern upgrades"
    ]
  },
  {
    id: "landscaping",
    title: "Garden & Landscaping",
    description: "Create your dream outdoor space with our expert landscaping services. Beautiful, functional gardens designed and built to perfection.",
    icon: "trees",
    features: [
      "Garden design and planning",
      "Lawn installation",
      "Paving and pathways",
      "Outdoor lighting"
    ]
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    description: "Keep your property in perfect condition with our reliable maintenance services. Regular upkeep and emergency repairs handled professionally.",
    icon: "wrench",
    features: [
      "Preventative maintenance",
      "Emergency repairs",
      "General property care",
      "Seasonal maintenance"
    ]
  },
  {
    id: "extensions",
    title: "Extensions & Conversions",
    description: "Maximize your living space with expertly designed and built extensions. Loft conversions, side returns, and more.",
    icon: "home",
    features: [
      "Single and double story extensions",
      "Loft conversions",
      "Garage conversions",
      "Side and rear extensions"
    ]
  }
];

// Featured services for homepage
export const featuredServices = services.slice(0, 3);
