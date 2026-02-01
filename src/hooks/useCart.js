import { useState } from "react";
import { api } from "../services/api";

export const useCart = () => {
  const [cartCount, setCartCount] = useState(api.getCartCount());

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

  return {
    cartCount,
    addToCart,
  };
};
