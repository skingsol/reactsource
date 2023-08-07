import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import TodoList from "./TodoList";

function App() {
  // 경로 설정
  let router = createBrowserRouter(
    [
      {
        path: "/",
        element: <TodoList />,
        errorElement: <Error />,
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

export default App;
