import { formatCurrency } from "@/lib/formatCurrency";

interface PriceBlockProps {
  discountedPrice: number;
  originalPrice: number;
  currencyCode?: string;
  locale?: string;
}

export function PriceBlock({
  discountedPrice,
  originalPrice,
  currencyCode = "USD",
  locale = "en-US",
}: PriceBlockProps) {
  return (
    <div className="flex items-end gap-4">
      <p className="text-2xl font-semibold tracking-tight text-zinc-900">
        {formatCurrency(discountedPrice, { currencyCode, locale })}
      </p>
      <p className="text-lg">
        <span className="compare-price">
          {formatCurrency(originalPrice, { currencyCode, locale })}
        </span>
      </p>
    </div>
  );
}
