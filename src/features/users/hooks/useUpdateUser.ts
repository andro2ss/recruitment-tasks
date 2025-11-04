import { useMutation, useQueryClient } from '@tanstack/react-query'
import { usersApi } from '../services/usersApi'
import { type UserFormData } from '../types/user.types'

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<UserFormData> }) =>
      usersApi.updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
