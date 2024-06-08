import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from 'react-router-dom'

function NavBar() {
    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className='flex justify-between w-full h-auto items-center fixed top-0 z-10 bg-slate-100 shadow-lg shadow-black-500/40 py-[10px] px-[20px]'>
            <ul className='flex gap-3 items-center'>
                <li className='font-semibold text-lg text-lime-400 '>
                    <NavLink to='/'>
                        WackySale
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Elecronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex gap-3 items-center'>
                <li>
                    yaho@gmail.com
                </li>
                <li>
                    <NavLink
                        to='my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='sing-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sing In
                    </NavLink>
                </li>
                <li>
                    <GiShoppingCart />
                </li>
            </ul>
        </nav>
    )
}

export { NavBar } 