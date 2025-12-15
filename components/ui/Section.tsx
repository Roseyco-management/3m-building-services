import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "blueprint";
}

export function Section({ children, className, variant = "default" }: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        variant === "blueprint" && "bg-blueprint-50/30",
        className
      )}
    >
      {children}
    </section>
  );
}
