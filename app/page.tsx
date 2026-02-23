import {
  CustomerReviews,
  PhotoReviews,
  ProductAccordions,
  ProductFeatures,
  ProductGallery,
  ProductInfo,
  YouMayAlsoLike,
} from "@/components/product";
import { mockProduct } from "@/data/mockProduct";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <span className="brand">MAISON AURELIA</span>
        </div>

        <div className="nav-center">
          <a>Women</a>
          <a>Men</a>
          <a>Fabric Technology</a>
          <a>About</a>
        </div>

        <div className="nav-right">
          <button type="button">Search</button>
          <button type="button">Account</button>
          <button type="button">Bag</button>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="pdp-page min-h-screen bg-[#f6f7f9]">
      <Navbar />

      <main className="pdp-content">
        <section className="pdp-hero product-details-section">
          <div className="pdp-container">
            <div className="pdp-grid">
              <div className="product-gallery">
                <ProductGallery images={mockProduct.images} />
              </div>
              <div className="product-details">
                <ProductInfo product={mockProduct} />
                <div className="product-accordions">
                  <ProductAccordions />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pdp-features features-section">
          <div className="pdp-container">
            <ProductFeatures />
          </div>
        </section>

        <YouMayAlsoLike />
        <CustomerReviews />
        <PhotoReviews />
      </main>
    </div>
  );
}
