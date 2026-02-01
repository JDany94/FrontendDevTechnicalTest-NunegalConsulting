import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../services/api";
import ProductImage from "../components/ProductImage";
import ProductDescription from "../components/ProductDescription";
import ProductActions from "../components/ProductActions";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <Link to="/" className="back-link">
          ← Back to products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <p>Product not found</p>
        <Link to="/" className="back-link">
          ← Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <Link to="/" className="back-link">
        ← Back to product list
      </Link>

      <div className="product-detail-container">
        <div className="product-left">
          <ProductImage
            imgUrl={product.imgUrl}
            brand={product.brand}
            model={product.model}
          />
        </div>

        <div className="product-right">
          <ProductDescription product={product} />
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
