import React, { createContext, useEffect, useState } from "react";
import all_product_data from "../Component/Assest/Frontend_Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let i = 0; i <= 300; i++) cart[i] = 0;
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_product, setAll_product] = useState(all_product_data);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // REMOVE FROM CART
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  // ADD PRODUCT
  const addProduct = (product) => {
    const newId = Math.max(...all_product.map(p => p.id)) + 1;
    const newProduct = { ...product, id: newId };
    setAll_product((prev) => [...prev, newProduct]);
  };

  // REMOVE PRODUCT
  const removeProduct = (id) => {
    setAll_product((prev) => prev.filter(p => p.id !== id));
  };

  // UPDATE PRODUCT
  const updateProduct = (id, updatedProduct) => {
    setAll_product((prev) => prev.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  // TOTAL AMOUNT
  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const product = all_product.find((p) => p.id === Number(id));
        if (product) total += product.new_price * cartItems[id];
      }
    }
    return total;
  };

  // TOTAL ITEMS
  const getTotalCartItem = () => {
    let total = 0;
    for (const id in cartItems) {
      total += cartItems[id];
    }
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        addProduct,
        removeProduct,
        updateProduct,
        getTotalCartAmount,
        getTotalCartItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;



