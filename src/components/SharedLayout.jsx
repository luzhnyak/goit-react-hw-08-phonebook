import { Container } from '@mui/material';
import ResponsiveAppBar from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom/dist';
import { getUser } from 'redux/selectors';

export const SharedLayout = () => {
  const { isRefreshing } = useSelector(getUser);

  return (
    <div>
      <Container maxWidth="sm" disableGutters>
        <ResponsiveAppBar />
        {isRefreshing ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        )}

        <Toaster position="top-right" />
      </Container>
    </div>
  );
};
