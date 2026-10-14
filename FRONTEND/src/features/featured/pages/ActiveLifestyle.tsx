import { Link, NavLink } from "react-router";
import Filter from "../../../utils/filter/Filter";
import ProductPage from "../../../utils/productPage/ProductPage";
import SideNav from "../../../utils/sideNav/SideNav";
import { filtersData } from "../../../utils/testData";
import {
  ActiveLifestyleCap1,
  ActiveLifestyleWomen1,
  Arrow,
} from "../../../images";

const ActiveLifestyle = () => {
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
      <div className="w-full flex gap-23p relative items-start px-20p pb-24p  ">
        {/* Sticky Sidebar */}
        <SideNav />
        {/* Products */}
        <div className="  ">
          <div className="flex items-start gap-3 mb-24p px-24p ">
            <Link
              to={""}
              className="inline-block w-99.5 aspect-398/466 bg-light rounded-sm overflow-hidden "
            >
              <div className="w-full aspect-398/398 object-center object-cover ">
                <img src={ActiveLifestyleWomen1} alt="" />
              </div>
              <div className="py-16p px-12p border-b border-x border-light ">
                <h4 className="text-18 text-dark-gray font-OB mb-8p ">
                  Active Lifestyle - Women
                </h4>
              </div>
            </Link>
            <Link
              to={""}
              className="inline-block w-99.5 aspect-398/466 bg-light rounded-sm overflow-hidden "
            >
              <div className="w-full aspect-398/398  ">
                <img
                  src={ActiveLifestyleCap1}
                  alt=""
                  className="w-full aspect-square 9object-center object-cover"
                />
              </div>
              <div className="py-16p px-12p border-b border-x border-light ">
                <h4 className="text-18 text-dark-gray font-OB mb-8p ">
                  Active Lifestyle - Men
                </h4>
              </div>
            </Link>
          </div>

          <Filter data={filtersData} />
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default ActiveLifestyle;
