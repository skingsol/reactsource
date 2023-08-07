import "./App.css";

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import data from "./data";
import Product from "./Product";
import Main from "./Main";
import Error from "./Error";
import Detail from "./pages/Detail";
import Event from "./pages/Event";
import One from "./pages/One";
import Two from "./pages/Two";
import Cart from "./pages/Cart";

function App() {
  // 신발 데이터 관리
  const [shoes, setShoes] = useState(data);

  // 경로 설정
  let router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
          { path: "/", element: <Product shoes={shoes} setShoes={setShoes} /> },
          { path: "/detail/:id", element: <Detail shoes={shoes} /> },
          { path: "/runningshoes", element: <Runningshoes /> },
          {
            path: "/event",
            element: <Event />,
            children: [
              { path: "one", element: <One /> },
              { path: "two", element: <Two /> },
            ],
          },
          { path: "/cart", element: <Cart /> },
        ],
      },
    ],
    { basename: "/" }
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Runningshoes() {
  return (
    <div>
      <h1>Runningshoes</h1>
    </div>
  );
}

export default App;
