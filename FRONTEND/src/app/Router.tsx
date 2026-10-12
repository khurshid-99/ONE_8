import { createBrowserRouter } from "react-router";
import Home from "../features/home/pages/Home";
import AppLayout from "./AppLayout";
import { ScrollToTop } from "../utils/ScrollToTop";
import Featured from "../features/featured/pages/Featured";
import CricketAll from "../features/featured/pages/CricketAll";
import ActiveLifestyle from "../features/featured/pages/ActiveLifestyle";
import HybridWorkout from "../features/featured/pages/HybridWorkout";
import Women from "../features/women/pages/Women";
import WomenGym from "../features/women/pages/WomenGym";
import WomenRunning from "../features/women/pages/WomenRunning";
import WomenLifestyle from "../features/women/pages/WomenLifestyle";
import Men from "../features/men/pages/Men";
import MenGym from "../features/men/pages/MenGym";
import MenRunning from "../features/men/pages/MenRunning";
import MenLifestyle from "../features/men/pages/MenLifestyle";
import MenCricket from "../features/men/pages/MenCricket";
import MenSeam from "../features/men/pages/MenSeam";
import MenRunningShoes from "../features/men/pages/MenRunningShoes";

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
        path: "/collections",
        children: [
          {
            path: "/collections/featured-all",
            Component: Featured,
          },
          {
            path: "/collections/cricket-all",
            Component: CricketAll,
          },
          {
            path: "/collections/active-lifestyle",
            Component: ActiveLifestyle,
          },
          {
            path: "/collections/hybrid-workout",
            Component: HybridWorkout,
          },
          {
            path: "/collections/women-all",
            Component: Women,
          },
          {
            path: "/collections/women-gym",
            Component: WomenGym,
          },
          {
            path: "/collections/women-running",
            Component: WomenRunning,
          },
          {
            path: "/collections/women-lifestyle",
            Component: WomenLifestyle,
          },
          {
            path: "/collections/men-all",
            Component: Men,
          },
          {
            path: "/collections/men-gym",
            Component: MenGym,
          },
          {
            path: "/collections/mens-running",
            Component: MenRunning,
          },
          {
            path: "/collections/men-lifestyle",
            Component: MenLifestyle,
          },
          {
            path: "/collections/mens-cricket",
            Component: MenCricket,
          },
          {
            path: "/collections/men-seam",
            Component: MenSeam,
          },
          {
            path: "/collections/men-running-shoes",
            Component: MenRunningShoes,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;
