"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedWrapper({
  children,
  delay = 0,
  className = "",
  direction = "y",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "x" | "y";
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const transformStart =
    direction === "x" ? "translateX(-20px)" : "translateY(20px)";
  const transformEnd = direction === "x" ? "translateX(0)" : "translateY(0)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? transformEnd : transformStart,
        transition:
          "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
