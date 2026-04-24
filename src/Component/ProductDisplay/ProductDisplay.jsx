import React, { useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assest/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assest/Frontend_Assets/star_dull_icon.png";
import PaymentInfo from "../PaymentInfo/PaymentInfo";

// import { ShopContext } from '../../Contex/ShopContext';

function ProductDisplay({ product }) {
  // Hooks always at the top
  const [result, setResult] = useState("");
  const [selectedSize, setSelectedSize] = useState("XS");
  // --- NEW: Quantity State ---
  const [quantity, setQuantity] = useState(1);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "21ad52f7-b16b-4c0d-9a5e-03e24838d783");
    
    // Ensure the size and quantity states are manually added to the form data
    formData.append("selected_size", selectedSize);
    formData.append("quantity", quantity);

    // --- NEW: Appending Product Details from the JS object ---
    formData.append("Product_ID", product.id);
    formData.append("Product_Name", product.name);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Your order has been placed successfully. Thank you!");
      event.target.reset();
      setQuantity(1); // Reset quantity after success
    } else {
      alert("Error");
      setResult("Error");
    }
  };

  if (!product) return null; // Early return after hooks

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs {product.old_price}.00</div>
          <div className="productdisplay-right-price-new">Rs {product.new_price}.00</div>
        </div>
        <div className="color">Color: {product.color}</div>
        <div className="productdisplay-right-description">
          "A modern clothing collection crafted with quality fabrics and timeless designs, perfect for adding confidence and style to your everyday look."
        </div>
        <br/>

         <PaymentInfo/>

        <div className="item-select-form">
          <form onSubmit={onSubmit}>
            
            {/* --- HIDDEN INPUT FOR PRODUCT ID --- */}
            <input type="hidden" name="Product_ID" value={product.id} />
            
            {/* SIZE SELECTOR */}
            <div className="productdisplay-right-size">
              <p>Select Size:</p>
              <div className="productdisplay-right-sizes">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <div 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? "active" : ""}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* --- QUANTITY SELECTOR --- */}
            <div className="quantity-container">
              <p>Quantity:</p>
              <div className="quantity-selector">
                <button 
                  type="button" 
                  onClick={() => quantity > 1 && setQuantity(prev => prev - 1)}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button 
                  type="button" 
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            

            <label className="item-details" htmlFor="email">Email:</label><br/>
            <input className="text-box-item" type="email" name="email" placeholder="Your Email" required/><br/><br/>

             <label className="item-details" htmlFor="contact-number">Contact Number:</label><br/>
            <input className="text-box-item" type="number" name="contact number" placeholder="Your Contact Number" required/><br/><br/>

             <label className="item-details" htmlFor="Address">Address:</label><br/>
            <input className="text-box-item" type="text" name="Address" placeholder="Your Address" required/><br/><br/>

            <label className="item-details" htmlFor="message">Message(Optional):</label><br/>
            <textarea className="msg-box" name="message" placeholder="Type Here"></textarea><br/><br/>

            <button type="submit">Buy Now</button>
            <br/>

            {result && <div className="result-alert">{result}</div>}

          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;

