import App from "../app/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TestPage } from "../pages/test/index.tsx";
import { HomePage } from "../pages/home/index.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <p>Error element</p>,
    path: "/*",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "test",
        element: <TestPage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
