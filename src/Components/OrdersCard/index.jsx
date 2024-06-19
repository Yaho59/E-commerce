import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoChevronForward } from "react-icons/io5";

function OrdersCard(props) {
    const { date, totalPrice, totalProducts } = props
    return (
        <div className="shadow flex items-center gap-4 h-auto w-auto p-2 mb-2 rounded-lg">
            <div className='flex flex-col justify-center'>
                <p className='flex items-center gap-1 text-sm font-light'>
                    <CiCalendarDate /> <span>{date}</span>
                </p>
                <p className='flex items-center gap-1 text-sm font-light'>
                    <HiMiniShoppingBag /><span>{totalProducts}</span><span>article</span>
                </p>
            </div>
            <p className='flex items-center gap-1 text-sm'>
                <FaMoneyCheckDollar /><span className='font-semibold'>${totalPrice}</span>
            </p>
            <p className='flex items-center  gap-1 text-sm font-light'>
                <span>Details</span><IoChevronForward />
            </p>
        </div>
    )
}

export { OrdersCard }