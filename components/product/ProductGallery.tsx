"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ProductImage } from "@/types/product";

interface ProductGalleryProps {
  images: Array<ProductImage | string>;
  selectedImageId?: string;
  onSelectImage?: (imageId: string) => void;
}

export function ProductGallery({
  images,
  selectedImageId: controlledSelectedImageId,
  onSelectImage,
}: ProductGalleryProps) {
  const normalizedImages = useMemo<ProductImage[]>(
    () =>
      images.map((image, index) =>
        typeof image === "string"
          ? {
              id: image,
              src: image,
              alt: `Product image ${index + 1}`,
            }
          : image,
      ),
    [images],
  );

  const [internalSelectedImageId, setInternalSelectedImageId] = useState(
    normalizedImages[0]?.id ?? "",
  );
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const selectedImageId = controlledSelectedImageId ?? internalSelectedImageId;

  const selectedImage = useMemo(
    () =>
      normalizedImages.find((image) => image.id === selectedImageId) ?? normalizedImages[0],
    [normalizedImages, selectedImageId],
  );

  const handleSelectImage = (imageId: string) => {
    if (imageId === selectedImage?.id) {
      return;
    }

    setIsImageLoaded(false);

    if (controlledSelectedImageId === undefined) {
      setInternalSelectedImageId(imageId);
    }

    onSelectImage?.(imageId);
  };

  if (!normalizedImages.length) {
    return (
      <section>
        <div className="relative flex w-full aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-[#f3f3f5] text-sm text-zinc-500">
          No product images available.
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-[90px_1fr] sm:gap-8">
        <div className="order-2 flex w-full justify-start gap-4 sm:order-1 sm:w-[90px] sm:flex-col" role="tablist" aria-label="Product image thumbnails">
          {normalizedImages.map((image) => {
            const isSelected = image.id === selectedImage?.id;

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => handleSelectImage(image.id)}
                className={`rounded-xl border border-zinc-200/70 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                  isSelected
                    ? "ring-2 ring-black"
                    : "hover:border-zinc-300"
                }`}
                aria-label={`Preview ${image.alt}`}
                aria-selected={isSelected}
                role="tab"
              >
                <div className="relative h-[88px] w-[88px] overflow-hidden rounded-xl bg-[#f3f3f5]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="88px"
                    className="object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative order-1 flex w-full aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-[#f3f3f5] sm:order-2" role="tabpanel" aria-label="Selected product image">
          {selectedImage && (
            <Image
              key={selectedImage.id}
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
              onLoad={() => setIsImageLoaded(true)}
              className={`object-contain scale-[1.05] transition-opacity duration-300 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
