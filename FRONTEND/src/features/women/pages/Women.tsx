import { Link, NavLink } from "react-router";
import {
  Arrow,
  Gym,
  WomenActiveLifestyle,
  WomenRunningPant,
} from "../../../images";
import Filter from "../../../utils/filter/Filter";
import ProductPage from "../../../utils/productPage/ProductPage";
import { filtersData } from "../../../utils/testData";
import SideNav from "../../../utils/sideNav/SideNav";
import CollectionCard from "../../../utils/collectionCard/CollectionCard";

const Women = () => {
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
          <div className="flex items-start gap-3 mb-24p px-24p ">
            <CollectionCard
              to={"/collections/women-gym"}
              name="Women - Gym"
              img={Gym}
            />
            <CollectionCard
              to="/collections/women-running"
              name="Women - Running"
              img={WomenRunningPant}
            />
            <CollectionCard
              to="/collections/women-lifestyle"
              name="Women - Lifestyle"
              img={WomenActiveLifestyle}
            />
          </div>

          <Filter data={filtersData} />
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default Women;
