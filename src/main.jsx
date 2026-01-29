import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const pages = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <h1>About Page</h1>,
  },
];

const router = createBrowserRouter(pages);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);