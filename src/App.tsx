import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { ProductToolbar } from "./components/ProductToolbar/ProductToolbar";

function App() {
  return (
    <>
      <ProductToolbar productsCount={products.length} />
      <main>
        <ProductGrid products={products} />
      </main>
    </>
  );
}
export default App;
