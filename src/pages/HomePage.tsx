import { Container, Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleIcon from '@mui/icons-material/People';

export const HomePage = () => {
  const navigate = useNavigate();

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
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Recruitment Tasks
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Select a task to explore
        </Typography>

        <Box
          sx={{
            mt: 4,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {tasks.map((task) => (
            <Card key={task.path} elevation={3}>
              <CardActionArea onClick={() => navigate(task.path)}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Box sx={{ mb: 2 }}>{task.icon}</Box>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {task.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {task.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
