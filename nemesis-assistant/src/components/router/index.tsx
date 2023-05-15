import App from "../app/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/home/";
import { PlayPage } from "../pages/play/";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <p>Error element</p>,
    path: "/*",
    children: [
      { index: true, element: <PlayPage /> },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
