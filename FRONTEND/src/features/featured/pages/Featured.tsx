import { Link, NavLink } from "react-router";
import ProductCart from "../components/ProductCart";
import { Arrow, ArrowDown } from "../../../images";
import { useState } from "react";
import SideNave from "../../../utils/sideNave/SideNave";

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
  const [filterData, setFilterData] = useState<string[]>(filtersData);

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
        <SideNave />
        {/* Products */}
        <div className="  ">
          <div className="mb-16p flex items-start justify-end px-24p  ">
            <div className="w-50 aspect-200/56 flex items-center relative ">
              <select
                name=""
                id=""
                className={`w-full h-full appearance-none  border border-gray-muted rounded-lg px-15p  `}
              >
                {filterData.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
              <img
                src={ArrowDown}
                alt=""
                className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none "
              />
            </div>
          </div>
          <div className="flex-1 min-w-0 py-23p flex flex-wrap gap-20p items-start justify-center border-t border-gray-muted">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
