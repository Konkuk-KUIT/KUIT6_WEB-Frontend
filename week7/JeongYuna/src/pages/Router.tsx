import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Stores from "./Stores/Stores";
import type { IStore } from "./Stores/Stores";
import Store from "./Store/Store"
import stores from "../models/stores"
import Cart from "./Cart/Cart";

const typedStores = stores.map( (store) =>
  store as IStore
)

const saladStores = {category: "샐러드", stores: typedStores}

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/salad",
      element: <Stores stores={saladStores} />
    },
    {
      path: "/salad/:id",
      element: <Store stores={saladStores} />
    },
    {
      path: "/cart",
      element: <Cart />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;