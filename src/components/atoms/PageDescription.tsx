import { Typography } from '@mui/material';
import { type ReactNode } from 'react';

interface PageDescriptionProps {
  children: ReactNode;
}

export const PageDescription = ({ children }: PageDescriptionProps) => {
  return (
    <Typography variant="body1" color="text.secondary">
      {children}
    </Typography>
  );
};
