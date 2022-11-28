import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import MyOrders from "../Pages/Dashboard/ForUser/MyOrders";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/Home/Products/AllProducts";
import Login from "../Pages/Login/Login";
import Signin from "../Pages/Login/Signin";

const router = createBrowserRouter([
    {
    path: '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/signin',
            element: <Signin/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/blog',
            element: <Blogs/>
        },
        {
            path: '/products/:id',
            element: <AllProducts/>,
            loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        },
    ]
},
{
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
        {
            path: '/dashboard',
            element: <MyOrders/>
        }
    ]
},

{
    path: '*',
    element: <Error/>
}
]
)

export default router;