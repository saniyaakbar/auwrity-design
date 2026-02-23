export interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  sku?: string;
  brand: string;
  title: string;
  discountedPrice: number;
  originalPrice: number;
  currencyCode?: string;
  description: string;
  images: ProductImage[];
  colors: ProductColor[];
  sizes: string[];
  personalization: {
    title: string;
    description: string;
    actionLabel: string;
  };
}

export interface AddToCartPayload {
  productId: string;
  quantity: number;
  selectedColorId?: string;
}
