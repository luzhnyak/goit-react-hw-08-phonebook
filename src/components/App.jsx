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
      isLoginIn: true,
    };
    dispatch(setCredentials(credentials));
  }, [user, token, dispatch]);

  useEffect(() => {
    if (token) setSkip(false);
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPages />} />
        <Route path="register" element={<RegisterPages />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
