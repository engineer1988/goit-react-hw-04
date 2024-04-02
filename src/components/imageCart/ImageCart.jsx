import css from './ImageCart.module.css';

const ImageCart = ({ smallUrl, regularUrl, alt }) => {
  return (
    <>
      <a href={regularUrl}>
        <img className={css.image_gallery_img} src={smallUrl} alt={alt} />
      </a>
    </>
  );
};
export default ImageCart;
