import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ImageCard = ({ image, onClick }) => {
  const { theme } = useTheme();
  const capitalizeFirstLetter = (text) => {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        padding: '10px',
        width: '350px',
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      }}
    >
      <img
        src={image.urls.small}
        alt={image.alt_description}
        style={{
          height: '300px',
          width: '350px',
          borderRadius: '10px 10px 0 0',
        }}
      />
      <p
        style={{
          width: '350px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginTop: '10px',
          fontFamily: theme.fontFamily,
          fontSize: theme.description.fontSize,
          fontWeight: theme.description.fontWeight,
          lineHeight: theme.description.lineHeight,
          color: '#333',
        }}
      >
        {capitalizeFirstLetter(
          image.alt_description ? image.alt_description : image.description
        ) || 'No Description'}
      </p>
    </div>
  );
};

export default ImageCard;
