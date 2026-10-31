import { Link, NavLink, useLocation } from "react-router";
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
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Toggle, { type ToggleRef } from "../../../utils/toggleComponents/Toggle";
import { useEffect, useRef, useState } from "react";

const Women = () => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);
  const isSideNavRef = useRef<ToggleRef | null>(null);

  const path = useLocation();
  

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Save current styles
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;

    if (isSideNavActive) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Lock background scrolling
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
    }

    return () => {
      // Restore original styles
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;

      // Restore previous scroll position
      window.scrollTo(0, scrollY);
    };
  }, [isSideNavActive]);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-90p" />
      <div className="text-14 text-dark font-OR flex gap-4 pt-8p px-16p ">
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

      <span className="block text-28 text-dark font-OB capitalize px-16p pb-16p lg:hidden ">
        {path.pathname.split("/")[2]}
      </span>

      {/*  */}
      <div className="w-full flex gap-23p relative items-start lg:px-20p pb-24p ">
        {/* Sticky Sidebar */}

        <SideNav className="hidden lg:inline-block " />

        {/* Mobile */}
        <Toggle
          ref={isSideNavRef}
          isActive={isSideNavActive}
          setIsActive={setIsSideNavActive}
          side="left"
          className="top-0 z-999"
        >
          <div
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-contain scrollbar-none "
          >
            <SideNav toggleRef={isSideNavRef} className="" />
          </div>
        </Toggle>
        {/* Products */}
        <div className="overflow-x-hidden px-16p ">
          <div className="w-full min-w-0 mb-24p lg:px-0  ">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              className="mySwiper w-full"
            >
              <SwiperSlide className="!w-fit">
                <CollectionCard
                  to="/collections/women-gym"
                  name="Women - Gym"
                  img={Gym}
                  className="w-[272px] aspect-[272/340] lg:w-[398px] lg:aspect-[398/460]"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-fit">
                <CollectionCard
                  to="/collections/women-running"
                  name="Women - Running"
                  img={WomenRunningPant}
                  className="w-[272px] aspect-[272/340] lg:w-[398px] lg:aspect-[398/460]"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-fit">
                <CollectionCard
                  to="/collections/women-lifestyle"
                  name="Women - Lifestyle"
                  img={WomenActiveLifestyle}
                  className="w-[272px] aspect-[272/340] lg:w-[398px] lg:aspect-[398/460]"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="grid grid-cols-2 gap-8p mb-16p ">
            <Filter data={filtersData} />
            <button
              onClick={() => setIsSideNavActive(true)}
              className="w-[178px] lg:w-50 aspect-178/56 lg:aspect-200/56 flex items-center justify-between relative border border-gray-muted rounded-8 p-16p lg:hidden cursor-pointer select-none "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1001 3.32499C2.1001 3.03405 2.33416 2.79999 2.6251 2.79999H11.3751C11.666 2.79999 11.9001 3.03405 11.9001 3.32499C11.9001 3.61593 11.666 3.84999 11.3751 3.84999H2.6251C2.33416 3.84999 2.1001 3.61593 2.1001 3.32499ZM2.1001 6.99999C2.1001 6.70905 2.33416 6.47499 2.6251 6.47499H8.5751C8.86603 6.47499 9.1001 6.70905 9.1001 6.99999C9.1001 7.29093 8.86603 7.52499 8.5751 7.52499H2.6251C2.33416 7.52499 2.1001 7.29093 2.1001 6.99999ZM6.3001 10.675C6.3001 10.9659 6.06604 11.2 5.7751 11.2H2.6251C2.33416 11.2 2.1001 10.9659 2.1001 10.675C2.1001 10.3841 2.33416 10.15 2.6251 10.15H5.7751C6.06604 10.15 6.3001 10.3841 6.3001 10.675Z"
                  fill="black"
                ></path>
              </svg>
              <span className="text-12 text-dark-gray font-OB uppercase ">
                Filter
              </span>
              <span className="text-gray-dark ">|</span>
              <span className="text-gray-dark ">88 Results</span>
            </button>
          </div>
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default Women;

/*


<div className="w-full min-w-0 mb-24p px-16p lg:px-24p bg-[green] ">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              className="mySwiper w-full"
            >
              <SwiperSlide className="!w-fit">
                <CollectionCard
                  to="/collections/women-gym"
                  name="Women - Gym"
                  img={Gym}
                  className="w-[272px] aspect-[272/340] lg:w-[398px] lg:aspect-[398/460]"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-fit">
                <CollectionCard
                  to="/collections/women-running"
                  name="Women - Running"
                  img={WomenRunningPant}
                  className="w-[272px] aspect-[272/340] lg:w-[398px] lg:aspect-[398/460]"
                />
              </SwiperSlide>

              <SwiperSlide className="!w-fit">
                <CollectionCard
                  to="/collections/women-lifestyle"
                  name="Women - Lifestyle"
                  img={WomenActiveLifestyle}
                  className="w-[272px] aspect-[272/340] lg:w-[398px] lg:aspect-[398/460]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
*/
