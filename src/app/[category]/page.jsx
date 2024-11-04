"use client";

import React, { useState, useEffect } from 'react'; // Make sure to import useEffect
import { getJewelry, getBooks } from '../../services/fetchData.js';
import Product from '../../components/Product/Product.jsx';
import style from './style.module.css'

export default async function Page({ params }) {
    const [products, setProducts] = useState([]);

    const category =  await React.use(params);
    console.log(`category: ${category}`); // Log category for debugging purposes

    useEffect(() => {
        const fetchData = async () => {
            console.log(`Fetching products for category: ${category}`);
            const fetchedProducts = category === 'books' ? await getBooks() : await getJewelry();
            console.log(fetchedProducts);
            setProducts(fetchedProducts);
        };
        fetchData();
    }, []); // Add category as a dependency

    return (
        <div className={style.prodContainer}>
            {products.length > 0 && products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

