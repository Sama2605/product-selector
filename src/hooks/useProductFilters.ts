import { useState } from "react";
import type { Product } from "../types/product";

export const useProductFilters = (products: Product[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedEnergyClass, setSelectedEnergyClass] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.trim().toLowerCase();

    const searchResult =
      product.name.toLowerCase().includes(query) ||
      product.model.toLowerCase().includes(query);

    const featureResult =
      selectedFeature === "" ||
      selectedFeature === "all" ||
      product.features.includes(selectedFeature);

    const energyClassResult =
      selectedEnergyClass === "" ||
      selectedEnergyClass === "all" ||
      product.energyClass === selectedEnergyClass;

    const capacityResult =
      selectedCapacity === "" ||
      selectedCapacity === "all" ||
      product.capacity === Number(selectedCapacity);

    return searchResult && featureResult && energyClassResult && capacityResult;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case "price":
        return a.price - b.price;

      case "capacity":
        return a.capacity - b.capacity;

      default:
        return 0;
    }
  });
  return {
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
  };
};
