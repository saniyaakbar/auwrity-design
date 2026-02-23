import { Product } from "@/types/product";

export const mockProduct: Product = {
  id: "heritage-cashmere-crew",
  brand: "Maison Aurelia",
  title: "Heritage Cashmere Crew Sweater",
  discountedPrice: 189,
  originalPrice: 249,
  currencyCode: "USD",
  description:
    "An elevated everyday knit crafted from an ultra-soft cashmere blend. Designed with a modern relaxed fit and refined ribbing for effortless layering through every season.",
  images: [
    "/img1.webp",
    "/img2.webp",
    "/img3.webp",
    "/img4.webp",
    "/img5.webp",
    "/img6.webp",
  ] as unknown as Product["images"],
  colors: [
    { id: "stone", name: "Stone", hex: "#d4ccc3" },
    { id: "charcoal", name: "Charcoal", hex: "#4a4a4a" },
    { id: "olive", name: "Olive", hex: "#6f7360" },
    { id: "navy", name: "Navy", hex: "#2f3a50" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  personalization: {
    title: "Personalize your piece",
    description:
      "Add custom initials in tonal thread for a subtle, signature finish.",
    actionLabel: "Add embroidery",
  },
};
