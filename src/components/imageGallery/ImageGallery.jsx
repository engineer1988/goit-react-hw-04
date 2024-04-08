import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, onClickPhoto }) => {
  return (
    <ul className={css.image_gallery}>
      {photos.map(image => {
        return (
          <li key={image.id} className={css.image_gallery_item}>
            <ImageCard
              smallUrl={image.urls.small}
              regularUrl={image.urls.regular}
              alt={image.alt_description}
              clickPhoto={onClickPhoto}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
