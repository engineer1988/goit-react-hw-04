import css from './ImageCard.module.css';

const ImageCart = ({ smallUrl, alt }) => {
  return (
    <>
      <div>
        <img className={css.image_gallery_img} src={smallUrl} alt={alt} />
      </div>
    </>
  );
};
export default ImageCart;
