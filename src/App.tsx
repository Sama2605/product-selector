import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";

function App() {
  return (
    <>
      <div>Wybierz Product</div>
      <main>
        <ProductGrid products={products} />
      </main>
    </>
  );
}
export default App;
