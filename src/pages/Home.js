import React, { useState, useEffect } from 'react';
import { fetchImages } from '../services/axiosService';
import ImageCard from '../components/ImageCard';
import Pagination from '../components/Pagination';
import TextField from '../components/TextField';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ThemedText from '../components/ThemedText';

const Home = () => {
  const { theme, images, setImages, searchQuery, setSearchQuery } = useTheme();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const perPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        try {
          const response = await fetchImages(searchQuery, page, perPage);
        //   console.log(response.data);
          setTotalPages(Math.ceil(response.data.total_pages / perPage));
        //   console.log(totalPages);
          setImages(response.data.results);
        //   console.log(images.length);
        } catch (error) {
          console.error(
            'Error fetching images:',
            error.response || error.message
          );
        }
      }
    };

    fetchData();
  }, [searchQuery, page, setImages]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1);
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
        alignItems: 'center',
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        marginBottom: '30px',
      }}
    >
      <div
        style={{ marginTop: '20px', marginBottom: '30px', textAlign: 'center' }}
      >
        <div style={{ marginBottom: '10px' }}>
          <ThemedText type="headline">
            Welcome to the Image Search App
          </ThemedText>
        </div>
        <ThemedText type="title">Search for Your Favorite Images</ThemedText>
        <ThemedText type="description">
          Find beautiful images from Unsplash.
        </ThemedText>
      </div>
      <TextField
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search images..."
      />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          padding: '20px',
        }}
      >
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <Pagination count={totalPages} page={page} onChange={handlePageChange} />
    </div>
  );
};

export default Home;
