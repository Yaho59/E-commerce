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
    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }
    const closeProuctDetail = () => {
        setIsProductDetailOpen(false)
        closeMenu();
    }

    //product detail Show
    const [productDetailShow, setProductDetailShow] = useState({});

    //checkout side menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = () => {
        closeProuctDetail();
        closeCheckoutSideMenu();
        setIsMenuOpen(true);
    }
    const closeMenu = () => setIsMenuOpen(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    };

    //Get products de la API
    const [items, setItem] = useState(null);

    //Get articles filtered by title
    const [itemsFiltered, setItemsFiltered] = useState(null);

    //Get products by search
    const [searchByTitle, setSearchByTitle] = useState(null);

    //Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItem(data));
    }, [])

    const itemsFilteredByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const itemsFilteredByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return itemsFilteredByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return itemsFilteredByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_CATEGORY_AND_TITLE') {
            return itemsFilteredByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }


    useEffect(() => {
            if (searchByCategory && searchByTitle) setItemsFiltered(filterBy('BY_CATEGORY_AND_TITLE', items, searchByTitle, searchByCategory))
            if (searchByTitle && !searchByCategory) setItemsFiltered(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
            if (searchByCategory && !searchByTitle) setItemsFiltered(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
            if (!searchByCategory && !searchByTitle) setItemsFiltered(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])


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
            setItemsFiltered,
            searchByCategory,
            setSearchByCategory,
            isMenuOpen,
            openMenu,
            closeMenu,
            toggleMenu,
        }}>
            {children}
        </shoppingCardContext.Provider>
    )
}

export { ShoppingCardProvider, shoppingCardContext } 