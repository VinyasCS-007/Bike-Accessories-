import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();

    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/" className="logo">
                        BikeAcc
                    </Link>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
                            Cart
                            {cartCount > 0 && (
                                <span style={{
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    padding: '2px 6px',
                                    fontSize: '0.8rem',
                                    marginLeft: '5px'
                                }}>
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
