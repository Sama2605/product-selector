export interface Product {
  id: number;
  model: string;
  name: string;
  image: string;
  capacity: number;
  color: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  features: string[];
  energyClass: string;
  priceValidFrom: string;
  priceValidTo: string;
  price: number;
  installmentPrice?: number;
  installmentNumber?: number;
}
