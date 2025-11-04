import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from '../molecules/Navigation';
import { MobileMenu } from '../molecules/MobileMenu';
import { Footer } from '../organisms/Footer';

const MainContent = styled(Box)`
  min-height: calc(100vh - 64px - 73px);
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem 0;
`;

export const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
          
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Navigation />
          </Box>
          
          <MobileMenu />
        </Toolbar>
      </AppBar>
      
      <MainContent>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </MainContent>
      
      <Footer />
    </Box>
  );
};
