import { Box, Typography, Paper } from '@mui/material';
import { PeselForm } from '../features/pesel-validator/components/PeselForm';

export const PeselValidatorPage = () => {
  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', py: { xs: 2, md: 4 } }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 3, md: 4 }, 
          mb: 4,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}
        >
          PESEL Validator
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Validate Polish PESEL identification numbers according to official specification.
        </Typography>
      </Paper>

      <PeselForm />
    </Box>
  );
};
