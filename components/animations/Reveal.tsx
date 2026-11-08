"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Reveal({ children, className = "", ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    element.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

type StaggerGroupProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function StaggerGroup({
  children,
  className = "",
  ...props
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = ref.current;
    if (!group || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const items = Array.from(group.children);
    group.classList.add("stagger-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            (item as HTMLElement).style.setProperty(
              "--stagger-index",
              String(Math.min(index, 6)),
            );
            item.classList.add("is-visible");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`stagger-group ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={`stagger-item ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
