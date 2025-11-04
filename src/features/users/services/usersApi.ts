import axios from 'axios';
import { type User, type UserFormData } from '../types/user.types';

const API_BASE_URL = 'https://gorest.co.in/public/v2';
const API_TOKEN = 'your-token-here';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
  },
});

export const usersApi = {
  getUsers: async (page: number = 1): Promise<{ users: User[]; totalPages: number }> => {
    const response = await apiClient.get('/users', {
      params: { page, per_page: 20 },
    });
    
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

  searchUsers: async (query: string): Promise<User[]> => {
    const { users } = await usersApi.getUsers(1);
    
    const lowerQuery = query.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerQuery) ||
        user.email.toLowerCase().includes(lowerQuery)
    );
  },
};
