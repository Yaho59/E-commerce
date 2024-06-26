import React from 'react'

function Layaout({ children }) {
    return (
        <div className='flex flex-col items-center mt-20 mb-16'>
            {children}
        </div>
    )
}

export { Layaout }