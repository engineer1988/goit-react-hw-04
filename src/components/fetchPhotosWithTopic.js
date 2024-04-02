import axios from 'axios';

export default async function fetchPhotosWithTopic(topic) {
  const params = new URLSearchParams({
    page: 1,
    per_page: 20,
  });

  const CLIENT_ID = 'vTU9R-MFhNM4fikKYX1a6ZvUIFY4QHxnr17U16Q1t-M';
  const URL = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${topic}&${params}`;

  const response = await axios.get(URL);
  return response.data;
}
