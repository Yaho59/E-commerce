import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

function Card() {
    return (
        <div className='w-56 h-60 cursor-pointer rounded-lg bg-gray-50 shadow'>
            <figure className='relative mb-2 w-full h-4/5'>
                <FaCirclePlus className='absolute top-0 right-0 m-2'/>
                <img className='w-full h-full object-cover rounded-lg' src="https://i.blogs.es/0fcfe1/fausto-sandoval-w5m3pigvkqi-unsplash/650_1200.jpeg" alt="auriculares" />
                <span className='absolute bottom-0 left-0 rounded-lg bg-white/60 text-sm px-2  m-2'>Electronic</span>
            </figure>
            <p className='flex justify-between py-1 px-2'> 
                <span className='text-sm font-light'>Auriculares</span>
                <span className='text-sm font-semibold'>$400</span>
            </p>
        </div>
    )
}

export { Card }