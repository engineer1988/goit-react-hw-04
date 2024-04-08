import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onAddPage }) => {
  return (
    <div className={css.loadMoreBtn_div}>
      <button
        onClick={() => {
          onAddPage();
        }}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
