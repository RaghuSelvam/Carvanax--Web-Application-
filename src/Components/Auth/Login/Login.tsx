import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth } from "../FireBase/FireBaseApp"; // Import only auth
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth"; // Updated imports
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { onAuthStateChanged } from "firebase/auth"; // Import for checking auth state
import "./Login.css";

// Validation schema for the login form
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLoginClick = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("Logged in with email and password:", userCredential.user);
      // Redirect to /home after successful login
      navigate("/home");
    } catch (error) {
      console.error("Error with email/password login: ", error.message);
      // Optionally, show an error message to the user
    }
  };

  // Google Login Function
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        console.log("Google login successful: ", result.user);
        // Redirect to /home after successful login
        navigate("/home");
      } else {
        alert("Authentication failed. Please try again.");
      }
    } catch (error) {
      console.error("Error with Google login: ", error.message);
      alert("Google login failed. Please try again.");
    }
  };

  // Facebook Login Function
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        console.log("Facebook login successful: ", result.user);
        // Redirect to /home after successful login
        navigate("/home");
      }
    } catch (error) {
      console.error("Error with Facebook login: ", error.message);
      alert("Facebook login failed. Please try again.");
    }
  };

  // Handle Guest Login Function
  const handleGuestLogin = () => {
    console.log("Logging in as guest");
    // Redirect to /home as a guest
    navigate("/home");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is already authenticated, redirect to home/dashboard
        navigate("/home", { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <Box
      className="LoginPage"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        width="400px"
        p={4}
        sx={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          mb={3}
          sx={{ fontWeight: "500", color: "#333" }}
        >
          Login
        </Typography>

        {/* Google and Facebook Login Buttons */}
        <Button
          fullWidth
          variant="contained"
          startIcon={<FacebookIcon />}
          sx={{
            mb: 2,
            borderRadius: "24px",
            fontWeight: 300,
            backgroundColor: "#3b5998",
            textTransform: "none",
            "&:hover": { backgroundColor: "#334d84" },
            transition: "all 0.3s",
          }}
          onClick={handleFacebookLogin}
        >
          Login with Facebook
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{
            mb: 3,
            borderRadius: "24px",
            fontWeight: 300,
            backgroundColor: "#db4437",
            textTransform: "none",
            "&:hover": { backgroundColor: "#c33c2f" },
            transition: "all 0.3s",
          }}
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>

        <Divider sx={{ mb: 3 }}>OR</Divider>

        {/* Formik Form */}
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <Field
                fullWidth
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                as={TextField}
                helperText={<ErrorMessage name="email" />}
                error={touched.email && Boolean(errors.email)}
                sx={{
                  mb: 2,
                  "& .MuiInputBase-root": { height: "45px" },
                  "& .MuiOutlinedInput-input": {
                    padding: "18.5px 14px",
                  },
                }}
                InputLabelProps={{ style: { fontSize: "12px" } }}
              />
              <Field
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                as={TextField}
                helperText={<ErrorMessage name="password" />}
                error={touched.password && Boolean(errors.password)}
                sx={{
                  mb: 2,
                  "& .MuiInputBase-root": { height: "45px" },
                  "& .MuiOutlinedInput-input": {
                    padding: "18.5px 14px",
                  },
                }}
                InputLabelProps={{ style: { fontSize: "12px" } }}
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                onClick={() => handleLoginClick(values)}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>

        <Typography
          align="center"
          mt={3}
          sx={{ fontSize: "14px", color: "grey" }}
        >
          Don't have an account?{" "}
          <Link href="/register" underline="hover" sx={{ color: "#2E7D32" }}>
            Sign up
          </Link>
        </Typography>

        {/* Login as Guest Button */}
        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 3,
            borderRadius: "24px",
            fontWeight: 300,
            textTransform: "none",
          }}
          onClick={handleGuestLogin}
        >
          Login as Guest
        </Button>
      </Box>
    </Box>
  );
};
