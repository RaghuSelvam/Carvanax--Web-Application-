import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Register.css';
import { auth } from '../FireBase/FireBaseApp'; // Import the Firebase auth instance
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the Firebase auth function

// Validation Schema for Formik
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = async (values) => {
    const { firstName, lastName, email, password } = values;
    try {
      // Firebase sign-up logic
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Optionally, you can update the user's profile (e.g., adding name)
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });

      console.log('User registered:', user);
      // You can add further logic like redirecting the user to another page, etc.
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <Box
      className="RegisterPage"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        width="400px"
        p={4}
        sx={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        <Typography variant="h5" align="center" mb={3}>
          Sign Up
        </Typography>

        {/* Social Login Buttons */}
        <Button
          fullWidth
          variant="contained"
          startIcon={<FacebookIcon />}
          sx={{
            mb: 2,
            borderRadius: '24px',
            fontWeight: 300,
            backgroundColor: '#3b5998',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#334d84' },
            transition: 'all 0.3s',
          }}
        >
          Sign Up with Facebook
        </Button>
        <Button
          fullWidth
          startIcon={<GoogleIcon />}
          variant="contained"
          sx={{
            mb: 3,
            borderRadius: '24px',
            fontWeight: 300,
            backgroundColor: '#db4437',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#c33c2f' },
            transition: 'all 0.3s',
          }}
        >
          Sign Up with Google
        </Button>

        {/* Divider */}
        <Divider sx={{ mb: 3, color: 'black', fontSize: '14px' }}>OR</Divider>

        {/* Formik Form */}
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                label="First Name"
                name="firstName"
                variant="outlined"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '24px',
                    height: '45px',
                  },
                }} InputLabelProps={{
                  style: { fontSize: '12px' }, // Smaller label font size
                }}
              />

              <Field
                as={TextField}
                fullWidth
                label="Last Name"
                name="lastName"
                variant="outlined"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '24px',
                    height: '45px',
                  },
                }} InputLabelProps={{
                  style: { fontSize: '12px' }, // Smaller label font size
                }}
              />

              <Field
                as={TextField}
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '24px',
                    height: '45px',
                  },
                }} InputLabelProps={{
                  style: { fontSize: '12px' }, // Smaller label font size
                }}
              />

              <Field
                as={TextField}
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '24px',
                    height: '45px',
                  },
                }} InputLabelProps={{
                  style: { fontSize: '12px' }, // Smaller label font size
                }}
              />

              <Field
                as={TextField}
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                variant="outlined"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                helperText={touched.confirmPassword && errors.confirmPassword}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '24px',
                    height: '45px',
                  },
                }} InputLabelProps={{
                  style: { fontSize: '12px' }, // Smaller label font size
                }}
              />

              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  borderRadius: '24px',
                  backgroundColor: '#2E7D32',
                  fontWeight: 400,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#5a95e0' },
                }}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>

        {/* Login Link */}
        <Typography align="center" mt={3} sx={{ fontSize: '14px', color: 'grey' }}>
          Already have an account?{' '}
          <Link
            href="/"
            underline="hover"
            sx={{
              color: '#2E7D32',
              fontWeight: 500,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
