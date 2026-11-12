import { axiosInstance } from '../api/axiosInstance';
import type { AuthResponse, LoginCredentials } from '../../types';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await axiosInstance.post<AuthResponse>(
      '/auth/login',
      credentials,
    );
    return data;
  },
};
