"use client"
import useStore from '@/store/useStore';
import React from 'react'


function page() {
    const {increase, decrease} = useStore();

    return (
        <div>

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default page