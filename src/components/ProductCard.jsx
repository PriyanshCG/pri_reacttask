import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [sparking, setSparking] = React.useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setSparking(true);
        setTimeout(() => setSparking(false), 1500);
    };

    const trimTitle = (title) => {
        return title.length > 30 ? title.substring(0, 30) + '...' : title;
    };

    return (
        <div className={`product-card ${sparking ? 'spark-active' : ''}`}>
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <h3 title={product.title}>{trimTitle(product.title)}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <div className="btn-wrapper">
                    <button
                        className={`premium-cart-btn ${sparking ? 'is-added' : ''}`}
                        onClick={handleAddToCart}
                        disabled={sparking}
                    >
                        <span className="btn-content">
                            {sparking ? (
                                <span className="success-state">
                                    <span className="check-icon">✓</span>
                                    Added
                                </span>
                            ) : (
                                <span className="default-state">
                                    <span className="plus-icon">+</span>
                                    Add to Cart
                                </span>
                            )}
                        </span>
                        {sparking && <span className="ripple-effect"></span>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
