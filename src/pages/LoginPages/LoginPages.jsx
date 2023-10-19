import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Formik } from 'formik';
import React from 'react';
import { useLoginMutation } from 'redux/authAPI';
import { setCredentials } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPages = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  // const navigate = useNavigate();

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
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
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
            />
            {/* {errors.email && touched.email && errors.email} */}
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
            />
            {/* {errors.password && touched.password && errors.password} */}
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
          </form>
        )}
      </Formik>
      <p>Don't have au acount?</p>
      <NavLink to="/register">Registration</NavLink>
    </Box>
  );
};

export default LoginPages;
