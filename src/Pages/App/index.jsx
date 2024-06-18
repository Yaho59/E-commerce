// import '../../../src/App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { NotFound } from '../NotFound'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SingIn } from '../SingIn'
import './App.css'
import { NavBar } from '../../Components/Navbar'
import { ShoppingCardProvider } from '../../Context'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}
function App() {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
