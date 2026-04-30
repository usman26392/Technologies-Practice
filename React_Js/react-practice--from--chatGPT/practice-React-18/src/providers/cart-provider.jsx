
import React, { createContext, useCallback, useMemo, useState } from 'react'


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
