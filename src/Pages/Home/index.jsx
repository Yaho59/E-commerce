import { Card } from "../../Components/Card"
import { Layaout } from "../../Components/Layaout"
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu/index";
import { useContext } from "react";
import { shoppingCardContext } from "../../Context";
import { PiMagnifyingGlass } from "react-icons/pi";

function Home() {
    const { items, setSearchByTitle, searchByTitle, itemsFiltered, } = useContext(shoppingCardContext);

    return (
        <Layaout>
            <div className="w-[525px] mb-5 rounded-3xl flex justify-center items-center border border[#dfe1e5] hover:shadow">
                <input type="text"
                    placeholder="search a product"
                    className="w-[435px] h-10 outline-none"
                    onChange={(event) => setSearchByTitle(event.target.value)} />
                <PiMagnifyingGlass />
            </div>
            <div className="grid gap-4 grid-cols-auto-fill-240 w-full place-content-center max-w-screen-lg" >
                {
                    searchByTitle?.length > 0 ? (
                        itemsFiltered?.length > 0 ? (
                            itemsFiltered.map(item => (
                                <Card key={item.id} data={item} />
                            ))
                        ) : (
                            <p className="text-center font-medium">No results found for this product <span className="font-light">Check your spelling or use more general terms.</span></p>
                            
                        )
                    ) : (
                        items?.map(item => (
                            <Card key={item.id} data={item} />
                        ))
                    )
                }
            </div>
            <ProductDetail />
            <CheckoutSideMenu />
        </Layaout>
    )
}

export { Home }