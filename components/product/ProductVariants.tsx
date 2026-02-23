"use client";

import { HelpCircle, Ruler, Share2 } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductColor } from "@/types/product";

const SIZE_OPTIONS = ["S", "M", "L", "XL", "XXL"];

interface ProductVariantsProps {
  colors: ProductColor[];
  initialColorId?: string;
  onColorChange?: (colorId: string) => void;
}

export function ProductVariants({
  colors,
  initialColorId,
  onColorChange,
}: ProductVariantsProps) {
  const defaultColorId = useMemo(
    () => initialColorId ?? colors[0]?.id ?? "",
    [colors, initialColorId],
  );

  const [selectedColor, setSelectedColor] = useState(defaultColorId);
  const [topSize, setTopSize] = useState("S");
  const [bottomSize, setBottomSize] = useState("S");

  const selectedColorName =
    colors.find((color) => color.id === selectedColor)?.name ?? "";

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId);
    onColorChange?.(colorId);
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-1 text-xs font-medium tracking-wide text-gray-500">
          <span>Color</span>
          <span className="ml-1 text-gray-800">{selectedColorName}</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          {colors.map((color) => {
            const isSelected = color.id === selectedColor;

            return (
              <button
                key={color.id}
                type="button"
                aria-label={`Select ${color.name}`}
                onClick={() => handleColorSelect(color.id)}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 ${
                  isSelected
                    ? "border border-gray-300 bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <span
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 text-xs font-medium tracking-wide text-gray-500">
          <span>Top Size</span>
          <span className="ml-1 text-gray-800">{topSize}</span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {SIZE_OPTIONS.map((size) => {
            const isSelected = size === topSize;

            return (
              <button
                key={`top-${size}`}
                type="button"
                onClick={() => setTopSize(size)}
                className={`h-9 min-w-[36px] rounded-md border px-3 text-sm transition-all duration-150 ${
                  isSelected
                    ? "border-black bg-white font-medium text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                    : "border-gray-200 text-gray-700 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 text-xs font-medium tracking-wide text-gray-500">
          <span>Bottom Size</span>
          <span className="ml-1 text-gray-800">{bottomSize}</span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {SIZE_OPTIONS.map((size) => {
            const isSelected = size === bottomSize;

            return (
              <button
                key={`bottom-${size}`}
                type="button"
                onClick={() => setBottomSize(size)}
                className={`h-9 min-w-[36px] rounded-md border px-3 text-sm transition-all duration-150 ${
                  isSelected
                    ? "border-black bg-white font-medium text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                    : "border-gray-200 text-gray-700 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-500">
        <button
          type="button"
          className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-gray-800"
        >
          <Ruler className="h-4 w-4" />
          <span>Size Guide</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-gray-800"
        >
          <HelpCircle className="h-4 w-4" />
          <span>Ask a Question</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-gray-800"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
