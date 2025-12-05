import React, { useEffect, useState } from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response.data);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <section className="hero">
                <div className="container">
                    <h1>Premium Bike Accessories</h1>
                    <p>Upgrade your ride with our top-quality gear.</p>
                    <button className="btn" style={{ marginTop: '20px' }}>Shop Now</button>
                </div>
            </section>

            <div className="container">
                <h2>Featured Products</h2>
                {loading ? (
                    <p>Loading products...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
