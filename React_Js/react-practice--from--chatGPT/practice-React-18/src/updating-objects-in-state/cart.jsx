import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState({
    items: [
      { id: 1, name: "Shoes", quantity: 1 },
      { id: 2, name: "Shirt", quantity: 2 }
    ]
  });

  const increaseQty = (id) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }));
  };

  const cartItems = cart.items.map(item => (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <p>Qty: {item.quantity}</p>
      <button onClick={() => increaseQty(item.id)}>
        +
      </button>
    </div>
  ))

  return (
    <div style={{
      border: "1px solid red",
      margin: "20px 0"
    }}>
      { cartItems }
    </div>
  );
}

export default Cart;