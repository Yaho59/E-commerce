import { useEffect, useState } from "react"
import { Card } from "../../Components/Card"
import { Layaout } from "../../Components/Layaout"
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu/index";

function Home() {
    const [items, setItem] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItem(data));
    }, [])

    return (
        <Layaout>
            <div className="grid gap-4 grid-cols-auto-fill-240 w-full place-content-center max-w-screen-lg" >
                {
                    items?.map(item =>
                        <Card key={item.id} data={item} />
                    )
                }
            </div>
            <ProductDetail />
            <CheckoutSideMenu />
        </Layaout>
    )
}

export { Home }