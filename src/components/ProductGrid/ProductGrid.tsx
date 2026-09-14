import type { Product } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductGrid.css";

interface ProductGridProps {
  products: Product[];
  selectedProduct: number | null;
  onProductSelect: (value: number | null) => void;
}

export const ProductGrid = ({
  products,
  selectedProduct,
  onProductSelect,
}: ProductGridProps) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={product.id === selectedProduct}
          onSelect={() => onProductSelect(product.id)}
        />
      ))}
    </div>
  );
};
