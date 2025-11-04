import { Box, Typography, Card, CardContent, CardActionArea, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import BadgeIcon from '@mui/icons-material/Badge'
import PeopleIcon from '@mui/icons-material/People'
import styled from 'styled-components'

const HeroSection = styled(Paper)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 4rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`

const TaskCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`

export const HomePage = () => {
  const navigate = useNavigate()

  const tasks = [
    {
      title: 'Text Scrambler',
      description: 'Upload a text file and scramble letters in each word',
      icon: <TextFieldsIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      path: '/text-scrambler',
    },
    {
      title: 'PESEL Validator',
      description: 'Validate Polish PESEL numbers with official specification',
      icon: <BadgeIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      path: '/pesel-validator',
    },
    {
      title: 'Users Management',
      description: 'Browse, search and edit users from GoRest API',
      icon: <PeopleIcon sx={{ fontSize: 60, color: 'success.main' }} />,
      path: '/users',
    },
  ]

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <HeroSection elevation={0}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome to Recruitment Tasks
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          Three modern React applications showcasing TypeScript, Material-UI, and best practices
        </Typography>
      </HeroSection>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.path} elevation={3}>
            <CardActionArea onClick={() => navigate(task.path)} sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', py: 4, px: 3 }}>
                <Box sx={{ mb: 2 }}>{task.icon}</Box>
                <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
                  {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </TaskCard>
        ))}
      </Box>
    </Box>
  )
}
