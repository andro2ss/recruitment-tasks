import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Recruitment Tasks
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/adrian-brzeski/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="https://github.com/andro2ss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              color="primary"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
