import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" className="rgb-text">FAKESTORE</NavLink>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Cart <span className="cart-badge">{cartCount}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
