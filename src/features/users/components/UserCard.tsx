import { Card, CardContent, Typography, Box, Chip, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { type User } from '../types/user.types';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
}

export const UserCard = ({ user, onEdit }: UserCardProps) => {
  return (
    <Card elevation={2}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Chip
                label={user.status}
                color={user.status === 'active' ? 'success' : 'default'}
                size="small"
              />
              <Chip
                label={user.gender}
                color={user.gender === 'male' ? 'primary' : 'secondary'}
                size="small"
              />
            </Box>
          </Box>
          <IconButton color="primary" onClick={() => onEdit(user)}>
            <EditIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
