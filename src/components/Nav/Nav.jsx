import React from 'react'
import Link from 'next/link';
import style from './Nav.module.css';


function Nav() {
  return (
    <div className={style.navBar}>
        <Link href="/">Home</Link>
        <Link href="/products/jewelry">Jewelry</Link>
        <Link href="/products/books">Books</Link>
    </div>
  )
}

export default Nav