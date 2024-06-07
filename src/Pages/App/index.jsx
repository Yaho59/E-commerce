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

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export default App
