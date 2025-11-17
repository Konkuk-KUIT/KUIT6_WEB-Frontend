import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stores from "./pages/Stores/Stores";
import Store from "./pages/Store/Store";
import Cart from "./pages/Cart/Cart";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/store", element: <Stores /> },
  { path: "/store/:storeId", element: <Store /> },
  { path: "/cart", element: <Cart /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router; 
