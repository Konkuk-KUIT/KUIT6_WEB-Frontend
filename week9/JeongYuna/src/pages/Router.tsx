import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Stores from "./Stores/Stores";
import type { IStore } from "./Stores/Stores";
import Store from "./Store/Store"
import Cart from "./Cart/Cart";
import { getStores } from "../api/api";
import { useState, useEffect } from "react";
import useCategoryStore from "./Home/useCategoryStore";

const Router = () => {
  const [stores, setStores] = useState([]);
  const {categories, fetchCategories} = useCategoryStore();
  
  useEffect(() => {
    getStores().then(setStores).catch(console.error);
  }, [])

  useEffect(() => { fetchCategories(); })
  
  const typedStores = stores?.map( (store) =>
    store as IStore
  )
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
      ...categories.map((category) => ({  // ... 없으면 이중 배열이 됨
        path: `/${category.path}`,
        element: <Stores stores={typedStores} category={category.name} />
      })),
      ...categories.map((category) => ({
        path: `/${category.path}/:id`,
        element: <Store stores={typedStores} category={category.name} />
      })),
    {
      path: "/cart",
      element: <Cart />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;