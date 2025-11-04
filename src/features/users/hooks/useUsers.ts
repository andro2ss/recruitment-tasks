import { useQuery } from '@tanstack/react-query';
import { usersApi } from '../services/usersApi';

export const useUsers = (page: number = 1) => {
  return useQuery({
    queryKey: ['users', page],
    queryFn: () => usersApi.getUsers(page),
  });
};

export const useUserById = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => usersApi.getUserById(id),
    enabled: !!id,
  });
};
