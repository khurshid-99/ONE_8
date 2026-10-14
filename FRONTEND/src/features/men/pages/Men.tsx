import { Link, NavLink } from "react-router";
import {
  ActiveLifestyleCap1,
  Arrow,
  MenCricket1,
  MenGym1,
  Running,
} from "../../../images";
import CollectionCard from "../../../utils/collectionCard/CollectionCard";
import Filter from "../../../utils/filter/Filter";
import ProductPage from "../../../utils/productPage/ProductPage";
import SideNav from "../../../utils/sideNav/SideNav";
import { filtersData } from "../../../utils/testData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Men = () => {
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
      <div className="w-full flex gap-23p relative items-start px-20p pb-24p ">
        {/* Sticky Sidebar */}
        <SideNav />
        {/* Products */}
        <div className="w-359.25 ">
          <div className=" mb-24p ">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.5}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3.5,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <CollectionCard
                  to={"/collections/men-gym"}
                  name="men-gym"
                  img={MenGym1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CollectionCard
                  to={"/collections/mens-running"}
                  name="mens-running"
                  img={Running}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CollectionCard
                  to={"/collections/men-lifestyle"}
                  name="men-lifestyle"
                  img={ActiveLifestyleCap1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CollectionCard
                  to={"/collections/mens-cricket"}
                  name="mens-cricket"
                  img={MenCricket1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <Filter data={filtersData} />
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default Men;
