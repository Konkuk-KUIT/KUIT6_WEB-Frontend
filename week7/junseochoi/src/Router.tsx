import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Page1 from "./Pages/Page1/Page1";
import PageId from "./Pages/PageId/PageId";

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
      path: "/page/:PageId",
      element: <PageId />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
