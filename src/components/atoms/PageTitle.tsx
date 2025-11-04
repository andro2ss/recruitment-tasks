import { Typography } from '@mui/material';
import { type ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <Typography 
      variant="h3" 
      component="h1" 
      gutterBottom
      sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }}
    >
      {children}
    </Typography>
  );
};
