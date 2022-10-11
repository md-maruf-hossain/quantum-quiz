import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Analysis from "./components/Analysis/Analysis";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Quiz from "./components/Quiz/Quiz";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/analysis",
          loader: async() => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Analysis></Analysis>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/",
          loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: '/home/:id',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        }
      ],
    },
    { path: "*", element: <NotFoundPage></NotFoundPage>}
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
