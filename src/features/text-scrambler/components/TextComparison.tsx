import { Box } from '@mui/material'
import { TextDisplay } from './TextDisplay'

interface TextComparisonProps {
  originalText: string
  scrambledText: string
}

export const TextComparison = ({ originalText, scrambledText }: TextComparisonProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 3,
      }}
    >
      <TextDisplay title="Original Text" content={originalText} />
      <TextDisplay title="Scrambled Text" content={scrambledText} />
    </Box>
  )
}
