import { Container } from '@mui/material';
import ResponsiveAppBar from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';

export const SharedLayout = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <ResponsiveAppBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
