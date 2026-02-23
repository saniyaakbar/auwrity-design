import Image from "next/image";

const STORY_ROWS = [
  {
    title: "Engineered Comfort Stretch",
    description:
      "Designed to move with clinical pace, our adaptive stretch structure flexes through every shift while retaining shape and polish.",
    image: "/img2.webp",
    alt: "Technical scrub fabric with flexible construction",
  },
  {
    title: "Breathability for Long Shifts",
    description:
      "Micro-ventilated weave architecture improves airflow and moisture release, helping maintain comfort through high-intensity hours.",
    image: "/img4.webp",
    alt: "Breathable medical scrub set in natural light",
    reverse: true,
  },
  {
    title: "Professional Finish, Minimal Care",
    description:
      "Wrinkle-resistant yarns and easy-care durability keep your uniform crisp from first rounds to final handoff.",
    image: "/img6.webp",
    alt: "Wrinkle-resistant premium medical apparel detail",
  },
];

export function ProductStory() {
  return (
    <section className="product-story">
      <div className="story-header">
        <h2>Features of Technical Scrubs</h2>
      </div>

      {STORY_ROWS.map((row) => (
        <div
          key={row.title}
          className={`story-row${row.reverse ? " reverse" : ""}`}
        >
          <div className="story-image">
            <Image
              src={row.image}
              alt={row.alt}
              width={700}
              height={520}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="story-content">
            <h3>{row.title}</h3>
            <p>{row.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
