import ImageCart from '../imageCart/ImageCart';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.image_gallery}>
      {photos.map(image => {
        return (
          <li key={image.id} className={css.image_gallery_item}>
            <ImageCart
              smallUrl={image.urls.small}
              regularUrl={image.urls.regular}
              alt={image.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
