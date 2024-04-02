import ImageCart from '../imageCart/ImageCart';
const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos.map(image => {
        return (
          <li key={image.id}>
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
