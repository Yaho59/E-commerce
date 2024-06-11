import { MdOutlineClose } from "react-icons/md";
import React, { useContext } from 'react'
import { shoppingCardContext } from "../../Context";

function CheckoutSideMenu() {

    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
    } = useContext(shoppingCardContext);
    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-h-calc  flex-col fixed right-0 top-[48px] border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center px-4 py-3'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <MdOutlineClose onClick={() => closeCheckoutSideMenu()} />
            </div>
            <div className="flex flex-col overflow-y-auto">

            </div>
        </aside>
    )
}

export { CheckoutSideMenu } 