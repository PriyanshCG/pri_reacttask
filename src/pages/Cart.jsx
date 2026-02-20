import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, cartCount, totalPrice, removeFromCart, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="cart-page empty" style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h2>Your cart is empty</h2>
                <p>Go to the products page to add some items!</p>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h2>Your Shopping Cart</h2>
                <button className="clear-cart-btn" onClick={clearCart}>
                    🗑️ Clear All Items
                </button>
            </div>

            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="cart-item-details">
                            <h3>{item.title}</h3>
                            <p className="price" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
                                ${item.price.toFixed(2)}
                            </p>
                            <p className="quantity">Quantity: {item.quantity}</p>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove Item
                            </button>
                        </div>
                        <div className="cart-item-subtotal" style={{ textAlign: 'right', minWidth: '120px' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Subtotal</p>
                            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="summary-card">
                    <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                        Order Summary
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>Total Items:</span>
                        <span>{cartCount}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Total Price:</span>
                        <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
