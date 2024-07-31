// src/contexts/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme] = useState({
    fontFamily: 'Inter, sans-serif',
    headline: {
      fontSize: '30px',
      fontWeight: '600',
      lineHeight: '38px',
    },
    title: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '24px',
    },
    description: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
    },
  });

  // Added states for images and search query
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeContext.Provider
      value={{ theme, images, setImages, searchQuery, setSearchQuery }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
