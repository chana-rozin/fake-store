"use client";

import React, { useState, useEffect } from 'react';
import { getJewelry } from '../../../services/productService.js';
import Product from '../../../components/Product/Product.jsx';
import style from './style.module.css';

export default function Page({ params }) {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            console.log(`Fetching products for jewelry`);
            const fetchedProducts = await getJewelry();
            setProducts(fetchedProducts);
        };
        fetchData();
    }, []);

    return (
        <div className={style.prodContainer}>
            {products.length > 0 && products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
