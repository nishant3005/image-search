import React from 'react';
import { TextField as MUITextField } from '@mui/material';

const TextField = ({ value, onChange, placeholder }) => {
  return (
    <MUITextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
    />
  );
};

export default TextField;
