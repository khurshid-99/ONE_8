import { Link, NavLink } from "react-router";
import { Arrow, Gym, Running } from "../../../images";
import SideNav from "../../../utils/sideNav/SideNav";
import Filter from "../../../utils/filter/Filter";
import { filtersData } from "../../../utils/testData";
import ProductPage from "../../../utils/productPage/ProductPage";

function HybridWorkout() {
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
          <div className="flex items-start gap-3 mb-24p ">
            <Link
              to={""}
              className="inline-block w-99.5 aspect-398/466 bg-light rounded-sm overflow-hidden "
            >
              <div className="w-full aspect-398/398 object-center object-cover ">
                <img src={Running} alt="" />
              </div>
              <div className="py-16p px-12p border-b border-x border-light ">
                <h4 className="text-18 text-dark-gray font-OB mb-8p ">
                  Running
                </h4>
              </div>
            </Link>
            <Link
              to={""}
              className="inline-block w-99.5 aspect-398/466 bg-light rounded-sm overflow-hidden "
            >
              <div className="w-full aspect-398/398  ">
                <img
                  src={Gym}
                  alt=""
                  className="w-full aspect-square 9object-center object-cover"
                />
              </div>
              <div className="py-16p px-12p border-b border-x border-light ">
                <h4 className="text-18 text-dark-gray font-OB mb-8p ">Gym</h4>
              </div>
            </Link>
          </div>

          <Filter data={filtersData} />
          <ProductPage />
        </div>
      </div>
    </div>
  );
}

export default HybridWorkout;
