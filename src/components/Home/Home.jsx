"use client"

import React from 'react'
import style from './Home.module.css'
import useStore from '@/store/useStore';


function Home() {

    const { count, increase, decrease } = useStore();

    return (
        <div className={style.container}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,<br />
                ut aut placeat impedit exercitationem sit eos similique minus velit molestias corporis asperiores.<br />
                Quod debitis recusandae voluptatibus eos natus aliquam animi?<br />
            </p>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}

export default Home