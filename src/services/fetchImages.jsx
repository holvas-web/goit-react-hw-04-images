import axios from 'axios';

const API_KEY = '38934998-3e855f71d85cefaf04a1d7456';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: PER_PAGE,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
