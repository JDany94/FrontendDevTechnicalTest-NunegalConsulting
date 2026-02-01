import "./ProductDescription.css";

const ProductDescription = ({ product }) => {
  return (
    <div className="product-description">
      <h2 className="product-title">
        {product.brand} {product.model}
      </h2>

      <div className="description-list">
        <div className="description-item">
          <span className="description-label">Brand:</span>
          <span className="description-value">{product.brand}</span>
        </div>

        <div className="description-item">
          <span className="description-label">Model:</span>
          <span className="description-value">{product.model}</span>
        </div>

        <div className="description-item">
          <span className="description-label">Price:</span>
          <span className="description-value price">{product.price}€</span>
        </div>

        <div className="description-item">
          <span className="description-label">CPU:</span>
          <span className="description-value">{product.cpu}</span>
        </div>

        <div className="description-item">
          <span className="description-label">RAM:</span>
          <span className="description-value">{product.ram}</span>
        </div>

        <div className="description-item">
          <span className="description-label">Operating System:</span>
          <span className="description-value">{product.os}</span>
        </div>

        <div className="description-item">
          <span className="description-label">Screen Resolution:</span>
          <span className="description-value">{product.displayResolution}</span>
        </div>

        <div className="description-item">
          <span className="description-label">Battery:</span>
          <span className="description-value">{product.battery}</span>
        </div>

        <div className="description-item">
          <span className="description-label">Cameras:</span>
          <span className="description-value">
            {product.primaryCamera} (Primary) / {product.secondaryCmera}{" "}
            (Secondary)
          </span>
        </div>

        <div className="description-item">
          <span className="description-label">Dimensions:</span>
          <span className="description-value">{product.dimentions}</span>
        </div>

        <div className="description-item">
          <span className="description-label">Weight:</span>
          <span className="description-value">{product.weight}g</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
