import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Formik } from 'formik';
import React from 'react';
import { useGetCurrentUserQuery, useLoginMutation } from 'redux/authAPI';

const LoginPages = () => {
  const [login, { isLoading }] = useLoginMutation();
  //   const [getCurrentUser, info] = useGetCurrentUserQuery();
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
        onSubmit={(values, { setSubmitting }) => {
          login(values);
          //   getCurrentUser();
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 400);
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
    </Box>
  );
};

export default LoginPages;
