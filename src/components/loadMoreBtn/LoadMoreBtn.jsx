import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoad, onQuery, page, addPage }) => {
  return (
    <div className={css.loadMoreBtn_div}>
      <button
        onClick={() => {
          addPage(page);
          onLoad(onQuery, page);
        }}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
