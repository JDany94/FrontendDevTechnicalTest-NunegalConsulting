import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
      </div>
      <div className="product-info">
        <h3 className="product-brand">{product.brand}</h3>
        <p className="product-model">{product.model}</p>
        <p className="product-price">{product.price}€</p>
      </div>
    </Link>
  );
};

export default ProductCard;
