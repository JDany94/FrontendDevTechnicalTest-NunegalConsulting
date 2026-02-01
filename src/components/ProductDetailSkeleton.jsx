import './ProductDetailSkeleton.css';

const ProductDetailSkeleton = () => {
  return (
    <div className="product-detail-skeleton">
      <div className="skeleton-back-link skeleton"></div>
      
      <div className="product-detail-skeleton-container">
        <div className="skeleton-left">
          <div className="skeleton skeleton-detail-image"></div>
        </div>
        
        <div className="skeleton-right">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton-description-list">
            {[...Array(11)].map((_, i) => (
              <div key={i} className="skeleton-description-item">
                <div className="skeleton skeleton-label"></div>
                <div className="skeleton skeleton-value"></div>
              </div>
            ))}
          </div>
          <div className="skeleton skeleton-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
