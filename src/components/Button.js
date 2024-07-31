// src/components/Button.js
import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({ onClick, children }) => {
  return (
    <MUIButton variant="contained" onClick={onClick}>
      {children}
    </MUIButton>
  );
};

export default Button;
