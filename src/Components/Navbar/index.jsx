import React, { useContext } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { shoppingCardContext } from '../../Context';

function NavBar() {

    const activeStyle = 'underline underline-offset-4 text-[#4B70F5]';
    const { setSearchByCategory, addProducts, openCheckoutSideMenu, } = useContext(shoppingCardContext);

    return (
        <nav className='flex justify-between w-full h-auto items-center fixed top-0 z-10 bg-slate-100 shadow-lg shadow-black-500/40 py-[10px] px-[20px] font-light'>
            <ul className='flex gap-3 items-center'>
                <li className='font-semibold text-lg text-lime-400 '>
                    <NavLink to='/'
                    onClick={() => setSearchByCategory()}>
                        WackySale
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => setSearchByCategory()}
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
                        onClick={() => setSearchByCategory(`Men's Clothing`)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to='clothes-women'
                        onClick={() => setSearchByCategory(`Women's Clothing`)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Women's Clothing
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to='electronics'
                        onClick={() => setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='jewelery'
                        onClick={() => setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Jewelery
                    </NavLink>
                </li>
            </ul>
            <ul className='flex gap-3 items-center'>
                <li className='text-gray-400 cursor-pointer'>
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
                <li className='flex items-center cursor-pointer'>
                    <GiShoppingCart size={21} onClick={()=> openCheckoutSideMenu()} /><span className='text-xs font-semibold'>{addProducts.length}</span>
                </li>
            </ul>
        </nav>
    )
}

export { NavBar } 