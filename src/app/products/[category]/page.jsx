"use client";

import React, { useState, useEffect } from 'react';
import { getJewelry, getBooks } from '../../../services/productService.js';
import Product from '../../../components/Product/Product.jsx';
import style from './style.module.css';

export default function Page({ params }) {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        // Unwrap `params` using `React.use()` once the component mounts
        const unwrapParams = async () => {
            const resolvedParams = await params;
            setCategory(resolvedParams.category);
        };

        unwrapParams();
    }, [params]);

    useEffect(() => {
        if (category) {
            const fetchData = async () => {
                console.log(`Fetching products for category: ${category}`);
                const fetchedProducts = category === 'books' ? await getBooks() : await getJewelry();
                setProducts(fetchedProducts);
            };
            fetchData();
        }
    }, [category]);

    return (
        <div className={style.prodContainer}>
            {products.length > 0 && products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
