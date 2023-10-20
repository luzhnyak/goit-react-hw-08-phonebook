import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useGetCurrentUserQuery } from 'redux/authAPI';
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
  const [skip, setSkip] = useState(true);
  const user = useGetCurrentUserQuery(null, { skip });
  const { token } = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || !user.isSuccess) return;

    const credentials = {
      name: user.data.name,
      isLoggedIn: true,
      isRefreshing: false,
    };

    dispatch(setCredentials(credentials));
  }, [user, token, skip, dispatch]);

  useEffect(() => {
    if (token && skip) {
      setSkip(false);
      dispatch(setCredentials({ isRefreshing: true }));
    }
  }, [token, skip, dispatch]);

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
