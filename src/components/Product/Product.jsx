import React from 'react'
import style from './Product.module.css';

function Product({product}) {
  return (
    <div className={style.prod}>
    <p className={style.pTitle}> {product.title}</p>
    <img src={product.image} alt={product.title}/>
    <div className={style.cardFooter}>
    <p className={style.price}> <i className="fa-solid fa-shekel-sign"></i> {product.price}</p>
    <button className={style.addToCart}>הוספה לסל</button>
    </div>
    </div>
  )
}

export default Product