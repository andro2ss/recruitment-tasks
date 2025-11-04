import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface UserSearchBarProps {
  value: string
  onChange: (value: string) => void
}

export const UserSearchBar = ({ value, onChange }: UserSearchBarProps) => {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name or email..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        mb: 3,
        '& .MuiOutlinedInput-root': {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
          '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.2)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
            borderWidth: '2px',
          },
          '&:focus': {
            outline: 'none',
          },
        },
        '& .MuiOutlinedInput-input': {
          '&:focus': {
            outline: 'none',
          },
        },
      }}
    />
  )
}
