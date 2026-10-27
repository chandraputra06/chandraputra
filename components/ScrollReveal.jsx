"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  distance = 28,
  duration = 850,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const handleMotionPreference = () => {
      setReducedMotion(motionPreference.matches);
      if (motionPreference.matches) setIsVisible(true);
    };

    handleMotionPreference();
    motionPreference.addEventListener("change", handleMotionPreference);

    if (motionPreference.matches) {
      return () =>
        motionPreference.removeEventListener("change", handleMotionPreference);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      motionPreference.removeEventListener("change", handleMotionPreference);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${distance}px, 0)`,
        transitionProperty: "opacity, transform",
        transitionDuration: reducedMotion ? "0ms" : `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: reducedMotion ? "0ms" : `${delay}ms`,
        willChange: reducedMotion ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}