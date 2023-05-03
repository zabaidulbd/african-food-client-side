import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefRecipe from "../pages/shared/ChefRecipe/ChefRecipe";

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
        element: <ChefRecipe></ChefRecipe>,
        loader: () => fetch(`http://localhost:5000/chef`)
    }


])

export default router;