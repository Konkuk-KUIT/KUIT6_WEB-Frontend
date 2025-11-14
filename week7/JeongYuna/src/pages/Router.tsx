import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Stores from "./Stores/Stores";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/salad",
      element: <Stores />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;