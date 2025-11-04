import { useQuery } from '@tanstack/react-query'
import { usersApi } from '../services/usersApi'

export const useUsers = (page: number, searchQuery?: string) => {
  return useQuery({
    queryKey: ['users', page, searchQuery],
    queryFn: () => usersApi.getUsers(page, searchQuery),
  })
}

export const useUserById = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => usersApi.getUserById(id),
    enabled: !!id,
  })
}
