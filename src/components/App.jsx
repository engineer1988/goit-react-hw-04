// import './App.css';
import { useState, useEffect, useCallback } from 'react';

import SearchBar from './searchBar/SearchBar';
import ErrorMessage from './errorMessage/ErrorMessage';
import ImageGallery from './imageGallery/ImageGallery';
import fetchPhotosWithTopic from './fetchPhotosWithTopic';
import Loader from './loader/Loader';
import toast from 'react-hot-toast';
import { IoMdNotifications } from 'react-icons/io';
import LoadMoreBtn from './loadMoreBtn/LoadMoreBtn';

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
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);

  // console.log(page);

  const handleSearch = async topic => {
    try {
      setPhotos([]);
      setPage(1);
      setError(false);
      setLoading(true);
      const data = await fetchPhotosWithTopic(topic, page);
      setPhotos(prev => {
        return [...prev, ...data.results];
      });
    } catch (error) {
      setError(true);
      notify();
    } finally {
      setLoading(false);
    }
  };

  const handleSearch2 = useCallback(
    async topic => {
      try {
        // setPhotos([]);
        // setPage(1);
        setError(false);
        setLoading(true);
        const data = await fetchPhotosWithTopic(topic, page);
        setPhotos(prev => {
          return [...prev, ...data.results];
        });
      } catch (error) {
        setError(true);
        notify();
      } finally {
        setLoading(false);
      }
    },
    [page]
  );
  useEffect(() => {
    handleSearch2(topic);
  }, [handleSearch2, page, topic]);

  // const handleLoadMore = async topic => {
  //   try {
  //     setPhotos(photos);
  //     setError(false);
  //     setLoading(true);
  //     setPage(page + 1);
  //     const data = await fetchPhotosWithTopic(topic, page);
  //     setPhotos(prevPhotos => {
  //       [...prevPhotos, ...data.results];
  //     });
  //     // setPhotos(data.results);
  //     console.log(data.results);
  //   } catch (error) {
  //     setError(true);
  //     notify();
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div>
      <SearchBar onSearch={handleSearch} setTopic={setTopic} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {photos.length > 0 && <LoadMoreBtn setPage={setPage} page={page} />}
    </div>
  );
}

export default App;
