import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Stores, { type Store } from "./Stores/Stores";
import stores from "../models/stores"

const typedStores = stores.map( (store) =>
  store as Store
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
      element: <Stores stores={saladStores}/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;