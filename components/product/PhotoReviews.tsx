"use client";

import { useState } from "react";
import Image from "next/image";

interface PhotoReviewItem {
  id: string;
  image: string;
  alt: string;
  quote: string;
  name: string;
  rating: string;
}

const PHOTO_REVIEWS: PhotoReviewItem[] = [
  {
    id: "sarah-m",
    image: "/img1.webp",
    alt: "Sarah M. wearing Maison Aurelia in a clinical setting",
    quote: "Perfect fit for long shifts",
    name: "Sarah M.",
    rating: "4.9",
  },
  {
    id: "daniel-r",
    image: "/img2.webp",
    alt: "Daniel R. in breathable Maison Aurelia scrubs",
    quote: "Breathable and polished all day",
    name: "Daniel R.",
    rating: "4.9",
  },
  {
    id: "nora-k",
    image: "/img3.webp",
    alt: "Nora K. styling Maison Aurelia during rounds",
    quote: "Looks premium even post-shift",
    name: "Nora K.",
    rating: "4.9",
  },
  {
    id: "omar-h",
    image: "/img4.webp",
    alt: "Omar H. wearing Maison Aurelia at work",
    quote: "All-day comfort with structure",
    name: "Omar H.",
    rating: "4.9",
  },
  {
    id: "lydia-p",
    image: "/img5.webp",
    alt: "Lydia P. in Maison Aurelia apparel",
    quote: "Stretch that actually lasts",
    name: "Lydia P.",
    rating: "4.9",
  },
  {
    id: "meera-a",
    image: "/img6.webp",
    alt: "Meera A. in Maison Aurelia professional wear",
    quote: "Professional fit, zero compromise",
    name: "Meera A.",
    rating: "4.9",
  },
];

export function PhotoReviews() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex((activeIndex - 1 + PHOTO_REVIEWS.length) % PHOTO_REVIEWS.length);
  };

  const showNext = () => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex((activeIndex + 1) % PHOTO_REVIEWS.length);
  };

  const activePhoto = activeIndex === null ? null : PHOTO_REVIEWS[activeIndex];

  return (
    <section className="photo-reviews-section" aria-labelledby="photo-reviews-heading">
      <div className="photo-reviews-container">
        <header className="photo-reviews-header">
          <p className="photo-reviews-kicker">Real Customer Moments</p>
          <h2 id="photo-reviews-heading">See how professionals wear Maison Aurelia</h2>
        </header>

        <div className="photo-review-grid">
          {PHOTO_REVIEWS.map((item, index) => (
            <article key={item.id} className="photo-card" onClick={() => openModal(index)}>
              <Image
                src={item.image}
                alt={item.alt}
                width={320}
                height={320}
                className="photo-card-image"
              />

              <div className="photo-card-overlay">
                <p className="photo-card-rating">⭐ {item.rating}</p>
                <p className="photo-card-quote">“{item.quote}”</p>
                <p className="photo-card-name">— {item.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div className="photo-modal" onClick={closeModal} role="dialog" aria-modal="true">
          <button
            type="button"
            className="photo-modal-nav photo-modal-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            ←
          </button>

          <div className="photo-modal-content" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activePhoto.image}
              alt={activePhoto.alt}
              width={900}
              height={900}
              className="photo-modal-image"
            />
            <div className="photo-modal-meta">
              <p className="photo-card-rating">⭐ {activePhoto.rating}</p>
              <p className="photo-card-quote">“{activePhoto.quote}”</p>
              <p className="photo-card-name">— {activePhoto.name}</p>
            </div>
          </div>

          <button
            type="button"
            className="photo-modal-nav photo-modal-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            →
          </button>

          <button type="button" className="photo-modal-close" onClick={closeModal} aria-label="Close gallery">
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
