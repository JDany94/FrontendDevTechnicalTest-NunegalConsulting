import { useState } from "react";
import { CartContext } from "./CartContext";
import { api } from "../../services/api";

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(api.getCartCount());

  const addToCart = async (id, colorCode, storageCode) => {
    const response = await api.addToCart(id, colorCode, storageCode);
    setCartCount(response.count);
    return response;
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
