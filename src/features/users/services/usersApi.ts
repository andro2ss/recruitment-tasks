import axios from 'axios';
import { type User, type UserFormData } from '../types/user.types';

const API_BASE_URL = 'https://gorest.co.in/public/v2';
const API_TOKEN = import.meta.env.VITE_GOREST_API_TOKEN || '';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
  },
});

export const usersApi = {
  getUsers: async (page: number = 1, searchQuery?: string): Promise<{ users: User[]; totalPages: number }> => {
    const params: { page: number; per_page: number; name?: string } = {
      page,
      per_page: 20,
    };

    if (searchQuery?.trim()) {
      params.name = searchQuery.trim();
    }

    const response = await apiClient.get('/users', { params });
    
    const totalPages = parseInt(response.headers['x-pagination-pages'] || '1');
    
    return {
      users: response.data,
      totalPages,
    };
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  },

  updateUser: async (id: number, data: Partial<UserFormData>): Promise<User> => {
    const response = await apiClient.patch(`/users/${id}`, data);
    return response.data;
  },
};
