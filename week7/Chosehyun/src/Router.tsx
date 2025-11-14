import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page1 from "./pages/Page1/Page1";
import PageId from "./pages/PageId/PageId";
import Home from "./pages/Home/Home";
import Stores from "./pages/Stores/Stores";
import Store from "./pages/Store/Store";
import Cart from './pages/Cart/Cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/page1",
      element: <Page1 />,
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
    {
      path: "/page/:PageId",
      element: <PageId />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
