import React, { useContext } from 'react'
import '../Card/style.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { shoppingCardContext } from '../../Context';

function Card(data) {

    const { count,
        setCount,
        openProductDetail,
        setProductDetailShow,
        addProducts,
        setAddProducts,
        openCheckoutSideMenu,
        closeProuctDetail,
        closeCheckoutSideMenu, } = useContext(shoppingCardContext);

    const showProduct = (productDetail) => {
        openProductDetail();
        setProductDetailShow(productDetail);
        closeCheckoutSideMenu();

    }

    const addProductsToCard = (productData) => {
        setCount(count + 1);
        setAddProducts([...addProducts, productData]);
        openCheckoutSideMenu();
        closeProuctDetail();
        console.log(addProducts);
    }

    const renderIcon = (id) => {
        const isInCard = addProducts.filter(product => product.id === id).length > 0;
        if (isInCard) {
            return (<FaCheckCircle
                className='absolute top-0 right-0 m-2 text-green-300 z-[5]'
            />)

        } else {
            return (<FaCirclePlus
                className='absolute top-0 right-0 m-2 text-white z-[5]' 
                onClick={(e) => {
                    e.stopPropagation();
                    addProductsToCard(data.data)
                }}
            />)

        }
    }
    return (
        <div className='w-56 h-60 cursor-pointer rounded-lg bg-gray-50 shadow'
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5 content'>
                {
                    renderIcon(data.data.id)
                }
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.title} />
                <span className='absolute bottom-0 left-0 rounded-lg bg-white/60 text-sm px-2  m-2'>{data.data.category}</span>
            </figure>
            <p className='flex justify-between py-1 px-2'>
                <span className='text-sm font-light truncate'>{data.data.title}</span>
                <span className='text-sm font-semibold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export { Card }