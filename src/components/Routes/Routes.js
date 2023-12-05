import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import AddProduct from "../Pages/Dashboard/ForSeller/AddProduct";
import MyProducts from "../Pages/Dashboard/ForSeller/MyProducts";
import MyOrders from "../Pages/Dashboard/ForUser/MyOrders";
import Sellers from "../Pages/Dashboard/Sellers";
import Users from "../Pages/Dashboard/Users";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/Home/Products/AllProducts";
import Login from "../Pages/Login/Login";
import Signin from "../Pages/Login/Signin";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://camsec-server.vercel.app/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders />,
      },
      // {
      //     path: '/dashboard/users',
      //     element: <AdminRoute><Users /></AdminRoute>
      // },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/sellers",
        element: (
          <AdminRoute>
            <Sellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/sellers/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/sellers/myProducts",
        element: <MyProducts />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
