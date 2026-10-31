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
      <Navbar />

      <Swiper
        slidesPerView={"auto"}
        pagination={true}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="">
          <header className="w-full aspect-400/685 lg:aspect-1024/500 xl:aspect-1280/630 2xl:aspect-1500/750 relative ">
            <img
              src={HeroImg}
              alt=""
              className="w-full aspect-400/685 lg:aspect-1024/500 xl:aspect-1280/630 2xl:aspect-1500/750 object-cover object-center "
            />
            <div className="absolute top-0 left-0 w-full h-full px-16p pt-32p pb-24p text-white font-OM flex flex-col justify-end items-start gap-3.5 ">
              <h3 className="text-24">
                <strong>Seam XVIII Signature</strong>
              </h3>
              <p className="text-16p pb-11p ">
                Born in cricket, stitched in culture | Live Now
              </p>
              <button className="text-16 text-black bg-white rounded-50 px-32p py-11p ">
                Shop Now
              </button>
            </div>
          </header>
        </SwiperSlide>
        <SwiperSlide className="">
          <header className="w-full aspect-400/685 lg:aspect-1024/500 xl:aspect-1280/630 2xl:aspect-1500/750 relative ">
            <img
              src={Virat1}
              alt=""
              className="w-full aspect-400/685 lg:aspect-1024/500 xl:aspect-1280/630 2xl:aspect-1500/750 object-cover object-center "
            />
            <div className="absolute top-0 left-0 w-full h-full px-16p pt-32p pb-24p text-white font-OM flex flex-col justify-end items-start gap-3.5 ">
              <h3 className="text-24">
                <strong>Seam XVIII Signature</strong>
              </h3>
              <p className="text-16p pb-11p ">
                Born in cricket, stitched in culture | Live Now
              </p>
              <button className="text-16 text-black bg-white rounded-50 px-32p py-11p ">
                Shop Now
              </button>
            </div>
          </header>
        </SwiperSlide>
      </Swiper>

      {/* Featured */}
      <section className="w-full my-80p ">
        <div className="py-20p ">
          <h3 className="text-24 text-dark text-center font-OM">
            <strong>Featured</strong>
          </h3>
        </div>
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

      {/* Virat's Picks */}
      <section className="w-full my-80p ">
        <div className="relative max-w-[1600px] mx-auto px-16p pb-40p ">
          <h3 className="text-24 text-dark font-OB text-center ">
            <strong>Virat's Picks</strong>
          </h3>
        </div>
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

      {/* Cricket Collection */}

      <section className="w-full my-80p ">
        <div className="relative max-w-[1600px] mx-auto px-16p pb-40p ">
          <h3 className="text-24 text-dark font-OB text-center ">
            <strong>Cricket Collection</strong>
          </h3>
        </div>
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

      {/* Elevate Your Everyday */}
      <section className="w-full my-80p ">
        <div className="relative max-w-[1600px] mx-auto px-16p pb-40p ">
          <h3 className="text-24 text-dark font-OB text-center ">
            <strong>Elevate Your Everyday</strong>
          </h3>
        </div>
        <div className="flex justify-center gap-1 px-4 w-full pb-30p ">
          <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            <SwiperSlide className="!w-fit ">
              <EveryDayCard
                img={Footwear}
                name="Footwear"
                className="w-260p aspect-260/420 lg:w-386p lg:aspect-386/463 "
              />
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <EveryDayCard
                img={Clothing}
                name="Clothing"
                className="w-260p aspect-260/420 lg:w-386p lg:aspect-386/463 "
              />
            </SwiperSlide>
            <SwiperSlide className="!w-fit ">
              <EveryDayCard
                img={Caps}
                name="Caps"
                className="w-260p aspect-260/420 lg:w-386p lg:aspect-386/463 "
              />
            </SwiperSlide>
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

      {/* Menswear & Womenswear  */}
      <section className="w-full lg:h-[635px] xl:h-[765px] 2xl:h-[1085px] grid grid-cols-12 gap-16p px-16p my-80p">
        <div className="wraper_50 w-full col-span-12 lg:col-span-6 flex flex-col justify-end">
          <div className="hover_box relative pt-15p pr-15p lg:w-[80%] duration-300 aspect-square ">
            <span className="absolute top-0 right-4 text-10 text-dark-gray font-RM5 uppercase text-center ">
              00. // Mens wear
            </span>
            <span className="absolute rotate-90 top-36 right-0 origin-top-right text-10 text-dark-gray font-RM5 uppercase text-center">
              Engineered for comfort
            </span>
            {/* --- */}

            <img
              src={Men}
              alt=""
              className="w-[99.5%] aspect-square object-center object-cover"
            />
          </div>

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

        {/*  */}
        <div className="wraper_50 w-full col-span-12 lg:col-span-6 flex flex-col justify-end">
          <div className="hover_box relative pt-15p pr-15p lg:w-[80%] duration-300 aspect-square ">
            <span className="absolute top-0 right-4 text-10 text-dark-gray font-RM5 uppercase text-center ">
              00. // Womens wear
            </span>
            <span className="absolute rotate-90 top-36 right-0 origin-top-right text-10 text-dark-gray font-RM5 uppercase text-center">
              Engineered for comfort
            </span>
            {/* --- */}

            <img
              src={Women}
              alt=""
              className="w-[99.5%] aspect-square object-center object-cover"
            />
          </div>

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
        {/*  */}
      </section>

      {/* An Ode To Cricket */}
      <section className="mt-80p pb-80p ">
        <div>
          <img
            src={AnOdeToCricket}
            alt=""
            className="w-full aspect-400/500 lg:w-[1920px] lg:aspect-1920/853 object-cover object-center rounded-t-lg "
          />
        </div>
        <div className="w-full flex flex-col items-center gap-4 pt-16p ">
          <h3 className="text-36 text-dark-gray font-OB ">An Ode To Cricket</h3>
          <p className="tex-18 text-dark-gray font-OM text-center ">
            A collection built around the heritage of the game. Find one that's
            yours.
          </p>
          <button className="font-16 text-dark-gray hover:text-white font-OM px-32p py-11p rounded-50 border-2 border-dark-gray bg-white hover:bg-dark-gray duration-300 ">
            View the Collection
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
