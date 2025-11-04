import { Box, Alert } from '@mui/material';
import { useState } from 'react';
import { FileUploadZone } from '../features/text-scrambler/components/FileUploadZone';
import { TextComparison } from '../features/text-scrambler/components/TextComparison';
import { ScrambleActions } from '../features/text-scrambler/components/ScrambleActions';
import { useFileReader } from '../features/text-scrambler/hooks/useFileReader';
import { scrambleText } from '../features/text-scrambler/utils/scrambleText';
import { PageHeader } from '../components/molecules/PageHeader';
import { PageTitle } from '../components/atoms/PageTitle';
import { PageDescription } from '../components/atoms/PageDescription';

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

  const hasContent = Boolean(content);
  const hasScrambledContent = Boolean(scrambledContent);

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <PageHeader>
        <PageTitle>Text Scrambler</PageTitle>
        <PageDescription>
          Upload a text file and scramble the letters in each word while preserving the first and last characters.
        </PageDescription>
      </PageHeader>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {!hasScrambledContent && (
        <Box sx={{ mb: 4 }}>
          <FileUploadZone onFileSelect={handleFileSelect} fileName={fileName} />
        </Box>
      )}

      {hasContent && !hasScrambledContent && (
        <ScrambleActions onScramble={handleScramble} onReset={handleReset} />
      )}

      {hasContent && hasScrambledContent && (
        <>
          <TextComparison originalText={content!} scrambledText={scrambledContent!} />
          <Box sx={{ mt: 4 }}>
            <ScrambleActions 
              onScramble={handleScramble} 
              onReset={handleReset}
              scrambleLabel="Scramble Again"
              resetLabel="Upload New File"
            />
          </Box>
        </>
      )}
    </Box>
  );
};
