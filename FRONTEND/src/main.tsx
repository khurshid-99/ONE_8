import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./app/Router";
import { RouterProvider } from "react-router";
import SmoothScroll from "./app/SmoothScroll";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll>
      <RouterProvider router={AppRouter} />
    </SmoothScroll>
  </StrictMode>,
);
