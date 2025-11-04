import { useState } from 'react';
import { Box, TextField, Button, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { validatePesel } from '../utils/validatePesel';
import { extractPeselData, type PeselData } from '../utils/extractPeselData';
import { ValidationResultCard } from './ValidationResultCard';

const peselSchema = z.object({
  pesel: z
    .string()
    .min(1, 'PESEL is required')
    .regex(/^\d{11}$/, 'PESEL must contain exactly 11 digits')
    .refine((val) => validatePesel(val), {
      message: 'Invalid PESEL number',
    }),
});

type PeselFormData = z.infer<typeof peselSchema>;

export const PeselForm = () => {
  const [validationResult, setValidationResult] = useState<PeselData | null>(null);
  const [showResult, setShowResult] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PeselFormData>({
    resolver: zodResolver(peselSchema),
  });

  const onSubmit = (data: PeselFormData) => {
    const result = extractPeselData(data.pesel);
    setValidationResult(result);
    setShowResult(true);
  };

  const handleReset = () => {
    reset();
    setShowResult(false);
    setValidationResult(null);
  };

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('pesel')}
            label="PESEL Number"
            fullWidth
            error={!!errors.pesel}
            helperText={errors.pesel?.message}
            placeholder="Enter 11-digit PESEL number"
            sx={{ mb: 3 }}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button type="submit" variant="contained" size="large">
              Validate
            </Button>
            <Button type="button" variant="outlined" size="large" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </form>
      </Paper>

      {showResult && <ValidationResultCard data={validationResult} />}
    </Box>
  );
};
