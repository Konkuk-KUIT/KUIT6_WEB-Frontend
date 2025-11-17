import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  Home  from "./Home/Home";
import  Cart  from "./Cart/Cart";
import  Store  from "./Store/Store";
import  Stores  from "./Stores/Stores";

const Router = () => {
  // 라우팅 테이블 생성 함수 (라우팅 테이블 생성)
  // -> URL과 컴포넌트 매칭 (path, element)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/store",
      element: <Stores></Stores>
    },
    {
      path: "/store/:storeId",
      element: <Store></Store>
    },
    {
      path: "/cart",
      element: <Cart></Cart>
    }
  ]);

  // BrowserRouter 대체 
  // 라우팅 테이블 대입 
  return <RouterProvider router={router} />;
};

export default Router;
