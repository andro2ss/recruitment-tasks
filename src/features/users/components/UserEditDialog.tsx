import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { type User, type UserFormData } from '../types/user.types';
import { useUpdateUser } from '../hooks/useUpdateUser';
import { useState, useEffect } from 'react';

const userSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  gender: z.enum(['male', 'female']),
  status: z.enum(['active', 'inactive']),
});

interface UserEditDialogProps {
  open: boolean;
  user: User | null;
  onClose: () => void;
}

export const UserEditDialog = ({ open, user, onClose }: UserEditDialogProps) => {
  const { mutate: updateUser, isPending, isSuccess } = useUpdateUser();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: user || undefined,
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        onClose();
        reset();
        setSubmitError(null);
      }, 1000);
    }
  }, [isSuccess, onClose, reset]);

  const onSubmit = (data: UserFormData) => {
    if (!user) return;
    
    setSubmitError(null);
    updateUser(
      { id: user.id, data },
      {
        onError: (err) => {
          setSubmitError(err.message || 'Failed to update user');
        },
      }
    );
  };

  const handleClose = () => {
    if (!isPending) {
      onClose();
      reset();
      setSubmitError(null);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit User</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {isSuccess && (
            <Alert severity="success" sx={{ mb: 2 }}>
              User updated successfully!
            </Alert>
          )}
          
          {submitError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {submitError}
            </Alert>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              {...register('name')}
              label="Name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              {...register('email')}
              label="Email"
              type="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              {...register('gender')}
              label="Gender"
              select
              fullWidth
              error={!!errors.gender}
              helperText={errors.gender?.message}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>

            <TextField
              {...register('status')}
              label="Status"
              select
              fullWidth
              error={!!errors.status}
              helperText={errors.status?.message}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={isPending}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isPending}>
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
