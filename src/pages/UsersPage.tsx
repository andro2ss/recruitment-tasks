import { Container, Box, Typography, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { useUsers } from '../features/users/hooks/useUsers';
import { useUserSearch } from '../features/users/hooks/useUserSearch';
import { UserSearchBar } from '../features/users/components/UserSearchBar';
import { UserList } from '../features/users/components/UserList';
import { UserEditDialog } from '../features/users/components/UserEditDialog';
import { type User } from '../features/users/types/user.types';

export const UsersPage = () => {
  const navigate = useNavigate();
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
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mb: 3 }}
        >
          Back to Home
        </Button>

        <Typography variant="h3" component="h1" gutterBottom>
          Users Management
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Browse, search, and edit users from the GoRest API.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            Failed to load users. Please try again later.
          </Alert>
        )}

        <Box sx={{ mt: 4 }}>
          <UserSearchBar value={searchQuery} onChange={setSearchQuery} />

          <UserList
            users={filteredUsers}
            isLoading={isLoading}
            currentPage={currentPage}
            totalPages={data?.totalPages || 1}
            onPageChange={setCurrentPage}
            onEditUser={handleEditUser}
          />
        </Box>

        <UserEditDialog
          open={isEditDialogOpen}
          user={selectedUser}
          onClose={handleCloseDialog}
        />
      </Box>
    </Container>
  );
};
