import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";
import Cart from "./Cart/Cart";

const Router = () => {
  const router = createBrowserRouter(
[
  {
    path : "/Home", 
    element : <Home/>
  },

  {
    path : "/Store", 
    element : <Store/>
  },

  {
    path : "/Stores", 
    element : <Stores/>
  },

  {
    path : "/Cart", 
    element : <Cart/>
  }
]



  );

  
  return <RouterProvider router={router} />;
};

export default Router;
