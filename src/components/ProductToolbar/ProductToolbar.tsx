import "./ProductToolbar.css";
import { Select } from "../Select/Select";
import {
  sortOptions,
  featureOptions,
  energyOptions,
  capacityOptions,
} from "../../constants/productFilterOptions";

type ProductToolbarProps = {
  productsCount: number;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedFeature: string;
  onFeatureChange: (value: string) => void;
  selectedEnergyClass: string;
  onEnergyClassChange: (value: string) => void;
  selectedCapacity: string;
  onCapacityChange: (value: string) => void;
  selectedSort: string;
  onSortChange: (value: string) => void;
};

export const ProductToolbar = ({
  productsCount,
  searchQuery,
  onSearchChange,
  selectedFeature,
  onFeatureChange,
  selectedEnergyClass,
  onEnergyClassChange,
  selectedCapacity,
  onCapacityChange,
  selectedSort,
  onSortChange,
}: ProductToolbarProps) => {
  return (
    <section className="product-toolbar">
      <h1 className="product-toolbar__title">Wybierz urządzenie</h1>

      <input
        className="product-toolbar__search"
        type="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div className="product-toolbar__filters">
        <Select
          id="sort"
          label="Sortuj po:"
          placeholder="Popularność"
          options={sortOptions}
          value={selectedSort}
          onChange={onSortChange}
        />

        <Select
          id="features"
          label="Funkcje:"
          placeholder="Pokaż wszystkie"
          options={featureOptions}
          value={selectedFeature}
          onChange={onFeatureChange}
        />

        <Select
          id="energy"
          label="Klasa energetyczna:"
          placeholder="Pokaż wszystkie"
          options={energyOptions}
          value={selectedEnergyClass}
          onChange={onEnergyClassChange}
        />

        <Select
          id="capacity"
          label="Pojemność:"
          placeholder="Pokaż wszystkie"
          options={capacityOptions}
          value={selectedCapacity}
          onChange={onCapacityChange}
        />
      </div>

      <p className="product-toolbar__count">Liczba wyników: {productsCount}</p>
    </section>
  );
};
