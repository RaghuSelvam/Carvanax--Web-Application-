
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';
import './contextstyle.css'; // Ensure you import your CSS

const LikeApp = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default LikeApp; 
// main _111
