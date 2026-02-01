import { useState } from "react";
import { CartContext } from "./CartContext";
import { api } from "../../services/api";

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(api.getCartCount());
  const [currentProduct, setCurrentProduct] = useState(null);

  const addToCart = async (id, colorCode, storageCode) => {
    try {
      const response = await api.addToCart(id, colorCode, storageCode);
      setCartCount(response.count);
      return response;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        addToCart,
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
