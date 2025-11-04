import { useState } from 'react'
import { IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate, useLocation } from 'react-router-dom'

const tasks = [
  { path: '/text-scrambler', label: 'Text Scrambler' },
  { path: '/pesel-validator', label: 'PESEL Validator' },
  { path: '/users', label: 'Users' },
]

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(true)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250, pt: 2 }}>
          {tasks.map((task) => (
            <ListItem key={task.path} disablePadding>
              <ListItemButton
                selected={location.pathname === task.path}
                onClick={() => handleNavigate(task.path)}
              >
                <ListItemText primary={task.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
