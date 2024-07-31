import axios from 'axios';

const accessKey = process.env.REACT_APP_ACCESS_KEY;

export const fetchImages = async (query, page, perPage = 6) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: accessKey,
    },
  });
  return response;
};
