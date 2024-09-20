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
  quantity: number;
}

export interface ISuggestions {
  id: number;
  title: string;
}

export interface ICartProducts {
  id: number;
  quantity: number;
}
