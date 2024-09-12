export interface IProduct {
  id: number;
  title: string;
  image: string;
  image_small: string;
  attribute: string;
  description: string;
  brand: string;
  avgRating: number;
  ratings: number;
  price: number;
  oldPrice: number;
  badge: string;
}

export interface ISuggestions {
  id: number;
  title: string;
}
