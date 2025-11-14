import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stores from "./pages/Stores/Stores";
import Cart from "./pages/Cart/Cart";
import Store from "./pages/Store/Store";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/store",
            element: <Store/>
        },
        {
            path: "/stores",
            element: <Stores />
        },
        {
            path: "/cart",
            element: <Cart/>
        },
    ]);

    return <RouterProvider router={router}/>
};
export default Router;

