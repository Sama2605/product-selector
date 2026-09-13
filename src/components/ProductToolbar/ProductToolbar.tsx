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
};

export const ProductToolbar = ({ productsCount }: ProductToolbarProps) => {
  return (
    <section className="product-toolbar">
      <h1 className="product-toolbar__title">Wybierz urządzenie</h1>

      <input
        className="product-toolbar__search"
        type="search"
        placeholder="Search..."
      />

      <div className="product-toolbar__filters">
        <Select
          id="sort"
          label="Sortuj po:"
          placeholder="Popularność"
          options={sortOptions}
        />

        <Select
          id="features"
          label="Funkcje:"
          placeholder="Pokaż wszystkie"
          options={featureOptions}
        />

        <Select
          id="energy"
          label="Klasa energetyczna:"
          placeholder="Pokaż wszystkie"
          options={energyOptions}
        />

        <Select
          id="capacity"
          label="Pojemność:"
          placeholder="Pokaż wszystkie"
          options={capacityOptions}
        />
      </div>

      <p className="product-toolbar__count">Liczba wyników: {productsCount}</p>
    </section>
  );
};
