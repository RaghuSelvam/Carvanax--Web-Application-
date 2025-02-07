import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`container ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.5s ease',
      }}
    >
      <div>
        <h1>The current theme is {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default ThemedComponent;
// 1111111111 firstuh
