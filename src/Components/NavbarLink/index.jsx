import React, { useContext } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { shoppingCardContext } from '../../Context';

function NavbarLink() {

    const activeStyle = 'underline underline-offset-4 text-[#4B70F5]';

    const getClassNames = (isActive) => {
        const baseClasses = 'hover:text-[#4B70F5]';
        const activeClasses = isActive ? activeStyle : '';
        return `${activeClasses} ${baseClasses}`.trim();
    };

    const { setSearchByCategory, addProducts, openCheckoutSideMenu, closeMenu, } = useContext(shoppingCardContext);
    return (
        <>
            <ul className='flex flex-col gap-3 lg:items-center lg:flex-row'>
                <li className='hidden font-semibold text-lg text-lime-400 lg:flex'>
                    <NavLink to='/'
                        onClick={() => {
                            setSearchByCategory()
                            closeMenu()
                        }}>
                        WackySale
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => {
                            setSearchByCategory()
                            closeMenu()
                        }}
                        className={({ isActive }) => getClassNames(isActive)
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='clothes'
                        onClick={() => {
                            setSearchByCategory(`Men's Clothing`)
                            closeMenu()
                        }}
                        className={({ isActive }) => getClassNames(isActive)}
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
                        onClick={() => {
                            setSearchByCategory('electronics');
                            closeMenu()
                        }}
                        className={({ isActive }) => getClassNames(isActive)}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='jewelery'
                        onClick={() => {
                            setSearchByCategory('jewelery')
                            closeMenu()
                        }
                        }
                        className={({ isActive }) => getClassNames(isActive)}
                    >
                        Jewelery
                    </NavLink>
                </li>
            </ul>
            <ul className='flex flex-col gap-3 lg:items-center lg:flex-row'>
                <li className='text-gray-400 cursor-pointer'>
                    yaho@gmail.com
                </li>
                <li>
                    <NavLink
                        to='my-orders'
                        onClick={() => closeMenu()}
                        className={({ isActive }) => getClassNames(isActive)}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='my-account'
                        onClick={() => closeMenu()}
                        className={({ isActive }) => getClassNames(isActive)}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => closeMenu()}
                        className={'text-lime-400 lg:text-black'}
                    >
                        Sign out
                    </NavLink>
                </li>
                <li className='hidden items-center cursor-pointer lg:flex'>
                    <GiShoppingCart size={21} onClick={() => openCheckoutSideMenu()} /><span className='text-xs font-semibold'>{addProducts.length}</span>
                </li>
            </ul>
        </>
    )
}

export { NavbarLink }