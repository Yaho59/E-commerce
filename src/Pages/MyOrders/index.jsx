import React, { useContext } from 'react'
import { Layaout } from '../../Components/Layaout'
import { OrdersCard } from '../../Components/OrdersCard'
import { shoppingCardContext } from '../../Context'
import { Link } from 'react-router-dom';

function MyOrders() {
    const { order } = useContext(shoppingCardContext);
    
    return (
        <Layaout>
            <div>
                <h1 className='mb-2'>My Orders</h1>
            </div>
            {
                order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            date={order.date}
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts} />
                    </Link>

                ))
            }
        </Layaout>
    )
}

export { MyOrders } 