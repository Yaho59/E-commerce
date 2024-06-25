import React from 'react'
import { NavbarLink } from '../NavbarLink'

function NavBar() {
    return (
        <nav className='hidden lg:flex justify-between w-full h-auto items-center fixed top-0 z-10 bg-slate-100 shadow-lg shadow-black-500/40 py-[10px] px-[20px] font-light'>
            <NavbarLink/>
        </nav>
    )
}

export { NavBar } 