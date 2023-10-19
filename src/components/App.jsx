import HomePage from 'pages/HomePages/HomePages';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import LoginPages from 'pages/LoginPages/LoginPages';
import RegisterPages from 'pages/RegisterPages/RegisterPages';
import { useEffect, useState } from 'react';
import { useGetCurrentUserQuery } from 'redux/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { setCredentials } from 'redux/authSlice';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const [skip, setSkip] = useState(true);
  const user = useGetCurrentUserQuery(null, { skip });
  const { token } = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || !user.isSuccess) return;
    console.log(user);
    const credentials = {
      name: user.data.name,
      isLoggedIn: true,
      isRefreshing: false,
    };
    dispatch(setCredentials(credentials));
  }, [user, token, dispatch]);

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
