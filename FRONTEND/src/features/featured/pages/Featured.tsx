import { Link, NavLink } from "react-router";
import { Arrow } from "../../../images";

import Filter from "../../../utils/filter/Filter";
import ProductPage from "../../../utils/productPage/ProductPage";
import SideNav from "../../../utils/sideNav/SideNav";

const filtersData = [
  "Featured",
  "Most relevant",
  "Best selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];

const Featured = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-90p" />
      <div className="text-14 text-dark  font-OR flex gap-4 pt-8p px-16p ">
        <Link to={"/"} className=" flex items-center justify-center gap-4 ">
          Home <img src={Arrow} alt="" className="inline-block " />
        </Link>
        <NavLink
          to="/featured-all"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? "text-gray-medium " : "text-dark"
          }
        >
          Featured - All
        </NavLink>
      </div>

      {/*  */}
      <div className="w-full flex gap-23p relative items-start px-20p ">
        {/* Sticky Sidebar */}
        <SideNav />
        {/* Products */}
        <div className="  ">
          <Filter data={filtersData} />
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default Featured;
