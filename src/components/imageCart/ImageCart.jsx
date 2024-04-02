const ImageCart = ({ smallUrl, regularUrl, alt }) => {
  return (
    <>
      <a href={regularUrl}>
        <img src={smallUrl} alt={alt} />
      </a>
    </>
  );
};
export default ImageCart;
