import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PeselForm } from '../features/pesel-validator/components/PeselForm';

export const PeselValidatorPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mb: 3 }}
        >
          Back to Home
        </Button>

        <Typography variant="h3" component="h1" gutterBottom>
          PESEL Validator
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Validate Polish PESEL identification numbers according to official specification.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <PeselForm />
        </Box>
      </Box>
    </Container>
  );
};
