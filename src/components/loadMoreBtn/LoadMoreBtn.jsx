import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoad, query, page, onAddPage }) => {
  return (
    <div className={css.loadMoreBtn_div}>
      <button
        onClick={() => {
          onAddPage(page);
          onLoad(query, page);
        }}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
