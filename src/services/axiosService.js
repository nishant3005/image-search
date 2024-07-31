import axios from 'axios';

const accessKey = process.env.REACT_APP_ACCESS_KEY;

export const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      client_id: accessKey,
    },
  });
  return response;
};
