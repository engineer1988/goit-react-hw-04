import axios from 'axios';

export default async function fetchPhotosWithTopic(topic) {
  const params = new URLSearchParams({
    //   image_type: 'photo',
    //   orientation: 'horizontal',
    //   safesearch: 'true',
    page: 1,
    per_page: 20,
  });

  const CLIENT_ID = 'vTU9R-MFhNM4fikKYX1a6ZvUIFY4QHxnr17U16Q1t-M';
  const URL = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${topic}&${params}`;

  const response = await axios.get(URL);
  // totalHits = response.data.totalHits;
  return response.data;
}
