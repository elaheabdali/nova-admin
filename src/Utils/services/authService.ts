import { axiosInstance } from '../api/axiosInstance';
import type { AuthResponse, LoginCredentials } from '../../types';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
<<<<<<< HEAD
    const { data } = await axiosInstance.post<AuthResponse>(
      '/auth/login',
      credentials,
    );
=======
    const { data } = await axiosInstance.post<AuthResponse>('/auth/login', credentials);
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
    return data;
  },
};
