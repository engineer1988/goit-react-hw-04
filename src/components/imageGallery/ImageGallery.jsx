import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, onOpenModal, onClickPhoto }) => {
  return (
    <ul className={css.image_gallery}>
      {photos.map(image => {
        return (
          <li
            key={image.id}
            className={css.image_gallery_item}
            onClick={() => {
              onOpenModal();
              onClickPhoto(image.urls.regular);
            }}
          >
            <ImageCard
              smallUrl={image.urls.small}
              alt={image.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
