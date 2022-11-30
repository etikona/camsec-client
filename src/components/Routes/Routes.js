import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import MyOrders from "../Pages/Dashboard/ForUser/MyOrders";
import Users from "../Pages/Dashboard/Users";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/Home/Products/AllProducts";
import Login from "../Pages/Login/Login";
import Signin from "../Pages/Login/Signin";
import AdminRoute from "./AdminRoute";

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
            loader: ({params})=> fetch(`https://camsec-server.vercel.app/products/${params.id}`)
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
        },
        {
            path: '/dashboard/users',
            element: <AdminRoute><Users/></AdminRoute>
        },
    ]
},

{
    path: '*',
    element: <Error/>
}
]
)

export default router;