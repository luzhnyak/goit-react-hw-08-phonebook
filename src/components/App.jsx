import HomePage from 'pages/HomePages/HomePages';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import LoginPages from 'pages/LoginPages/LoginPages';
import RegisterPages from 'pages/RegisterPages/RegisterPages';

export const App = () => {
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
