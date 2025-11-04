import { Box, Alert } from '@mui/material'
import { useState, useEffect } from 'react'
import { useUsers } from '../features/users/hooks/useUsers'
import { UserSearchBar } from '../features/users/components/UserSearchBar'
import { UserList } from '../features/users/components/UserList'
import { UserEditDialog } from '../features/users/components/UserEditDialog'
import { type User } from '../features/users/types/user.types'
import { PageHeader } from '../components/molecules/PageHeader'
import { PageTitle } from '../components/atoms/PageTitle'
import { PageDescription } from '../components/atoms/PageDescription'
import { useDebounce } from '../hooks/useDebounce'

export const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [dialogKey, setDialogKey] = useState(0)

  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  const { data, isLoading, error } = useUsers(currentPage, debouncedSearchQuery)

  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearchQuery])

  const handleEditUser = (user: User) => {
    setSelectedUser(user)
    setIsEditDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsEditDialogOpen(false)
    setSelectedUser(null)
    setDialogKey((prev) => prev + 1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <PageHeader>
        <PageTitle>Users Management</PageTitle>
        <PageDescription>Browse, search, and edit users from the GoRest API.</PageDescription>
      </PageHeader>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Failed to load users. Please try again later.
        </Alert>
      )}

      <UserSearchBar value={searchQuery} onChange={handleSearchChange} />

      <UserList
        users={data?.users || []}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={data?.totalPages || 1}
        onPageChange={setCurrentPage}
        onEditUser={handleEditUser}
      />

      <UserEditDialog
        key={dialogKey}
        open={isEditDialogOpen}
        user={selectedUser}
        onClose={handleCloseDialog}
      />
    </Box>
  )
}
