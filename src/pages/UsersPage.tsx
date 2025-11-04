import { Box, Typography, Alert, Paper } from '@mui/material';
import { useState } from 'react';
import { useUsers } from '../features/users/hooks/useUsers';
import { useUserSearch } from '../features/users/hooks/useUserSearch';
import { UserSearchBar } from '../features/users/components/UserSearchBar';
import { UserList } from '../features/users/components/UserList';
import { UserEditDialog } from '../features/users/components/UserEditDialog';
import { type User } from '../features/users/types/user.types';

export const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const { data, isLoading, error } = useUsers(currentPage);
  const { searchQuery, setSearchQuery, filteredUsers } = useUserSearch(data?.users);

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsEditDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedUser(null);
  };

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 3, md: 4 }, 
          mb: 4,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}
        >
          Users Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Browse, search, and edit users from the GoRest API.
        </Typography>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Failed to load users. Please try again later.
        </Alert>
      )}

      <UserSearchBar value={searchQuery} onChange={setSearchQuery} />

      <UserList
        users={filteredUsers}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={data?.totalPages || 1}
        onPageChange={setCurrentPage}
        onEditUser={handleEditUser}
      />

      <UserEditDialog
        open={isEditDialogOpen}
        user={selectedUser}
        onClose={handleCloseDialog}
      />
    </Box>
  );
};
