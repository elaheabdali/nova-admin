export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}

export interface ProductInput {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface UserName {
  firstname: string;
  lastname: string;
}

export interface StoreUser {
  id: number;
  email: string;
  username: string;
  password?: string;
  name: UserName;
  phone: string;
}

export interface UserInput {
  email: string;
  username: string;
  password: string;
  name: UserName;
  phone: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface ApiError {
  message: string;
  status?: number;
}

export interface AsyncState {
  loading: boolean;
  error: string | null;
}
