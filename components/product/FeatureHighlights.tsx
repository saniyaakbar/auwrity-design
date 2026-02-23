import {
  Feather,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  StretchHorizontal,
  Wind,
} from "lucide-react";

const FEATURE_ITEMS = [
  {
    title: "Comfort Stretch",
    Icon: StretchHorizontal,
  },
  {
    title: "Supremely Soft",
    Icon: Sparkles,
  },
  {
    title: "Hyper Breathable",
    Icon: Wind,
  },
  {
    title: "Anti-Microbial",
    Icon: ShieldCheck,
  },
  {
    title: "Lightweight",
    Icon: Feather,
  },
  {
    title: "Wrinkle Resistant",
    Icon: HeartPulse,
  },
];

export function FeatureHighlights() {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-14 md:grid-cols-3">
      {FEATURE_ITEMS.map(({ title, Icon }) => (
        <div key={title} className="group flex flex-col items-center gap-2 text-center">
          <div className="text-gray-700 opacity-80 transition-all duration-200 group-hover:opacity-100">
            <Icon className="h-6 w-6" />
          </div>
          <p className="text-sm tracking-wide text-gray-700">{title}</p>
        </div>
      ))}
    </div>
  );
}
