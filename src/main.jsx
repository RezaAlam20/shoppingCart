import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import MainPage from "./components/MainPage.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import App from "./components/App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <MainPage></MainPage>,
      },
      {
        path: "/Shop",
        element: <Shop></Shop>,
      },
      {
        path: "/Cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
