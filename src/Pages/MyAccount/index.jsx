import React from 'react'
import { Layaout } from '../../Components/Layaout'

function MyAccount() {
    return (
        <Layaout>
            <div className="w-[300px]">
                <h1 className='text-lg text-start mb-9'>My account</h1>

                <form className=' flex flex-col'>
                    <div className='flex flex-col'>
                        <label className='text-sm font-semibold mb-1'>Name</label>
                        <p className='text-xs mt-2 mb-8 text-gray-400'>Camila Yokoo</p>

                        <label className='text-sm font-semibold mb-1'>Email</label>
                        <p className='text-xs mt-2 mb-8 text-gray-400'>yaho@gmail.com</p>

                        <label className='text-sm font-semibold mb-1'>Password</label>
                        <p className='text-xs mt-2 mb-8 text-gray-400'>*********</p>
                    </div>
                    <button className='bg-white text-base text-green-400 border-[1px] border-green-500 rounded-lg mt-4 cursor-pointer font-bold w-full h-12'>Create</button>
                </form>
            </div>
        </Layaout>
    )
}

export { MyAccount } 