import { Paper, Typography, Box, Chip, Slide, Zoom } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import { type PeselData } from '../utils/extractPeselData'

interface ValidationResultCardProps {
  data: PeselData | null
}

export const ValidationResultCard = ({ data }: ValidationResultCardProps) => {
  if (!data) {
    return (
      <Zoom in timeout={400}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <ErrorIcon color="error" sx={{ fontSize: 32 }} />
          <Box>
            <Typography variant="h6" color="error.main" gutterBottom>
              Invalid PESEL
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The provided PESEL number is invalid or contains an incorrect date.
            </Typography>
          </Box>
        </Box>
      </Zoom>
    )
  }

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date)
  }

  return (
    <Box>
      <Zoom in timeout={400}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <CheckCircleIcon color="success" sx={{ fontSize: 32 }} />
          <Typography variant="h6" color="success.main">
            Valid PESEL Number
          </Typography>
        </Box>
      </Zoom>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 3,
        }}
      >
        <Slide direction="right" in timeout={500}>
          <Paper
            variant="outlined"
            sx={{
              p: 2.5,
              bgcolor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
              Date of Birth
            </Typography>
            <Typography variant="h6" fontWeight="medium">
              {formatDate(data.birthDate)}
            </Typography>
          </Paper>
        </Slide>

        <Slide direction="left" in timeout={500}>
          <Paper
            variant="outlined"
            sx={{
              p: 2.5,
              bgcolor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
              Gender
            </Typography>
            <Chip
              label={data.gender === 'male' ? 'Male' : 'Female'}
              color={data.gender === 'male' ? 'primary' : 'secondary'}
              size="medium"
              sx={{ mt: 0.5, fontWeight: 600 }}
            />
          </Paper>
        </Slide>
      </Box>
    </Box>
  )
}
