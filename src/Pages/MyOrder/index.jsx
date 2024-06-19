import React, { useContext } from 'react'
import { Layaout } from '../../Components/Layaout'
import { OrderCard } from '../../Components/OrderCard'
import { shoppingCardContext } from '../../Context'
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';

function MyOrder() {
    const { order, } = useContext(shoppingCardContext);

    const params = useParams();
    //obtenemos el valor del id
    const indexOrderPath = Number(params.id);
    console.log(indexOrderPath);

    return (
        <Layaout>
            <div className='flex items-center gap-2 w-80 mb-2'>
                <Link to='/my-orders'>
                    <IoChevronBackOutline />
                </Link>

                <h1>My Order</h1>
            </div>
            <div className="flex flex-col items-center overflow-y-auto h-full">
                {!isNaN(indexOrderPath) && order?.[indexOrderPath].products.map((product) => (
                    <OrderCard
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                    />
                ))}
                {isNaN(indexOrderPath) && order?.slice(-1)[0].products.map((product) => (
                    <OrderCard
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                    />
                ))}

            </div>
        </Layaout>
    )
}

export { MyOrder } 