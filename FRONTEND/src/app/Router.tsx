import { createBrowserRouter } from "react-router";
import Home from "../features/home/pages/Home";
import AppLayout from "./AppLayout";
import { ScrollToTop } from "../utils/ScrollToTop";
import Featured from "../features/featured/pages/Featured";

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
      {
        path: "/featured-all",
        Component: Featured,
      },
    ],
  },
]);

export default AppRouter;
