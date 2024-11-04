"use client"
import useStore from '@/store/useStore';
import React from 'react'

function page() {

    const {count}  = useStore();

  return (
    <div>Count: {count}</div>
  )
}

export default page