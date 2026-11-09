import { axiosInstance } from '../api/axiosInstance';
import type { StoreUser, UserInput } from '../../types';

export const userService = {
  async getAll(): Promise<StoreUser[]> {
    const { data } = await axiosInstance.get<StoreUser[]>('/users');
    return data;
  },
  async create(input: UserInput): Promise<StoreUser> {
    const { data } = await axiosInstance.post<StoreUser>('/users', input);
    return data;
  },
};
