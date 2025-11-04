import { Box, Paper, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const TextBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  minHeight: '200px',
  maxHeight: '400px',
  overflow: 'auto',
  fontFamily: 'monospace',
  fontSize: '14px',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
}));

interface TextComparisonProps {
  originalText: string;
  scrambledText: string;
}

export const TextComparison = ({ originalText, scrambledText }: TextComparisonProps) => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Original Text
        </Typography>
        <TextBox elevation={1}>{originalText}</TextBox>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Scrambled Text
        </Typography>
        <TextBox elevation={1}>{scrambledText}</TextBox>
      </Box>
    </Box>
  );
};
