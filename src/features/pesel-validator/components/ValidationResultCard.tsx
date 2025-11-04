import { Paper, Typography, Box, Alert, Chip } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import { type PeselData } from '../utils/extractPeselData'

interface ValidationResultCardProps {
  data: PeselData | null
}

export const ValidationResultCard = ({ data }: ValidationResultCardProps) => {
  if (!data) {
    return (
      <Alert severity="error" icon={<ErrorIcon />}>
        <Typography variant="h6">Invalid PESEL</Typography>
        <Typography variant="body2">
          The provided PESEL number is invalid or contains an incorrect date.
        </Typography>
      </Alert>
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
    <Alert severity="success" icon={<CheckCircleIcon />}>
      <Typography variant="h6" gutterBottom>
        Valid PESEL Number
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mt: 2, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="caption" color="text.secondary" display="block">
              Date of Birth
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {formatDate(data.birthDate)}
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color="text.secondary" display="block">
              Gender
            </Typography>
            <Chip
              label={data.gender === 'male' ? 'Male' : 'Female'}
              color={data.gender === 'male' ? 'primary' : 'secondary'}
              size="small"
              sx={{ mt: 0.5 }}
            />
          </Box>
        </Box>
      </Paper>
    </Alert>
  )
}
