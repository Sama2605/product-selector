import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { ProductToolbar } from "./components/ProductToolbar/ProductToolbar";
import { usePrdoductFilters } from "./hooks/useProductFilters";

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
        <ProductGrid products={sortedProducts} />
      </main>
    </>
  );
}
export default App;
