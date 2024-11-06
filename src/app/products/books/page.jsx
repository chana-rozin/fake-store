"use client";

import React, { useState, useEffect } from 'react';
import { getBooks, postBook, deleteBook , updateBook} from '../../../services/productService.js';
import Product from '../../../components/Product/Product.jsx';
import style from './style.module.css';
import { VscNewFile } from "react-icons/vsc";

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            console.log(`Fetching products for books`);
            const fetchedProducts = await getBooks();
            setProducts(fetchedProducts);
        };
        fetchData();

    }, []);


    const newBook = async ()=>{
        console.log(`New book clicked`);
        const book = {id:
            12,
            title:
            "book 12",
            price:
            29.99,
            rate:
            4,
            image:
            "https://covers.openlibrary.org/b/id/8091016-L.jpg"}
        const newBook = await postBook(book);
        setProducts([...products, {...book, _id:newBook.insertedId}]);
    }


    const handleDelete = (id)=>{
        deleteBook(id).then(()=>setProducts(prev=>prev.filter(book=>book._id !== id)));
    }


    const handleEdit = (id,updatedBook)=>{
        updateBook(id, updatedBook).then(()=>setProducts(prev=>prev.map(book=>book._id === id?updatedBook:book)));
    }

    return (
        <div className={style.container}>
        <VscNewFile onClick={newBook}/>
        <div className={style.prodContainer}>
            {products.length > 0 && products.map(product => (
                <Product key={product._id} product={product} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))}
        </div>
        </div>
    );
}
