import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../Contex/ShopContext'
import remove_icon from "../Assest/Frontend_Assets/cart_cross_icon.png"

function CartItem() {

    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitem'>
            <div className='cartitems-from-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                // ✅ Only show items with quantity greater than 0
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitem-format cartitems-from-main'>
                                <img
                                    src={e.image}
                                    alt={e.name}
                                    className='carticon-product-icon'
                                />

                                <p>{e.name}</p>

                                <p className='new-price'>Rs {e.new_price}</p>

                                <button className='carticon-quantity'>
                                    {cartItems[e.id]}
                                </button>

                                <p>
                                    Rs{e.new_price * cartItems[e.id]}
                                </p>

                                <img
                                    className='cartitem-removeicon'
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt='remove'
                                />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}

            <div className='cartitem-down'>
                <div className='cartitem-total'>
                    <h1>Cart Totals</h1>

                    <div className='cartitem-total-item'>
                        <p>Subtotal</p>
                        <p>Rs{getTotalCartAmount()}</p>
                    </div>

                    <hr />

                    <div className='cartitem-total-item'>
                        <p>Delivery Fee</p>
                        <p>Free</p>
                    </div>

                    <hr />

                    <div className='cartitem-total-item'>
                        <h3>Total</h3>
                        <h3>Rs{getTotalCartAmount()}</h3>
                    </div>

                    <button>PROCEED TO CHECKOUT</button>
                </div>

                <div className='cartitem-promocode'>
                    <p>If you have a promo code, enter it here</p>
                    <div className='cartitem-promobox'>
                        <input type='text' placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItem;

