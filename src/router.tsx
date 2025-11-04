import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { MainLayout } from './components/templates/MainLayout';
import { HomePage } from './pages/HomePage';

const TextScramblerPage = lazy(() => import('./pages/TextScramblerPage').then(module => ({ default: module.TextScramblerPage })));
const PeselValidatorPage = lazy(() => import('./pages/PeselValidatorPage').then(module => ({ default: module.PeselValidatorPage })));
const UsersPage = lazy(() => import('./pages/UsersPage').then(module => ({ default: module.UsersPage })));

const LoadingFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
    <CircularProgress />
  </Box>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'text-scrambler',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <TextScramblerPage />
          </Suspense>
        ),
      },
      {
        path: 'pesel-validator',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PeselValidatorPage />
          </Suspense>
        ),
      },
      {
        path: 'users',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <UsersPage />
          </Suspense>
        ),
      },
    ],
  },
]);
