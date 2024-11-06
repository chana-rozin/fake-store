import React from 'react'
import style from './Product.module.css';
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";

function Product({product, handleDelete, handleEdit}) {
  const edit = ()=>{
    const updatedBook = {...product, title: Date.now()};
    handleEdit(product._id, updatedBook);
  }

  return (
    <div className={style.prod}>
    <p className={style.pTitle}> {product.title}</p>
    <img src={product.image} alt={product.title}/>
    <div className={style.cardFooter}>
    <p className={style.price}> <i className="fa-solid fa-shekel-sign"></i> {product.price}</p>
    <button className={style.addToCart}>הוספה לסל</button>
    <FiEdit3 onClick={edit}/>
    <AiOutlineDelete onClick={()=>handleDelete(product._id)}/>
    </div>
    </div>
  )
}

export default Product