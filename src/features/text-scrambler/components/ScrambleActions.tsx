import { Box, Button } from '@mui/material';

interface ScrambleActionsProps {
  onScramble: () => void;
  onReset: () => void;
  scrambleLabel?: string;
  resetLabel?: string;
}

export const ScrambleActions = ({ 
  onScramble, 
  onReset,
  scrambleLabel = 'Scramble Text',
  resetLabel = 'Reset'
}: ScrambleActionsProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <Button variant="contained" size="large" onClick={onScramble}>
        {scrambleLabel}
      </Button>
      <Button variant="outlined" size="large" onClick={onReset}>
        {resetLabel}
      </Button>
    </Box>
  );
};
