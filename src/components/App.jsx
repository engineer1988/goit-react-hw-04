import { useState, useEffect } from 'react';
import SearchBar from './searchBar/SearchBar';
import ErrorMessage from './errorMessage/ErrorMessage';
import ImageGallery from './imageGallery/ImageGallery';
import { fetchPhotosWithLoadMore } from './fetchPhotosWithQuery';
import Loader from './loader/Loader';
import toast from 'react-hot-toast';
import { IoMdNotifications } from 'react-icons/io';
import LoadMoreBtn from './loadMoreBtn/LoadMoreBtn';
import ImageModal from './imageModal/ImageModal';

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
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [photoForModalWindow, setPhotoForModalWindow] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const clickPhoto = photo => {
    setPhotoForModalWindow(photo);
    openModal();
  };

  function closeModal() {
    setPhotoForModalWindow(null);
    setIsOpen(false);
  }

  useEffect(() => {
    const loadImages = async () => {
      try {
        {
          page === 1 && setPhotos([]);
        }
        setError(false);
        setLoading(true);
        const resData = await fetchPhotosWithLoadMore(query, page);
        setPhotos(prev => {
          return [...prev, ...resData.results];
        });
        setTotalPages(resData.total_pages);
      } catch (error) {
        setError(true);
        notify();
      } finally {
        setLoading(false);
        setShowBtn(totalPages && totalPages !== page);
      }
    };
    loadImages();
  }, [query, page, totalPages]);

  return (
    <div>
      <SearchBar onQuery={setQuery} setPage={setPage} />
      {page === 1 && loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClickPhoto={clickPhoto} />
      )}
      {page > 1 && loading && <Loader />}
      {showBtn && <LoadMoreBtn page={page} setPage={setPage} />}
      <ImageModal
        isFoto={photoForModalWindow}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
}

export default App;
