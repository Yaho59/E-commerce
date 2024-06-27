import { Card } from "../../Components/Card"
import { Layaout } from "../../Components/Layaout"
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu/index";
import { useContext } from "react";
import { shoppingCardContext } from "../../Context";
import { PiMagnifyingGlass } from "react-icons/pi";
import LoadingSkeleton from "../../Components/LoadingSkeleton";

function Home() {
    const { setSearchByTitle, itemsFiltered, items } = useContext(shoppingCardContext);

    return (
        <Layaout>
            <div className="w-[300px] mb-5 rounded-3xl flex justify-center items-center border border[#dfe1e5] hover:shadow lg:w-[525px]">
                <input type="text"
                    placeholder="search a product"
                    className="w-[260px] h-10 outline-none font-light lg:w-[435px]"
                    onChange={(event) => setSearchByTitle(event.target.value)} />
                <PiMagnifyingGlass className="text-[#4C3BCF]" />
            </div>
            <div className="grid gap-4 grid-cols-auto-fill-240 w-full h-auto place-content-center max-w-screen-lg" >
                {
                    items?.length > 0 ? (
                        itemsFiltered?.length > 0 ? (
                            itemsFiltered.map(item => (
                                <Card key={item.id} data={item} />
                            ))
                        ) : (
                            <p className="text-center font-medium">No results found for this product <span className="font-light">Check your spelling or use more general terms.</span></p>

                        )) : (
                        <>
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                        </>

                    )
                }
            </div>
            <ProductDetail />
            <CheckoutSideMenu />
        </Layaout>
    )
}

export { Home }