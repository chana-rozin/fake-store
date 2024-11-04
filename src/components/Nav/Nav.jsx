import React from 'react'
import Link from 'next/link';


function Nav() {
  return (
    <div>
        <Link href="/home">Home</Link>
        <Link href="/jewelry">Jewelry</Link>
        <Link href="/books">Books</Link>
    </div>
  )
}

export default Nav