import './ProductImage.css';

const ProductImage = ({ imgUrl, brand, model }) => {
  return (
    <div className="product-image-container">
      <img 
        src={imgUrl} 
        alt={`${brand} ${model}`}
        className="product-detail-image"
      />
    </div>
  );
};

export default ProductImage;
