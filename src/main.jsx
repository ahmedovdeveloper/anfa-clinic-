import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n";
import App from "./App";
import ContactPage from "./components/Contact";
import ProductView from "./components/ProductView";
import ProductAll from "./page/ProductAll";
import Sotrudniki from "./page/Sotrudniki";
import NewsAllPages from "./page/NewsAll";
import NewsView from "./components/NewsView";
import Careers from "./page/Caryers";
import CSR from "./page/Csr";
import Partnership from "./page/Partnyorship";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/products/:id",
    element: <ProductView />,
  },
  {
    path: "/products",
    element: <ProductAll />,
  },
  {
    path: "/partners",
    element: <Partnership />,
  },
  {
    path: "/news",
    element: <NewsAllPages />,
  },
  {
    path: "/news/:id",
    element: <NewsView />,
  },
  {
    path: "/career",
    element: <Careers />,
  },
  {
    path: "/kso",
    element: <CSR />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
