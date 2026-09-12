import { ProductCard } from "./components/ProductCard/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <>
      <div>Wybierz Product</div>
      <main>
        <ProductCard product={products[0]} />
      </main>
    </>
  );
}
export default App;
