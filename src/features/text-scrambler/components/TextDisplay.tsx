import { Paper, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

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
}))

interface TextDisplayProps {
  title: string
  content: string
}

export const TextDisplay = ({ title, content }: TextDisplayProps) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <TextBox elevation={1}>{content}</TextBox>
    </Box>
  )
}
