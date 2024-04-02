// import './App.css';
import { useState } from 'react';

import SearchBar from './searchBar/SearchBar';
import ErrorMessage from './errorMessage/ErrorMessage';
import ImageGallery from './imageGallery/ImageGallery';
import fetchPhotosWithTopic from './fetchPhotosWithTopic';
import Loader from './loader/Loader';
import toast from 'react-hot-toast';
import { IoMdNotifications } from 'react-icons/io';

const notify = () =>
  toast('Whoops, something went wrong! Please try reloading this page!', {
    icon: <IoMdNotifications />,
    style: {
      borderRadius: '10px',
      background: 'red',
      color: '#fff',
    },
  });

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      setPhotos([]);
      setError(false);
      setLoading(true);
      const data = await fetchPhotosWithTopic(topic);
      console.log(data.results);
      setPhotos(data.results);
    } catch (error) {
      setError(true);
      notify();
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
    </div>
  );
}

export default App;
