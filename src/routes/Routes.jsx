import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefRecipe from "../pages/shared/ChefRecipe/ChefRecipe";
import LogIn from "../pages/shared/LogIn/LogIn";
import Register from "../pages/shared/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/shared/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
        ]
    },
    {
        path: '/chef/:id',
        element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
        loader: () => fetch(`http://localhost:5000/chef`)
    },
    {
        path: '/login',
        element: <LogIn></LogIn>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }


])

export default router;