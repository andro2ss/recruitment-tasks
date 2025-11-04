import { TextField, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface UserSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const UserSearchBar = ({ value, onChange }: UserSearchBarProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 0,
        mb: 3,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
      }}
    >
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
          '& .MuiOutlinedInput-root': {
            background: 'transparent',
          },
        }}
      />
    </Paper>
  );
};
