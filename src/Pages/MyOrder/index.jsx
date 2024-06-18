import React, { useContext } from 'react'
import { Layaout } from '../../Components/Layaout'
import { OrderCard } from '../../Components/OrderCard'
import { shoppingCardContext } from '../../Context'

function MyOrder() {
    const {order,} = useContext(shoppingCardContext);
    console.log(order);
    
    return (
        <Layaout>
            <div className="flex flex-col items-center overflow-y-auto h-full">
                {
                    order.slice(-1)[0].products.map(product => (
                        <OrderCard
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layaout>
    )
}

export { MyOrder } 