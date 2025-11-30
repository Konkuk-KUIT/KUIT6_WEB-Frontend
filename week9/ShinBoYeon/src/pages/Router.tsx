import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { CATEGORIES } from "./Home/Home";
import Stores from "./Stores/Stores";
import type { IStore } from "./Stores/Stores";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/stores";

const getStores = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("불러오기 실패");
  return await res.json();
};

const Router = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getStores().then(setStores).catch(console.error);
  }, []);

  const typedStores = stores.map((stores) => stores as IStore);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    ...CATEGORIES.map((category) => ({
      // ... 없으면 이중 배열이 됨
      path: `/${category.path}`,
      element: <Stores category={category.name} />,
    })),
    ...CATEGORIES.map((category) => ({
      path: `/${category.path}/:id`,
      element: <Store stores={typedStores} category={category.name} />,
    })),
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
