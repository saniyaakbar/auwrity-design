import Image from "next/image";
import {
  Feather,
  HeartPulse,
  Leaf,
  LucideIcon,
  ShieldCheck,
  StretchHorizontal,
  Wind,
} from "lucide-react";

type FabricQualitiesVariant = "compact" | "expanded";

interface FabricQualitiesProps {
  variant: FabricQualitiesVariant;
}

interface FabricQualityItem {
  title: string;
  description?: string;
  image?: string;
  alt?: string;
  Icon: LucideIcon;
}

const FABRIC_QUALITIES: FabricQualityItem[] = [
  {
    title: "Comfort Stretch",
    description:
      "Adaptive four-way movement engineered for long shifts and uninterrupted clinical routines.",
    image: "/img2.webp",
    alt: "Comfort stretch technical scrub fabric",
    Icon: StretchHorizontal,
  },
  {
    title: "Hyper Breathable",
    description:
      "High-airflow textile channels heat and moisture away to maintain all-day comfort under pressure.",
    image: "/img4.webp",
    alt: "Hyper breathable medical scrubs in daylight",
    Icon: Wind,
  },
  {
    title: "Wrinkle Resistant",
    description:
      "Structured finish that stays sharp from first rounds to final handoff with minimal maintenance.",
    image: "/img6.webp",
    alt: "Wrinkle resistant premium scrub silhouette",
    Icon: HeartPulse,
  },
  {
    title: "Anti-Microbial",
    Icon: ShieldCheck,
  },
  {
    title: "Lightweight Feel",
    Icon: Feather,
  },
  {
    title: "Odour Resistant",
    Icon: Leaf,
  },
];

export function FabricQualities({ variant }: FabricQualitiesProps) {
  if (variant === "compact") {
    return (
      <div className="fabric-qualities" aria-label="Fabric qualities">
        <h3 className="fabric-title">Performance Fabric Technology</h3>
        <div className="fabric-grid">
          {FABRIC_QUALITIES.map(({ title, Icon }) => (
            <div key={title} className="fabric-item">
              <Icon aria-hidden="true" className="fabric-icon" strokeWidth={1.4} />
              <span className="fabric-label">{title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="product-features fabric-qualities--expanded">
      <div className="story-header">
        <h2 className="features-title">Features of Technical Scrubs</h2>
      </div>

      <div className="features-grid">
        {FABRIC_QUALITIES.filter((feature) => feature.image && feature.description && feature.alt).map(
          (feature) => (
          <article key={feature.title} className="feature-card">
            <div className="story-image">
              <Image
                src={feature.image!}
                alt={feature.alt!}
                width={720}
                height={480}
                className="h-auto w-full object-contain"
              />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description!}</p>
          </article>
          ),
        )}
      </div>
    </section>
  );
}
