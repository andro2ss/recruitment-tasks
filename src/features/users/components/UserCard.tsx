import { Card, CardContent, Typography, Box, Chip, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { type User } from '../types/user.types'

interface UserCardProps {
  user: User
  onEdit: (user: User) => void
}

export const UserCard = ({ user, onEdit }: UserCardProps) => {
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    onEdit(user)
  }

  return (
    <Card
      elevation={0}
      onClick={() => onEdit(user)}
      sx={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
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
          <IconButton
            color="primary"
            onClick={handleEdit}
            sx={{
              '&:hover': {
                background: 'rgba(25, 118, 210, 0.08)',
              },
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}
