import React, { createContext, useState, useEffect } from 'react'

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
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Get products de la API
    const [items, setItem] = useState(null);

    //Get articles filtered by title
    const [itemsFiltered, setItemsFiltered] = useState(null);

    //Get products by search
    const [searchByTitle, setSearchByTitle] = useState();


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItem(data));
    }, [])

    const itemsFilteredByTitle = (items, searchByTitle) => {
        return items?.filter(item=> item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(()=>{
        if (searchByTitle) setItemsFiltered(itemsFilteredByTitle(items, searchByTitle)) 

    }, [items, searchByTitle])


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
            items,
            searchByTitle,
            setSearchByTitle,
            itemsFiltered,
            setItemsFiltered

        }}>
            {children}
        </shoppingCardContext.Provider>
    )
}

export { ShoppingCardProvider, shoppingCardContext } 