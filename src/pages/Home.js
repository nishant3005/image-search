import React, { useState, useEffect } from 'react';
import { fetchImages } from '../services/axiosService';
import ImageCard from '../components/ImageCard';
import Pagination from '../components/Pagination';
import TextField from '../components/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      fetchImages(searchQuery, page)
        .then((response) => {
          setImages(response.data.results);
        })
        .catch((error) => {
          console.error(
            'Error fetching images:',
            error.response || error.message
          );
        });
    }
  }, [searchQuery, page]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleImageClick = (image) => {
    navigate('/details', { state: { image } });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search images..."
      />
      <div className="home-style">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <Pagination count={10} page={page} onChange={handlePageChange} />
    </div>
  );
};

export default Home;
