import { useState, useMemo } from 'react'
import { type User } from '../types/user.types'

export const useUserSearch = (users: User[] | undefined) => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredUsers = useMemo(() => {
    if (!users || !searchQuery.trim()) {
      return users || []
    }

    const query = searchQuery.toLowerCase()
    return users.filter(
      (user) => user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
    )
  }, [users, searchQuery])

  return {
    searchQuery,
    setSearchQuery,
    filteredUsers,
  }
}
