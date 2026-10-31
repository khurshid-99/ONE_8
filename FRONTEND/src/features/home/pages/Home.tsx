import {
  AnOdeToCricket,
  Caps,
  Clothing,
  Footwear,
  HeroImg,
  Lifestyle,
  Men,
  Virat1,
  Virat2,
  Virat3,
  Virat4,
  Women,
} from "../../../images";
import ProductCard from "../../../utils/HomeProductCard";
import EveryDayCard from "../../../utils/EveryDayCard";
import ViratCard from "../components/ViratCard";

import "../style/Virat.scss";
import "../style/Home.scss";
import Navbar from "../../../utils/nav/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <main className="w-full relative scrollbar-none xl:scrollbar-auto ">
      {/* Main navigation bar */}
      <Navbar />

      {/* Hero banner slider */}
      <Swiper
        slidesPerView={"auto"}
        pagination={true}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 3000, // Automatically change slides every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        speed={2000} // Transition animation duration in milliseconds
        modules={[Pagination, Autoplay]} // Enable pagination and autoplay functionality
      >
        {/* First hero banner */}
        <SwiperSlide className="">
          <header className="w-full aspect-400/685 lg:aspect-1024/500 xl:aspect-1280/630 2xl:aspect-1500/750 relative ">
            {/* Hero background image */}
            <img
              src={HeroImg}
              alt=""
              className="w-full aspect-400/685 lg:aspect-1024/500 xl:aspect-1280/630 2xl:aspect-1500/750 object-cover object-center "
            />

            {/* Content displayed over the hero image */}
            <div className="absolute top-0 left-0 w-full h-full px-16p pt-32p pb-24p text-white font-OM flex flex-col justify-end items-start gap-3.5 ">
              <h3 className="text-24">
                <strong>Seam XVIII Signature</strong>
              </h3>

              <p className="text-16p pb-11p ">
                Born in cricket, stitched in culture | Live Now
              </p>

              {/* Hero banner call-to-action button */}
              <button className="text-16 text-black bg-white rounded-50 px-32p py-11p ">
                Shop Now
              </button>
            </div>
          </header>
        </SwiperSlide>

        {/* Second hero banner */}
        <SwiperSlide className="">
          <header className="w-full aspect-400/685 lg:aspect-1024/500 xl:aspect-1280/630 2xl:aspect-1500/750 relative ">
            {/* Hero background image */}
            <img
              src={Virat1}
              alt=""
              className="w-full aspect-400/685 lg:aspect-1024/500 xl:aspect-1280/630 2xl:aspect-1500/750 object-cover object-center "
            />

            {/* Content displayed over the hero image */}
            <div className="absolute top-0 left-0 w-full h-full px-16p pt-32p pb-24p text-white font-OM flex flex-col justify-end items-start gap-3.5 ">
              <h3 className="text-24">
                <strong>Seam XVIII Signature</strong>
              </h3>

              <p className="text-16p pb-11p ">
                Born in cricket, stitched in culture | Live Now
              </p>

              {/* Hero banner call-to-action button */}
              <button className="text-16 text-black bg-white rounded-50 px-32p py-11p ">
                Shop Now
              </button>
            </div>
          </header>
        </SwiperSlide>
      </Swiper>

      {/* Featured products section */}
      <section className="w-full my-80p ">
        {/* Section heading */}
        <div className="py-20p ">
          <h3 className="text-24 text-dark text-center font-OM">
            <strong>Featured</strong>
          </h3>
        </div>

        {/* Horizontally scrollable featured product slider */}
        <div className="w-full px-16p pb-30p ">
          <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            {/* Individual product slides */}
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Virat's Picks section */}
      <section className="w-full my-80p ">
        {/* Section heading */}
        <div className="relative max-w-[1600px] mx-auto px-16p pb-40p ">
          <h3 className="text-24 text-dark font-OB text-center ">
            <strong>Virat's Picks</strong>
          </h3>
        </div>

        {/* Slider containing products selected for Virat's collection */}
        <div className="flex items-center justify-center gap-2 pb-30p px-16p ">
          <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            <SwiperSlide className="!w-fit ">
              <ViratCard img={Virat1} name="Cricket Ribbed Collar Sweatshirt" />
            </SwiperSlide>

            <SwiperSlide className="!w-fit ">
              <ViratCard img={Virat2} name="Prime Flo Cap" />
            </SwiperSlide>

            <SwiperSlide className="!w-fit ">
              <ViratCard img={Virat3} name={"Arc T-Shirt"} />
            </SwiperSlide>

            <SwiperSlide className="!w-fit ">
              <ViratCard img={Virat4} name="Sync Workwear Jacket" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Cricket Collection section */}
      <section className="w-full my-80p ">
        {/* Section heading */}
        <div className="relative max-w-[1600px] mx-auto px-16p pb-40p ">
          <h3 className="text-24 text-dark font-OB text-center ">
            <strong>Cricket Collection</strong>
          </h3>
        </div>

        {/* Horizontally scrollable cricket products */}
        <div className="w-full px-16p pb-30p ">
          <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Elevate Your Everyday category section */}
      <section className="w-full my-80p ">
        {/* Section heading */}
        <div className="relative max-w-[1600px] mx-auto px-16p pb-40p ">
          <h3 className="text-24 text-dark font-OB text-center ">
            <strong>Elevate Your Everyday</strong>
          </h3>
        </div>

        {/* Slider displaying different shopping categories */}
        <div className="flex justify-center gap-1 px-4 w-full pb-30p ">
          <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            {/* Footwear category card */}
            <SwiperSlide className="!w-fit ">
              <EveryDayCard
                img={Footwear}
                name="Footwear"
                className="w-260p aspect-260/420 lg:w-386p lg:aspect-386/463 "
              />
            </SwiperSlide>

            {/* Clothing category card */}
            <SwiperSlide className="!w-fit">
              <EveryDayCard
                img={Clothing}
                name="Clothing"
                className="w-260p aspect-260/420 lg:w-386p lg:aspect-386/463 "
              />
            </SwiperSlide>

            {/* Caps category card */}
            <SwiperSlide className="!w-fit ">
              <EveryDayCard
                img={Caps}
                name="Caps"
                className="w-260p aspect-260/420 lg:w-386p lg:aspect-386/463 "
              />
            </SwiperSlide>

            {/* Active lifestyle category card */}
            <SwiperSlide className="!w-fit ">
              <EveryDayCard
                img={Lifestyle}
                name="Active Lifestyle"
                className="w-260p aspect-260/420 lg:w-386p lg:aspect-386/463 "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Menswear and Womenswear promotional section */}
      <section className="w-full lg:h-[635px] xl:h-[765px] 2xl:h-[1085px] grid grid-cols-12 gap-16p px-16p my-80p">
        {/* Menswear promotional card */}
        <div className="wraper_50 w-full col-span-12 lg:col-span-6 flex flex-col justify-end">
          {/* Menswear image wrapper with decorative labels */}
          <div className="hover_box relative pt-15p pr-15p lg:w-[80%] duration-300 aspect-square ">
            {/* Decorative collection number and category label */}
            <span className="absolute top-0 right-4 text-10 text-dark-gray font-RM5 uppercase text-center ">
              00. // Mens wear
            </span>

            {/* Vertical promotional text */}
            <span className="absolute rotate-90 top-36 right-0 origin-top-right text-10 text-dark-gray font-RM5 uppercase text-center">
              Engineered for comfort
            </span>

            {/* Menswear collection image */}
            <img
              src={Men}
              alt=""
              className="w-[99.5%] aspect-square object-center object-cover"
            />
          </div>

          {/* Menswear title, description and shopping button */}
          <div className="pt-16p">
            <h3 className="text-24 text-dark font-OB lg:pb-8p">Menswear</h3>

            <p className="text-16 text-dark font-OM pb-24p">
              Movement in every form
            </p>

            <button className="text-16 text-white font-OM px-32p py-11p bg-dark rounded-50">
              Shop now
            </button>
          </div>
        </div>

        {/* Womenswear promotional card */}
        <div className="wraper_50 w-full col-span-12 lg:col-span-6 flex flex-col justify-end">
          {/* Womenswear image wrapper with decorative labels */}
          <div className="hover_box relative pt-15p pr-15p lg:w-[80%] duration-300 aspect-square ">
            {/* Decorative collection number and category label */}
            <span className="absolute top-0 right-4 text-10 text-dark-gray font-RM5 uppercase text-center ">
              00. // Womens wear
            </span>

            {/* Vertical promotional text */}
            <span className="absolute rotate-90 top-36 right-0 origin-top-right text-10 text-dark-gray font-RM5 uppercase text-center">
              Engineered for comfort
            </span>

            {/* Womenswear collection image */}
            <img
              src={Women}
              alt=""
              className="w-[99.5%] aspect-square object-center object-cover"
            />
          </div>

          {/* Womenswear title, description and shopping button */}
          <div className="pt-16p">
            <h3 className="text-24 text-dark font-OB lg:pb-8p">Womenswear</h3>

            <p className="text-16 text-dark font-OM pb-24p">
              For the everyday athlete
            </p>

            <button className="text-16 text-white font-OM px-32p py-11p bg-dark rounded-50">
              Shop now
            </button>
          </div>
        </div>
      </section>

      {/* An Ode To Cricket promotional section */}
      <section className="mt-80p pb-80p ">
        {/* Main cricket collection banner image */}
        <div>
          <img
            src={AnOdeToCricket}
            alt=""
            className="w-full aspect-400/500 lg:w-[1920px] lg:aspect-1920/853 object-cover object-center rounded-t-lg "
          />
        </div>

        {/* Collection heading, description and call-to-action */}
        <div className="w-full flex flex-col items-center gap-4 pt-16p ">
          <h3 className="text-36 text-dark-gray font-OB ">An Ode To Cricket</h3>

          <p className="tex-18 text-dark-gray font-OM text-center ">
            A collection built around the heritage of the game. Find one that's
            yours.
          </p>

          {/* Button to explore the cricket collection */}
          <button className="font-16 text-dark-gray hover:text-white font-OM px-32p py-11p rounded-50 border-2 border-dark-gray bg-white hover:bg-dark-gray duration-300 ">
            View the Collection
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
