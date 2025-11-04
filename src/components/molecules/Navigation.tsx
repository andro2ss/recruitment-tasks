import { Box, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'

const tasks = [
  { path: '/text-scrambler', label: 'Text Scrambler' },
  { path: '/pesel-validator', label: 'PESEL Validator' },
  { path: '/users', label: 'Users' },
]

export const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {tasks.map((task) => (
        <Button
          key={task.path}
          color="inherit"
          onClick={() => navigate(task.path)}
          sx={{
            fontWeight: location.pathname === task.path ? 600 : 400,
            borderBottom: location.pathname === task.path ? '2px solid white' : 'none',
            borderRadius: 0,
            px: 2,
            '&:focus': {
              outline: 'none',
            },
          }}
        >
          {task.label}
        </Button>
      ))}
    </Box>
  )
}
