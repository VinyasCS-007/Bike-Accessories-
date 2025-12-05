import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <img src={product.image_url} alt={product.name} className="product-image" />
            <div className="product-info">
                <div className="product-category">{product.category_name}</div>
                <h3 className="product-title">{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">${product.price}</div>
                <button className="btn add-to-cart" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
