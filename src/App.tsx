import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { ProductToolbar } from "./components/ProductToolbar/ProductToolbar";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery, "app");

  const searchedProducts = products.filter((product) => {
    const query = searchQuery.toLocaleLowerCase();
    return (
      product.name.toLocaleLowerCase().includes(query) ||
      product.model.toLocaleLowerCase().includes(query)
    );
  });

  return (
    <>
      <ProductToolbar
        searchQuery={searchQuery}
        productsCount={searchedProducts.length}
        onSearchChange={setSearchQuery}
      />
      <main>
        <ProductGrid products={searchedProducts} />
      </main>
    </>
  );
}
export default App;
