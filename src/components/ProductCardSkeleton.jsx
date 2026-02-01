import './ProductCardSkeleton.css';

const ProductCardSkeleton = () => {
  return (
    <div className="product-card-skeleton">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton skeleton-text skeleton-brand"></div>
      <div className="skeleton skeleton-text skeleton-model"></div>
      <div className="skeleton skeleton-text skeleton-price"></div>
    </div>
  );
};

export default ProductCardSkeleton;
