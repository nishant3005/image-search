// src/pages/Details.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image } = location.state;

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Button onClick={handleBackClick}>Back</Button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>{image.description || 'No Description'}</h1>
        <img
          src={image.urls.regular}
          alt={image.description}
          style={{ height: '600px', width: '600px' }}
        />
      </div>
    </div>
  );
};

export default Details;
