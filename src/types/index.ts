export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  bids?: number;
  timeLeft?: string;
  seller?: string;
  condition?: string;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  watchlist: number[];
}