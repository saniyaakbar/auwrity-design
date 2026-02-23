interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (nextQuantity: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max,
  disabled = false,
}: QuantitySelectorProps) {
  const isAtMin = quantity <= min;
  const isAtMax = max !== undefined && quantity >= max;

  const handleDecrease = () => {
    if (disabled || isAtMin) {
      return;
    }

    onQuantityChange(Math.max(min, quantity - 1));
  };

  const handleIncrease = () => {
    if (disabled || isAtMax) {
      return;
    }

    const nextValue = quantity + 1;
    onQuantityChange(max !== undefined ? Math.min(max, nextValue) : nextValue);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white px-2.5 py-1.5 shadow-sm">
      <button
        type="button"
        onClick={handleDecrease}
        className="flex size-9 items-center justify-center rounded-full text-lg text-zinc-700 transition-all duration-200 hover:bg-zinc-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Decrease quantity"
        disabled={disabled || isAtMin}
      >
        −
      </button>
      <span
        className="min-w-10 text-center text-sm font-medium text-zinc-900"
        aria-live="polite"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={handleIncrease}
        className="flex size-9 items-center justify-center rounded-full text-lg text-zinc-700 transition-all duration-200 hover:bg-zinc-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Increase quantity"
        disabled={disabled || isAtMax}
      >
        +
      </button>
    </div>
  );
}
