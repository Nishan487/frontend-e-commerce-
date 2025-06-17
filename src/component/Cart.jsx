import React from 'react'
import { useProductContext } from './productcontext'
const Cart = () => {
  const {cartItems,updateQuantity,removeFromCart}=useProductContext();
    const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
        <div className="cart-page">
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="product-list">
          {cartItems.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => updateQuantity(product.id, -1)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(product.id)} style={{ backgroundColor: "#dc3545" }}>
              Remove from Cart
            </button>
            </div>
          ))}
           <div style={{ marginTop: "30px", fontSize: "24px", fontWeight: "bold" }}>
            🧾 Total Price: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart