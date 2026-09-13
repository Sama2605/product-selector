import type { Product } from "../../types/product";
import "./ProductCard.css";
import energyBadge from "../../assets/EnergyBadge.svg";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const {
    model,
    name,
    image,
    capacity,
    color,
    dimensions,
    features,
    energyClass,
    priceValidFrom,
    priceValidTo,
    price,
    installmentPrice,
    installmentNumber,
  } = product;

  return (
    <article className="product-card">
      <img src={image} alt={name} className="product-card__image" />

      <h2 className="product-card__title">
        {model}, {name}, {capacity} kg, {color}
      </h2>

      <div className="product-card__description">
        <p>
          <span>Pojemność (kg): </span>
          <strong>{capacity}</strong>
        </p>

        <p>
          <span>Wymiary (GxSxW): </span>
          <strong>
            {dimensions.depth} x {dimensions.width} x {dimensions.height} cm
          </strong>
        </p>

        <p>
          <span>Funkcje: </span>
          <strong>{features.join(", ")}</strong>
        </p>
      </div>

      <div className="product-card__energy-badge">
        <span className="product-card__energy-badge-label">
          Klasa energetyczna
        </span>

        <div className="product-card__energy-badge-indicator">
          <img
            src={energyBadge}
            alt=""
            className="product-card__energy-badge-image"
          />

          <span className="product-card__energy-badge-letter">
            {energyClass}
          </span>
        </div>
      </div>

      <p className="product-card__price-valid">
        Cena obowiązuje: {priceValidFrom} - {priceValidTo}
      </p>

      <div className="product-card__price">
        {price}
        <span className="product-card__price-details">
          <sup>00</sup>
          <span>zł</span>
        </span>
      </div>

      {installmentPrice !== undefined && installmentNumber !== undefined && (
        <p className="product-card__installment">
          {installmentPrice} zł x {installmentNumber} rat
        </p>
      )}

      <button type="button" className="product-card__button">
        WYBIERZ
      </button>
    </article>
  );
};
