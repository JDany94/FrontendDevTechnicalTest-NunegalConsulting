import { useState } from "react";
import { useCart } from "../context/cart/useCart";
import { useToast } from "../context/toast/useToast";
import Spinner from "./Spinner";
import "./ProductActions.css";

const ProductActions = ({ product }) => {
  const { addToCart } = useCart();
  const toast = useToast();
  const [selectedStorage, setSelectedStorage] = useState(
    product.options?.storages?.[0]?.code || null,
  );
  const [selectedColor, setSelectedColor] = useState(
    product.options?.colors?.[0]?.code || null,
  );
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!selectedStorage || !selectedColor) {
      toast.warning("Please select all options");
      return;
    }

    setLoading(true);

    try {
      await addToCart(product.id, selectedColor, selectedStorage);
      toast.success(`${product.brand} ${product.model} added to cart!`);
    } catch (error) {
      toast.error("Error adding product to cart");
      console.error("Error adding product to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-actions">
      <h3 className="actions-title">Select Options</h3>

      {/* Storage Selector */}
      <div className="option-group">
        <label className="option-label">Storage:</label>
        <div className="option-buttons">
          {product.options?.storages?.map((storage) => (
            <button
              key={storage.code}
              className={`option-button ${
                selectedStorage === storage.code ? "selected" : ""
              }`}
              onClick={() => setSelectedStorage(storage.code)}
              disabled={loading}
            >
              {storage.name}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selector */}
      <div className="option-group">
        <label className="option-label">Color:</label>
        <div className="option-buttons">
          {product.options?.colors?.map((color) => (
            <button
              key={color.code}
              className={`option-button ${
                selectedColor === color.code ? "selected" : ""
              }`}
              onClick={() => setSelectedColor(color.code)}
              disabled={loading}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        disabled={loading || !selectedStorage || !selectedColor}
      >
        {loading ? (
          <span className="button-loading">
            <Spinner size="small" />
            <span>Adding...</span>
          </span>
        ) : (
          "Add to Cart"
        )}
      </button>
    </div>
  );
};

export default ProductActions;
