import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Login/Signin";

const router = createBrowserRouter([{
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
        }
    ]
}
]
)

export default router;