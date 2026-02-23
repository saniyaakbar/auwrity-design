"use client";

import { ChevronDown } from "lucide-react";

const ACCORDION_SECTIONS = [
  {
    title: "Description",
    content:
      "Designed for intensive clinical schedules, this silhouette balances structure and flexibility with a smooth drape that keeps you polished from rounds to handoff.",
  },
  {
    title: "Functional Design",
    content:
      "Features practical pocket placement, reinforced seams, and movement-friendly construction to support constant motion in high-demand care environments.",
  },
  {
    title: "Fabric & Care",
    content:
      "Performance blend with mechanical stretch and easy-care durability. Machine wash cold with like colors and tumble dry low for best long-term shape retention.",
  },
  {
    title: "Shipping & Returns",
    content:
      "Ships within 24–48 hours. Complimentary standard delivery and 7-day easy returns for unworn items with original tags.",
  },
];

export function ProductAccordions() {
  return (
    <div>
      {ACCORDION_SECTIONS.map((section, index) => (
        <details key={section.title} className="group border-b border-gray-200 py-6" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between transition-all duration-300 marker:content-none">
            <span className="text-base font-medium tracking-wide text-zinc-800">
              {section.title}
            </span>
            <ChevronDown className="h-4 w-4 opacity-60 transition-transform duration-300 group-open:rotate-180" />
          </summary>

          <div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="max-w-prose pt-4 text-sm leading-relaxed text-gray-600">
                {section.content}
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
