import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { useTheme } from '../contexts/ThemeContext';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image } = location.state;
  const { theme } = useTheme();

  const handleBackClick = () => {
    navigate('/');
  };

  const capitalizeFirstLetter = (text) => {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: theme.fontFamily }}>
      <Button onClick={handleBackClick}>Back</Button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1 style={{ ...theme.headline, margin: '20px 0' }}>
          {capitalizeFirstLetter(image.alt_description) || 'No Description'}
        </h1>
        <img
          src={image.urls.regular}
          alt={image.alt_description || 'Image'}
          style={{
            maxHeight: '600px',
            maxWidth: '100%',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            objectFit: 'cover',
          }}
        />
        <h2 style={{ ...theme.title, margin: '10px 0', fontSize: '24px' }}>
          Image Details
        </h2>
        <p style={{ ...theme.description }}>
          <strong style={{ fontSize: '16px' }}>Description:</strong>{' '}
          {capitalizeFirstLetter(
            image.description ? image.description : image.alt_description
          ) || 'N/A'}
        </p>
        <p style={{ ...theme.description }}>
          <strong style={{ fontSize: '16px' }}>Asset Type:</strong>{' '}
          {image.asset_type || 'N/A'}
        </p>
        <p style={{ ...theme.description }}>
          <strong style={{ fontSize: '16px' }}>Created At:</strong>{' '}
          {formatDate(image.created_at) || 'N/A'}
        </p>
        <div>
          <strong
            style={{ fontWeight: '600', fontSize: '16px', marginTop: '10px' }}
          >
            Tags:
          </strong>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: '5px',
            }}
          >
            {image.tags && image.tags.length > 0 ? (
              image.tags.map((tag, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    borderRadius: '15px',
                    padding: '5px 10px',
                    margin: '5px',
                    fontFamily: theme.fontFamily,
                    fontSize: theme.description.fontSize,
                    fontWeight: theme.description.fontWeight,
                    lineHeight: theme.description.lineHeight,
                  }}
                >
                  {tag.title}
                </li>
              ))
            ) : (
              <li style={{ ...theme.description }}>No Tags Available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
