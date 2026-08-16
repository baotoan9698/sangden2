"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = [
      ".statement > *",
      ".bottleneck-list article",
      ".bottleneck-photo",
      ".closing-statement > *",
      ".open-window-intro > *",
      ".open-window-grid article",
      ".open-window-closing",
      ".solution-head > *",
      ".solution-list article",
      ".solution-card",
      ".journey-head > *",
      ".journey-steps details",
      ".journey-photo",
      ".sectors-title > *",
      ".sector-cards article",
      ".register > *",
      "footer > *",
    ];

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selectors.join(",")),
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.dataset.revealDirection = index % 2 === 0 ? "left" : "right";
      element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
