import { ProductColor } from "@/types/product";

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColorId: string;
  onSelectColor: (colorId: string) => void;
  label?: string;
  disabled?: boolean;
}

export function ColorSelector({
  colors,
  selectedColorId,
  onSelectColor,
  label = "Color",
  disabled = false,
}: ColorSelectorProps) {
  const selectedColor = colors.find((color) => color.id === selectedColorId);

  return (
    <fieldset className="space-y-3" disabled={disabled}>
      <legend className="flex items-center gap-2 text-sm">
        <span className="font-medium text-zinc-700">{label}</span>
        {selectedColor && <span className="text-zinc-500">{selectedColor.name}</span>}
      </legend>
      <div className="flex items-center gap-3" role="radiogroup" aria-label={label}>
        {colors.map((color) => {
          const isSelected = color.id === selectedColorId;

          return (
            <button
              key={color.id}
              type="button"
              aria-label={`Select ${color.name}`}
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectColor(color.id)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                isSelected
                  ? "border border-gray-300 bg-[#f1f2f4]"
                  : "hover:bg-gray-100"
              }`}
              disabled={disabled}
            >
              <span
                className="h-6 w-6 rounded-full"
                style={{ backgroundColor: color.hex }}
              />
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
