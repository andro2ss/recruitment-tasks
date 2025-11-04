import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainContent = styled(Box)`
  min-height: calc(100vh - 64px);
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem 0;
`;

export const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              cursor: 'pointer',
              fontWeight: 600,
            }}
            onClick={() => navigate('/')}
          >
            Recruitment Tasks
          </Typography>
        </Toolbar>
      </AppBar>
      
      <MainContent>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </MainContent>
    </Box>
  );
};
