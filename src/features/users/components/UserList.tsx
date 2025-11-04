import { Box, CircularProgress, Typography, Pagination } from '@mui/material'
import { type User } from '../types/user.types'
import { UserCard } from './UserCard'

interface UserListProps {
  users: User[]
  isLoading: boolean
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onEditUser: (user: User) => void
}

export const UserList = ({
  users,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  onEditUser,
}: UserListProps) => {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (users.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          No users found
        </Typography>
      </Box>
    )
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 4,
        }}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} onEdit={onEditUser} />
        ))}
      </Box>

      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  )
}
