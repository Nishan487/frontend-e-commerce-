
import { useState } from 'react';
import './Product.css'
import { useProductContext } from './productcontext';

import Search from './Search';
const Product = (props) => {
  const {products,addToCart,removeFromCart,cartItems,updateQuantity}=useProductContext();

    
  return(
    <div>
      
      <Search className="search"/>
      
   <div className="products-container">
      {products.map((currElem)=>{
         const {id,title,image,price,category,}=currElem;
         const isInCart=cartItems.some(item=>item.id===currElem.id);
         const handelClick=()=>{
          if(isInCart){
            removeFromCart(currElem.id);
            }
            else{
                addToCart(currElem);
            }
         }
  return (
        
       <div key={id} className="product-card">
              <figure className="product-image-container">
                {/* Product image */}
                <img
                  src={image}
                  alt={title}
                  className="product-image"
                />
                {/* Category caption */}
                <figcaption className="product-category-caption">
                  {category}
                </figcaption>
              </figure>
              {/* Product information section */}
              <div className="product-info-section">
                {/* Product title */}
                <h3 className="product-title">
                  {title}
                </h3>
                {/* Horizontal section for price and add-to-cart button */}
                <div className="price-cart-section">
                  <span className="product-price">
                    ${price.toFixed(2)} {/* Format price to 2 decimal places */}
                  </span>
                  <button className="add-to-cart-button" onClick={handelClick} >
                    {isInCart? "Remove from Cart" :"Add to Cart"}
                  </button>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button onClick={() => updateQuantity(id, -1)}>-</button>
            <span>{isInCart.quantity}</span>
            <button onClick={() => updateQuantity(id, 1)}>+</button>
          </div>
                </div>
                

              </div>

            </div>
            
     

  )
      })}
    </div>
        
    </div>
  )
}
export default Product;