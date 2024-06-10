import React, { createContext, useState } from 'react'

const shoppingCardContext = createContext();

function ShoppingCardProvider({ children }) {

    const [count, setCount] = useState(0);

    //Product detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProuctDetail = () => setIsProductDetailOpen(false);

    //product detail Show
    const [productDetailShow, setProductDetailShow] = useState({});

    return (
        <shoppingCardContext.Provider value={{
            count,
            setCount,
            closeProuctDetail,
            openProductDetail,
            isProductDetailOpen,
            productDetailShow,
            setProductDetailShow,
            
        }}>
            {children}
        </shoppingCardContext.Provider>
    )
}

export { ShoppingCardProvider, shoppingCardContext } 