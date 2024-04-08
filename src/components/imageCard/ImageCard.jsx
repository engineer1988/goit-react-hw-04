import css from './ImageCard.module.css';

const ImageCart = ({ smallUrl, alt, clickPhoto, regularUrl }) => {
  return (
    <>
      <div>
        <img
          onClick={() => {
            clickPhoto(regularUrl);
          }}
          className={css.image_gallery_img}
          src={smallUrl}
          alt={alt}
        />
      </div>
    </>
  );
};
export default ImageCart;
