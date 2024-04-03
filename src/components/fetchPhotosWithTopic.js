import axios from 'axios';

export default async function fetchPhotosWithTopic(topic, page) {
  const params = new URLSearchParams({
    page: page,
    per_page: 12,
  });

  const CLIENT_ID = 'vTU9R-MFhNM4fikKYX1a6ZvUIFY4QHxnr17U16Q1t-M';
  const URL = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${topic}&${params}`;

  const response = await axios.get(URL);
  return response.data;
}
