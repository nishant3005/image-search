import React from 'react';
import { TextField as MUITextField } from '@mui/material';

const TextField = ({ value, onChange, placeholder }) => {
  return (
    <MUITextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      sx={{
        width: '80%',
        marginBottom: '16px',
        '& .MuiInputBase-root': {
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ddd',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#aaa',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#3f51b5',
        },
        '& .MuiInputBase-input': {
          fontSize: '16px',
          padding: '12px',
        },
        '& .MuiInputLabel-root': {
          fontSize: '14px',
          color: '#555',
        },
        '&.Mui-focused .MuiInputLabel-root': {
          color: '#3f51b5',
        },
      }}
    />
  );
};

export default TextField;
