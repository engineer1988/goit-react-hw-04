import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ page, setPage }) => {
  return (
    <div className={css.loadMoreBtn_div}>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
