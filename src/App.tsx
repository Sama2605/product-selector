import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { ProductToolbar } from "./components/ProductToolbar/ProductToolbar";
import { useProductFilters } from "./hooks/useProductFilters";
import { useState } from "react";
import { useShowMore } from "./hooks/useShowMore";
import { ShowMoreButton } from "./components/ShowMoreButton/ShowMoreButton";

function App() {
  const {
    products: sortedProducts,
    searchQuery,
    setSearchQuery,
    selectedFeature,
    setSelectedFeature,
    selectedEnergyClass,
    setSelectedEnergyClass,
    selectedCapacity,
    setSelectedCapacity,
    selectedSort,
    setSelectedSort,
  } = useProductFilters(products);

  const {
    visibleItems: visibleProducts,
    hasMore,
    showMore,
  } = useShowMore(sortedProducts);

  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <>
      <ProductToolbar
        productsCount={sortedProducts.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedFeature={selectedFeature}
        onFeatureChange={setSelectedFeature}
        selectedEnergyClass={selectedEnergyClass}
        onEnergyClassChange={setSelectedEnergyClass}
        selectedCapacity={selectedCapacity}
        onCapacityChange={setSelectedCapacity}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />
      <main>
        <ProductGrid
          products={visibleProducts}
          selectedProduct={selectedProduct}
          onProductSelect={setSelectedProduct}
        />

        {hasMore && <ShowMoreButton onClick={showMore} />}
      </main>
    </>
  );
}
export default App;
