// import './App.css';
import { useState } from 'react';

import SearchBar from './searchBar/SearchBar';
// import Loader from './loader/Loader';
// import ErrorMessage from './errorMessage/ErrorMessage';
import ImageGallery from './imageGallery/ImageGallery';
import fetchPhotosWithTopic from './fetchPhotosWithTopic';

function App() {
  const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      // setPhotos([]);
      // setError(false);
      // setLoading(true);
      const data = await fetchPhotosWithTopic(topic);
      console.log(data.results);
      setPhotos(data.results);
    } catch (error) {
      // setError(true);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery items={photos} />} */}
      <ImageGallery photos={photos} />
    </div>
  );
}

export default App;
