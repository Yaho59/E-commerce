// import '../../../src/App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { NotFound } from '../NotFound'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
// import { SingIn } from '../SingIn'
import './App.css'
import { NavBar } from '../../Components/Navbar'
import { ShoppingCardProvider } from '../../Context'
import NavbarMovil from '../../Components/NavbarMovil'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    // { path: '/clothes-women', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    // { path: '/sing-in', element: <SingIn /> },
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
        <NavbarMovil /> 
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
