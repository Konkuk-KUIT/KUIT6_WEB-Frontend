import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import StoreDetail from "./Pages/Store/StoreDetail"; 
import Cart from "./Pages/Cart/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Store />,
    },
    {
      path: "/store/:storeId",
      element: <StoreDetail />, 
    },
     {
      path: "/cart",
      element: <Cart />, 
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
