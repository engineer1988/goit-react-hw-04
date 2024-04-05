import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { IoMdNotifications } from 'react-icons/io';
const notify = () =>
  toast('Please enter search term!', {
    icon: <IoMdNotifications />,
    style: {
      borderRadius: '10px',
      background: 'red',
      color: '#fff',
    },
  });

const SearchBar = ({ onSearch, onQuery, page, onPage }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.image.value;
    if (form.elements.image.value.trim() === '') {
      notify();
      return;
    }
    onQuery(query);
    onSearch(query, page);
    form.reset();
  };

  return (
    <>
      <header className={css.search_bar_header}>
        <form onSubmit={handleSubmit} className={css.search_bar_form}>
          <input
            className={css.search_bar_input}
            name="image"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
          />
          <button
            onClick={() => onPage(1)}
            className={css.search_bar_button}
            type="submit"
          >
            Search
          </button>
          <Toaster position="bottom-center" reverseOrder={false} />
        </form>
      </header>
    </>
  );
};
export default SearchBar;
