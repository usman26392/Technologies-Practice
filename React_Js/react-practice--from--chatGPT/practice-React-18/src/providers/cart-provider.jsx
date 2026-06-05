
import React, { createContext, useMemo, useState } from 'react'


// Topic: - React.createContext()
export const CartItemCountContext = createContext();

// context provider component
export default function CartProvider({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0);

  function handleAddToCart() {
    setCartItemCount((prevCount) => prevCount + 1);
  }

  return (
    <CartItemCountContext.Provider value={{ cartItemCount, handleAddToCart }} >
      {children}
    </CartItemCountContext.Provider>
  )
}
