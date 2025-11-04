import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TextScramblerPage } from './pages/TextScramblerPage';
import { PeselValidatorPage } from './pages/PeselValidatorPage';
import { UsersPage } from './pages/UsersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/text-scrambler',
    element: <TextScramblerPage />,
  },
  {
    path: '/pesel-validator',
    element: <PeselValidatorPage />,
  },
  {
    path: '/users',
    element: <UsersPage />,
  },
]);
