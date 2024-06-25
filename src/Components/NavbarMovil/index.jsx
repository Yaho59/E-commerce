import React, { useContext } from 'react'
import { IoIosMenu } from "react-icons/io";
import { NavbarLink } from '../NavbarLink'
import { GiShoppingCart } from "react-icons/gi";
import { shoppingCardContext } from '../../Context';

function NavbarMovil() {
    const { addProducts,
        openCheckoutSideMenu,
        isMenuOpen,
        toggleMenu,
    } = useContext(shoppingCardContext);
    return (
        <div className=" lg:hidden">
            <div className={`flex px justify-between items-center w-full h-12 px-3 fixed top-0 z-10 bg-slate-100 shadow-lg shadow-black-500/40`}>
                <IoIosMenu className='text-[24px]' onClick={() =>{
                    toggleMenu()
                }} />
                <span className='font-semibold text-lg text-lime-400'>WackySale</span>
                <div className='flex items-center cursor-pointer'>
                    <GiShoppingCart size={21} onClick={() => openCheckoutSideMenu()} /><span className='text-xs font-semibold'>{addProducts.length}</span>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} h-screen w-3/4 px-3 pt-3 flex-col gap-5 z-10 fixed top-[48px] bg-slate-100`}>
                <NavbarLink />
            </div>
        </div>


    )
}

export default NavbarMovil