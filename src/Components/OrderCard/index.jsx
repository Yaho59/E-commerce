import React from 'react';
import { MdOutlineClose } from "react-icons/md";


function OrderCard(props) {
    const { id, title, image, price, handleDelete } = props



    return (
        <div className='flex justify-between items-center gap-3 px-4 shadow rounded-lg mb-2 w-full'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
                </figure>
                <p className='text-xs'>{title}</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <p>{price}</p>
                {handleDelete && <MdOutlineClose onClick={() => handleDelete(id)} />}
            </div>
        </div>
    )
}

export { OrderCard }