import { LoadingButton } from '@mui/lab';
import { Box, Link, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Formik } from 'formik';
import React from 'react';
import { useLoginMutation } from 'redux/api';
import { setCredentials } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPages = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  const handleSubmit = async values => {
    try {
      const { data } = await login(values);

      const credentials = {
        name: data.user.name,
        token: data.token,
        isLoggedIn: true,
      };

      dispatch(setCredentials(credentials));
    } catch (error) {
      toast.error('The email or password is incorrect!');
    }
  };

  return (
    <Box m={1}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ marginTop: '16px', color: 'green' }}
      >
        Login
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,

          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              color="success"
            />

            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              color="success"
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px',
              }}
            >
              <LoadingButton
                variant="contained"
                margin="normal"
                type="submit"
                color="success"
                loading={isLoading}
                loadingPosition="end"
                endIcon={<SendIcon />}
              >
                Login
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
      <Box sx={{ textAlign: 'center', marginTop: '24px', color: 'green' }}>
        <Typography variant="h6">Don't have an acount?</Typography>

        <Link component={NavLink} to="/register" sx={{ color: 'green' }}>
          Registration here
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPages;
