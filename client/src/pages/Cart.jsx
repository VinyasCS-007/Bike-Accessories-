import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/products" className="btn" style={{ marginTop: '1rem' }}>
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h2>Your Shopping Cart</h2>
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                        <img src={item.image_url} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
                        <div style={{ flex: 1 }}>
                            <h3>{item.name}</h3>
                            <p className="product-category">{item.category_name}</p>
                            <p>${item.price}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary" style={{ marginTop: '2rem', textAlign: 'right' }}>
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                    <button onClick={clearCart} style={{ background: '#ccc', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Clear Cart</button>
                    <button className="btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
