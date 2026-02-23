"use client";

import { useState } from "react";
import { AddToCartPayload, Product } from "@/types/product";
import { PriceBlock } from "@/components/product/PriceBlock";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { ProductVariants } from "@/components/product/ProductVariants";
import { FabricQualities } from "@/components/product/FabricQualities";

interface ProductInfoProps {
  product: Product;
  initialQuantity?: number;
  onAddToCart?: (payload: AddToCartPayload) => void;
  onQuantityChange?: (quantity: number) => void;
  onColorChange?: (colorId: string) => void;
  addToCartLabel?: string;
  isAddingToCart?: boolean;
}

export function ProductInfo({
  product,
  initialQuantity = 1,
  onAddToCart,
  onQuantityChange,
  onColorChange,
  addToCartLabel = "Add to Cart",
  isAddingToCart = false,
}: ProductInfoProps) {
  const [selectedColorId, setSelectedColorId] = useState(product.colors[0]?.id ?? "");
  const [quantity, setQuantity] = useState(Math.max(1, initialQuantity));
  const [isPersonalizationModalOpen, setIsPersonalizationModalOpen] = useState(false);
  const [embroideryText, setEmbroideryText] = useState("");
  const [embroideryPosition, setEmbroideryPosition] = useState("Left Chest");

  const handleColorChange = (colorId: string) => {
    setSelectedColorId(colorId);
    onColorChange?.(colorId);
  };

  const handleQuantityChange = (nextQuantity: number) => {
    const safeQuantity = Math.max(1, nextQuantity);
    setQuantity(safeQuantity);
    onQuantityChange?.(safeQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart?.({
      productId: product.id,
      selectedColorId,
      quantity,
    });
  };

  return (
    <section className="w-full max-w-none text-left">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">{product.brand}</p>
        <h1 className="mt-2 text-[38px] font-semibold leading-[1.1] tracking-tight text-zinc-900">
          {product.title}
        </h1>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
          <span className="text-amber-500">★★★★★</span>
          <span>4.8 rating</span>
          <span>·</span>
          <span>Trusted by healthcare professionals</span>
        </div>

        <div className="mt-6">
          <PriceBlock
            discountedPrice={product.discountedPrice}
            originalPrice={product.originalPrice}
            currencyCode={product.currencyCode}
          />
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Inclusive of taxes · Free shipping · Easy returns
        </p>

        <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-600">
          Engineered for long clinical shifts with breathable, stretch fabric that maintains
          structure all day.
        </p>
      </div>

      <div className="mt-6">
        <ProductVariants
          colors={product.colors}
          initialColorId={selectedColorId}
          onColorChange={handleColorChange}
        />
        <p className="mt-3 text-xs text-gray-500">Fit Tip: Size up for relaxed comfort.</p>

        <div className="purchase-panel mb-8 md:mb-10 lg:mb-14 xl:mb-16">
          <div className="purchase-top">
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
              min={1}
              disabled={isAddingToCart}
            />

            <button
              type="button"
              className="personalize-btn"
              onClick={() => setIsPersonalizationModalOpen(true)}
            >
              ✦ Personalize
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="add-to-cart-btn"
          >
            {isAddingToCart ? "Adding..." : addToCartLabel}
          </button>

          <p className="purchase-meta">Free shipping • Easy returns</p>
        </div>

        <FabricQualities variant="compact" />

        {isPersonalizationModalOpen && (
          <div
            className="fixed inset-0 z-1100 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
            onClick={() => setIsPersonalizationModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Personalization options"
          >
            <div
              className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-zinc-900">Personalize your piece</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Add embroidered initials to make this garment uniquely yours.
              </p>

              <div className="mt-5 space-y-4">
                <label className="block text-sm font-medium text-zinc-700">
                  Initials
                  <input
                    value={embroideryText}
                    onChange={(event) => setEmbroideryText(event.target.value.slice(0, 4))}
                    placeholder="e.g. MA"
                    className="mt-2 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-500"
                  />
                </label>

                <label className="block text-sm font-medium text-zinc-700">
                  Placement
                  <select
                    value={embroideryPosition}
                    onChange={(event) => setEmbroideryPosition(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-500"
                  >
                    <option>Left Chest</option>
                    <option>Right Sleeve</option>
                    <option>Hemline</option>
                  </select>
                </label>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsPersonalizationModalOpen(false)}
                  className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setIsPersonalizationModalOpen(false)}
                  className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
