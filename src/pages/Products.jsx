import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            if (!response.ok) throw new Error('Failed to fetch categories');
            const data = await response.json();
            setCategories(['All', ...data]);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((p) => p.category === selectedCategory));
        }
    }, [selectedCategory, products]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="products-page">
            <div className="filter-section">
                <label htmlFor="category">Filter by Category: </label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0) + cat.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="products-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Products;
