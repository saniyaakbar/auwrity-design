"use client";

import { useRef } from "react";
import Image from "next/image";

const RECOMMENDED_PRODUCTS = [
  {
    id: "pulse-jogger",
    name: "Pulse Tapered Jogger",
    description: "Lightweight clinical joggers engineered for mobility and all-day comfort.",
    rating: "★★★★★",
    reviewCount: 124,
    price: "$84",
    image: "/img1.webp",
    alt: "Pulse tapered jogger in premium performance fabric",
  },
  {
    id: "aurelia-jacket",
    name: "Aurelia Layer Jacket",
    description: "Streamlined outer layer designed for polished transitions across every shift.",
    rating: "★★★★★",
    reviewCount: 96,
    price: "$96",
    image: "/img3.webp",
    alt: "Aurelia layer jacket for clinical professionals",
  },
  {
    id: "clinical-underscrub",
    name: "Clinical Base Underscrub",
    description: "Breathable base essential with gentle compression and lasting softness.",
    rating: "★★★★★",
    reviewCount: 141,
    price: "$52",
    image: "/img5.webp",
    alt: "Clinical base underscrub for everyday shifts",
  },
  {
    id: "essential-underscrub-top",
    name: "Essential Underscrub Top",
    description: "Ultra-soft first layer tailored for movement through long clinical rotations.",
    rating: "★★★★★",
    reviewCount: 88,
    price: "$58",
    image: "/img2.webp",
    alt: "Essential underscrub top in lightweight performance fabric",
  },
  {
    id: "surgical-cap-pro",
    name: "Surgical Cap Pro",
    description: "Streamlined cap silhouette with breathable structure and all-day comfort.",
    rating: "★★★★★",
    reviewCount: 73,
    price: "$28",
    image: "/img4.webp",
    alt: "Surgical cap pro with breathable performance weave",
  },
];

export function YouMayAlsoLike() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: "next" | "prev") => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const offset = direction === "next" ? 324 : -324;
    viewport.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="recommended-section" aria-labelledby="recommended-heading">
      <div className="recommended-header">
        <span className="recommended-label">Recommended</span>
        <h2 id="recommended-heading">You May Also Like</h2>
        <p>Designed to complement your everyday clinical wear.</p>
      </div>

      <button
        type="button"
        className="carousel-nav prev"
        aria-label="Scroll recommended products left"
        onClick={() => scrollTrack("prev")}
      >
        ←
      </button>

      <div className="carousel-viewport" ref={viewportRef}>
        <div className="carousel-track">
          {RECOMMENDED_PRODUCTS.map((product) => (
            <article key={product.id} className="recommended-card product-card">
              <div className="card-image">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={640}
                  height={800}
                  className="recommended-image"
                />
              </div>

              <div className="card-body">
                <h3 className="product-title">{product.name}</h3>

                <p className="product-desc">{product.description}</p>

                <div className="product-rating">
                  {product.rating}
                  <span>({product.reviewCount} reviews)</span>
                </div>

                <div className="card-footer">
                  <span className="price">{product.price}</span>
                  <button type="button" className="add-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="carousel-nav next"
        aria-label="Scroll recommended products right"
        onClick={() => scrollTrack("next")}
      >
        →
      </button>
    </section>
  );
}
