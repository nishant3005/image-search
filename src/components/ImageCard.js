import React from 'react';

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', padding: '10px' }}>
      <img src={image.urls.small} alt={image.description} />
      <p>{image.description || 'No Description'}</p>
    </div>
  );
};

export default ImageCard;
