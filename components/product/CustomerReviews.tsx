"use client";

import { useRef } from "react";
import Image from "next/image";

const REVIEWS = [
  {
    id: "aisha-khan",
    name: "Aisha Khan",
    role: "Registered Nurse",
    rating: "★★★★★",
    text: "Amazing stretch and comfort during long ICU shifts. Easily the best scrubs I've worn.",
    avatar: "/img1.webp",
    verified: "Verified Purchase",
  },
  {
    id: "meera-patel",
    name: "Dr. Meera Patel",
    role: "Surgeon",
    rating: "★★★★★",
    text: "Lightweight yet structured. Looks professional even after 12-hour duty.",
    avatar: "/img3.webp",
    verified: "Verified Purchase",
  },
  {
    id: "omar-hassan",
    name: "Omar Hassan",
    role: "Dentist",
    rating: "★★★★★",
    text: "Breathability is unreal. No overheating during rounds.",
    avatar: "/img5.webp",
    verified: "Verified Purchase",
  },
  {
    id: "julia-roberts",
    name: "Julia Roberts",
    role: "Pediatric Nurse",
    rating: "★★★★★",
    text: "The fabric stays polished and soft through every shift. Fit and comfort are both exceptional.",
    avatar: "/img2.webp",
    verified: "Verified Purchase",
  },
];

const FAQ_ITEMS = [
  {
    question: "How do these scrubs fit compared to standard sizes?",
    answer:
      "They follow true-to-size tailoring with stretch recovery. If you prefer a relaxed fit for long shifts, consider one size up.",
  },
  {
    question: "Will the fabric hold up after repeated washes?",
    answer:
      "Yes. The performance weave is tested for frequent hospital-grade laundering while maintaining structure, softness, and shape.",
  },
  {
    question: "Can I return if the fit is not right?",
    answer:
      "Absolutely. We offer easy returns on unworn items with tags, so you can find your ideal fit with confidence.",
  },
];

export function CustomerReviews() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: "next" | "prev") => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const offset = direction === "next" ? 344 : -344;
    viewport.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <div className="reviews-container">
        <header className="reviews-header">
          <p className="reviews-label">Customer Reviews</p>
          <h2 id="reviews-heading">Loved by Healthcare Professionals</h2>
          <p className="reviews-subtitle">
            Trusted for comfort, breathability, and confidence through every long shift.
          </p>
        </header>

        <div className="reviews-summary" aria-label="Overall customer rating">
          <p className="reviews-summary-score">
            4.9 <span>★</span>
          </p>
          <p className="reviews-summary-count">from 2,341 reviews</p>
        </div>

        <div className="reviews-carousel-wrapper">
          <button
            type="button"
            className="reviews-nav reviews-prev"
            aria-label="Scroll customer reviews left"
            onClick={() => scrollTrack("prev")}
          >
            ←
          </button>

          <div className="reviews-viewport" ref={viewportRef}>
            <div className="reviews-track">
              {REVIEWS.map((review) => (
                <article key={review.id} className="review-card">
                  <div className="review-header">
                    <Image
                      src={review.avatar}
                      alt={`${review.name} avatar`}
                      width={44}
                      height={44}
                      className="avatar"
                    />
                    <div>
                      <p className="customer-name">{review.name}</p>
                      <p className="customer-role">{review.role}</p>
                    </div>
                  </div>

                  <p className="review-rating">{review.rating}</p>
                  <p className="review-text">{review.text}</p>
                  <p className="verified-badge">✔ {review.verified}</p>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="reviews-nav reviews-next"
            aria-label="Scroll customer reviews right"
            onClick={() => scrollTrack("next")}
          >
            →
          </button>
        </div>

        <section className="reviews-faq" aria-labelledby="reviews-faq-heading">
          <header className="reviews-faq-head">
            <p className="reviews-faq-label">FAQ</p>
            <h3 id="reviews-faq-heading">Questions Before You Order?</h3>
          </header>

          <div className="reviews-faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="reviews-faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="reviews-faq-cta">
            <p>Need personalized sizing guidance before checkout?</p>
            <button type="button">Talk to a Fit Specialist</button>
          </div>
        </section>
      </div>
    </section>
  );
}
