import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Stores from "./Stores/Stores";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/stores",
    element: <Stores />,
  },
  {
    path: "/store/:storeId",
    element: <Store />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
