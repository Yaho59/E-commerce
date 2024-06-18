import React, { createContext, useState } from 'react'

const shoppingCardContext = createContext();

function ShoppingCardProvider({ children }) {
    //shopping card increment quantity 
    const [count, setCount] = useState(0);

    //shopping card . Add product
    const [addProducts, setAddProducts] = useState([]);

    //shopping card . order
    const [order, setOrder] = useState([]);

    //Product detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProuctDetail = () => setIsProductDetailOpen(false);

    //product detail Show
    const [productDetailShow, setProductDetailShow] = useState({});

    //checkout side menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(false);


    return (
        <shoppingCardContext.Provider value={{
            count,
            setCount,
            closeProuctDetail,
            openProductDetail,
            isProductDetailOpen,
            productDetailShow,
            setProductDetailShow,
            addProducts, 
            setAddProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,

        }}>
            {children}
        </shoppingCardContext.Provider>
    )
}

export { ShoppingCardProvider, shoppingCardContext } 