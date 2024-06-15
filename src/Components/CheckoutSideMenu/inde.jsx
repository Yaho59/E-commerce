import { MdOutlineClose } from "react-icons/md";
import React, { useContext } from 'react'
import { shoppingCardContext } from "../../Context";
import { OrderCard } from "../OrderCard";


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
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-h-calc  flex-col fixed right-0 top-[48px] border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center px-4 py-3'>
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
        </aside>
    )
}

export { CheckoutSideMenu } 