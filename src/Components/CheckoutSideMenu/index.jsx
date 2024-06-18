import { MdOutlineClose } from "react-icons/md";
import React, { useContext } from 'react'
import { shoppingCardContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../Utils";
import { Link } from "react-router-dom";


function CheckoutSideMenu() {

    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        addProducts,
        setAddProducts,
        setCount,
        count,
        setOrder,
        order,
    } = useContext(shoppingCardContext);

    const handleDelete = (id) => {
        const deleteProductCard = addProducts.filter(product => product.id != id);
        setCount(count - 1);
        setAddProducts(deleteProductCard);

    }

    const handleCheckout = () => {
        const date = new Date();
        
        const orderToAdd = {
            date: date.toLocaleDateString(),
            products: addProducts,
            totalProducts: addProducts.length,
            totalPrice: totalPrice(addProducts),
        }

        setOrder([...order, orderToAdd]);
        setAddProducts([])
        setCount(0)
        closeCheckoutSideMenu()
    }
    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} justify-between w-[360px] h-h-calc  flex-col  fixed right-0 top-[48px] border border-black rounded-lg bg-white z-10`}>

            <div className='flex justify-between items-center px-4 py-3 border-b'>
                <h2 className='font-medium text-xl'>Checkout</h2>
                <MdOutlineClose onClick={() => closeCheckoutSideMenu()} />
            </div>
            <div className="flex flex-col items-center overflow-y-auto h-full">
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
            <div className="px-4 py-3 rounded-lg  w-[358px]  bg-white border-t">
                <p className="flex justify-between items-center">
                    <span >Total:</span>
                    <span>${totalPrice(addProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className="rounded-3xl bg-[#4C3BCF] text-[#FFFFFF] w-full py-2 mt-1" onClick={() => handleCheckout()}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu } 