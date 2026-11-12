import { axiosInstance } from '../api/axiosInstance';
import type { Product, ProductInput } from '../../types';

export const productService = {
  async getAll(): Promise<Product[]> {
    const { data } = await axiosInstance.get<Product[]>('/products');
    return data;
  },
  async getCategories(): Promise<string[]> {
    const { data } = await axiosInstance.get<string[]>('/products/categories');
    return data;
  },
  async create(input: ProductInput): Promise<Product> {
    const { data } = await axiosInstance.post<Product>('/products', input);
    return data;
  },
};
