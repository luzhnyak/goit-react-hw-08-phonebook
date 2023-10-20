import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useGetCurrentUserQuery } from 'redux/api';
import { getUser } from 'redux/selectors';
import { setCredentials } from 'redux/authSlice';

import { SharedLayout } from './SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('pages/HomePages/HomePages'));
const LoginPages = lazy(() => import('pages/LoginPages/LoginPages'));
const RegisterPages = lazy(() => import('pages/RegisterPages/RegisterPages'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const { token } = useSelector(getUser);
  const user = useGetCurrentUserQuery(null, { skip: !Boolean(token) });
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.error) {
      dispatch(
        setCredentials({
          token: null,
          isRefreshing: false,
          isLoggedIn: false,
          name: null,
        })
      );
    }
  }, [user.error, dispatch]);

  useEffect(() => {
    if (user.isFetching) {
      dispatch(
        setCredentials({
          isRefreshing: true,
        })
      );
    }

    if (token && user.isSuccess) {
      dispatch(
        setCredentials({
          name: user.data.name,
          isLoggedIn: true,
          isRefreshing: false,
        })
      );
    }
  }, [user, token, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/" component={<LoginPages />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterPages />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
