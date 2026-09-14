import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { ProductToolbar } from "./components/ProductToolbar/ProductToolbar";
import { usePrdoductFilters } from "./hooks/useProductFilters";
import { useState } from "react";

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
  } = usePrdoductFilters(products);

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
          products={sortedProducts}
          selectedProduct={selectedProduct}
          onProductSelect={setSelectedProduct}
        />
      </main>
    </>
  );
}
export default App;
