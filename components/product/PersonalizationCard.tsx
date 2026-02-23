interface PersonalizationCardProps {
  title: string;
  description: string;
  actionLabel: string;
}

export function PersonalizationCard({
  title,
  description,
  actionLabel,
}: PersonalizationCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-gray-50 p-4">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{description}</p>
      <button
        type="button"
        className="mt-3 inline-flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-200 hover:border-zinc-400 active:scale-[0.99]"
      >
        {actionLabel}
      </button>
    </div>
  );
}
