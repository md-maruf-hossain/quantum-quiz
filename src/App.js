import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Analysis from "./components/Analysis/Analysis";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => fetch("quizTopics.json"),
          element: <Home></Home>,
        },
        {
          path: "/analysis",
          element: <Analysis></Analysis>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
