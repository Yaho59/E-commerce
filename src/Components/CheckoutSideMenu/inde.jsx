import { MdOutlineClose } from "react-icons/md";
import React, { useContext } from 'react'
import { shoppingCardContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../Utils";


function CheckoutSideMenu() {

    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        addProducts,
        setAddProducts,
        setCount,
        count,
    } = useContext(shoppingCardContext);

    const handleDelete = (id) => {
        const deleteProductCard = addProducts.filter(product => product.id != id);
        setCount(count - 1);
        setAddProducts(deleteProductCard);

    }
    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-h-calc  flex-col  fixed right-0 top-[48px] border border-black rounded-lg bg-white z-10`}>

            <div className='flex justify-between items-center px-4 py-3 border-b'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <MdOutlineClose onClick={() => closeCheckoutSideMenu()} />
            </div>
            <div className="flex flex-col overflow-y-auto">
                {
                    addProducts.map(product => (
                        <OrderCard
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>

            <div className="px-4 py-3 absolute rounded-lg bottom-0 w-[358px]  bg-white border-t">
                <p className="flex justify-between items-center">
                    <span >Total:</span>
                    <span>${totalPrice(addProducts)}</span>
                </p>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu } 