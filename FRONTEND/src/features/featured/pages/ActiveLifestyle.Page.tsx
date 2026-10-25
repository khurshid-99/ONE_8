import { Swiper, SwiperSlide } from "swiper/react";
import { ActBanner1, BoomLogoIcon } from "../../../images";
import ProductCard from "../../../utils/productCard/ProductCard";

import "swiper/css";

const ActiveLifestylePage = () => {
  return (
    <main>
      <div className=" w-full h-90p" />
      <header className="w-full aspect-auto px-16p ">
        <img
          src={ActBanner1}
          alt=""
          className="w-full aspect-auto object-center object-cover "
        />
      </header>
      <section className="w-full px-16p ">
        <img
          src={BoomLogoIcon}
          alt=""
          className="w-60p aspect-square object-cover object-center "
        />
        <h3 className="text-24 text-black font-OB pb-24p ">
          Designed for those who stretch time.
        </h3>
        <div className="w-1/2 py-80p px-100p ">
          <p className="text-16 text-black font-OM ">
            A collection engineered for movement, refined by style and anchored
            in premium comfort. Made for the coffee runs, the meetings, and the
            evenings that don't quite end on time. Relaxed in feel, sharp in
            aesthetic. Built to help you push for more and keep going long after
            the day ends.
          </p>
        </div>
      </section>
      <section className="px-16p py-48p ">
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
        </Swiper>
      </section>
    </main>
  );
};

export default ActiveLifestylePage;
