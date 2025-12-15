import { cn } from "@/lib/utils";
import { ReactNode, createElement } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

export function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";

  const styles = {
    1: "text-4xl sm:text-5xl lg:text-6xl font-bold text-construction-gray",
    2: "text-3xl sm:text-4xl lg:text-5xl font-bold text-construction-gray",
    3: "text-2xl sm:text-3xl font-semibold text-construction-gray",
    4: "text-xl sm:text-2xl font-semibold text-construction-gray",
  };

  return <Tag className={cn(styles[level], className)}>{children}</Tag>;
}
