import { Box, Typography, Button, Alert, Paper } from '@mui/material';
import { useState } from 'react';
import { FileUploadZone } from '../features/text-scrambler/components/FileUploadZone';
import { TextComparison } from '../features/text-scrambler/components/TextComparison';
import { useFileReader } from '../features/text-scrambler/hooks/useFileReader';
import { scrambleText } from '../features/text-scrambler/utils/scrambleText';

export const TextScramblerPage = () => {
  const { content, fileName, error, readFile, reset } = useFileReader();
  const [scrambledContent, setScrambledContent] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    readFile(file);
    setScrambledContent(null);
  };

  const handleScramble = () => {
    if (content) {
      const scrambled = scrambleText(content);
      setScrambledContent(scrambled);
    }
  };

  const handleReset = () => {
    reset();
    setScrambledContent(null);
  };

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
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
          Text Scrambler
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Upload a text file and scramble the letters in each word while preserving the first and last characters.
        </Typography>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ mb: 4 }}>
        <FileUploadZone onFileSelect={handleFileSelect} fileName={fileName} />
      </Box>

      {content && !scrambledContent && (
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <Button variant="contained" size="large" onClick={handleScramble}>
            Scramble Text
          </Button>
          <Button variant="outlined" size="large" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      )}

      {content && scrambledContent && (
        <>
          <TextComparison originalText={content} scrambledText={scrambledContent} />
          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <Button variant="contained" size="large" onClick={handleScramble}>
              Scramble Again
            </Button>
            <Button variant="outlined" size="large" onClick={handleReset}>
              Upload New File
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
