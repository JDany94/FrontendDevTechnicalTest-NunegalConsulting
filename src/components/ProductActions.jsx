import { useState } from "react";
import { useCart } from "../context/cart/useCart";
import "./ProductActions.css";

const ProductActions = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedStorage, setSelectedStorage] = useState(
    product.options?.storages?.[0]?.code || null,
  );
  const [selectedColor, setSelectedColor] = useState(
    product.options?.colors?.[0]?.code || null,
  );
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = async () => {
    if (!selectedStorage || !selectedColor) {
      setMessage("Please select all options");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await addToCart(product.id, selectedColor, selectedStorage);
      setMessage("Product added to cart");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Error adding to cart");
      console.error("Error adding to cart:", error);
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
        {loading ? "Adding..." : "Add to Cart"}
      </button>

      {/* Feedback Message */}
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default ProductActions;
