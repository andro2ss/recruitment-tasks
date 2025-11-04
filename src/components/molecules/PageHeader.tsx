import { Paper } from '@mui/material';
import { type ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => {
  return (
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
      {children}
    </Paper>
  );
};
