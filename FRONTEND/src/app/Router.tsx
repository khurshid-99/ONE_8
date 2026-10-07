import { createBrowserRouter } from "react-router";
import Home from "../features/home/pages/Home";
import AppLayout from "./AppLayout";
import { ScrollToTop } from "../utils/ScrollToTop";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);

export default AppRouter;
