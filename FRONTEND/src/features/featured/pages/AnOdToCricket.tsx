import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../../utils/productCard/ProductCard";
import {
  AnOdImg1,
  AnOdImg2,
  AnOdImg3,
  AnOdImg4,
  AnOdImg5,
  AnOdImg6,
  AnOdImg7,
  AnOdImg8,
  AnOdImg9,
  AnOdVideoDestop1,
  AnOdVideoDestop2,
  AnOdVideoDestop3,
  BoomLogoIcon,
  Caps,
  Clothing,
  Footwear,
  Lifestyle,
  RedShoe1,
  ViratAnOd,
} from "../../../images";

// Swiper
import "swiper/css";
import AnOdCard from "../components/AnOdCard";
import EveryDayCard from "../../../utils/EveryDayCard";

const AnOdToCricket = () => {
  return (
    <main className="w-full  ">
      <div className=" w-full h-90p" />
      <header className="w-full aspect-auto ">
        <video
          src={AnOdVideoDestop1}
          muted={true}
          autoPlay={true}
          loop={true}
          controls={true}
          className="w-full h-full object-cover object-center "
        ></video>
      </header>
      <section className="w-full px-16p pt-24p ">
        <img
          src={BoomLogoIcon}
          alt=""
          className="w-60p aspect-square object-center object-cover "
        />
        <h3 className="text-24 text-black font-OB pb-20p ">
          A Tribute to Cricket
        </h3>
        <p className="text-16 text-black font-OM ">
          Tell me a game that lords and nawabs played side by side. A game named
          not for victory, but for the ashes. Cricket is not just played, it is
          Prepared, Preserved, Crafted, Inherited and Reborn with every
          generation. And then comes a player who changes the tempo of the game.
          <br />
          The game evolves - faster, louder, relentless.
        </p>
      </section>
      <section className="w-full grid grid-cols-12 auto-rows-auto pt-40p px-16p gap-8p mt-35p ">
        <div className="col-span-6 aspect-932/744 ">
          <div className="flex flex-col gap-24p pb-48p ">
            <img src={ViratAnOd} alt="" className="w-[932px] h-auto " />
            <div className=" flex justify-center ">
              <button className="text-16 text-dark font-OM bg-cyan px-32p py-11p rounded-50 border-2 border-cyan  ">
                Explore Clothing
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 aspect-932/744 ">
          <div className="flex flex-col gap-24p ">
            <img src={RedShoe1} alt="" className="w-[932px] h-auto " />
            <div className=" flex justify-center ">
              <button className="text-16 text-dark font-OM bg-cyan px-32p py-11p rounded-50 border-2 border-cyan ">
                Explore Clothing
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-16p py-24p  ">
        <h3 className="text-24 text-black font-OB pb-20p ">
          Born in Cricket, stitched in culture.
        </h3>
        <p className="text-16 text-black font-OM ">
          A collection of cricket-coded clothing and footwear, each piece
          intentionally crafted as a tribute to the game. Season-ball inspired
          finishes, stitched seams and retro cricket cues - made for those who
          carry the game with them.
        </p>
      </section>
      <section className="px-16p  ">
        <video
          src={AnOdVideoDestop2}
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-auto "
        ></video>
      </section>
      <section className="w-full  px-16p pb-30p my-80p  ">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          breakpoints={{}}
          className="mySwiper"
        >
          <SwiperSlide className="!w-fit">
            <AnOdCard image={AnOdImg1} width={375} />
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <AnOdCard image={AnOdImg2} width={561} />
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <AnOdCard image={AnOdImg3} width={750} />
          </SwiperSlide>
          <SwiperSlide className="!w-fit">
            <AnOdCard image={AnOdImg4} width={935} />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="w-full px-16p py-48p mt-24p mb-48p ">
        <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper ">
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
      </section>
      <section className="w-full px-16p ">
        <video
          muted
          loop
          autoPlay
          src={AnOdVideoDestop3}
          className="w-full aspect-auto object-cover object-center"
        ></video>
      </section>
      <section className="w-full px-16p grid grid-cols-12 gap-8p items-center mt-80p ">
        <div className="w-full col-span-6 ">
          <img
            src={AnOdImg5}
            alt=""
            className="w-full aspect-auto rounded-8 "
          />
        </div>
        <div className="w-full col-span-6 flex flex-col justify-center gap-24p ">
          <img
            src={AnOdImg6}
            alt=""
            className="w-full aspect-auto rounded-8 "
          />
          <p className="text-18 text-dark font-OM ">
            Handed down from one generation to the next. Carrying the legacy of
            the game forward.
          </p>
        </div>
      </section>
      <section className="w-full px-16p grid grid-cols-12 gap-8p items-center mt-80p ">
        <div className="w-full col-span-6 ">
          <img
            src={AnOdImg7}
            alt=""
            className="w-full aspect-auto rounded-8 "
          />
        </div>
        <div className="w-full col-span-6 pb-48p ">
          <img
            src={AnOdImg8}
            alt=""
            className="w-full aspect-auto rounded-8 "
          />
        </div>
      </section>
      <section className="w-full grid grid-cols-[repeat(12, 1fr)] pt-24p pb-16p ">
        <img
          src={AnOdImg9}
          alt=""
          className="w-full aspect-auto object-cover object-center "
        />
      </section>
      <section className="w-full px-16p py-80p  ">
        <div className="pb-40p text-center ">
          <h3 className="text-24 text-dark font-OB ">Elevate Your Everyday</h3>
        </div>
        <div className="flex items-center justify-center gap-8p pb-30p ">
          <EveryDayCard img={Footwear} name="Footwear" wd={462} hd={555} />
          <EveryDayCard img={Clothing} name="Clothing" wd={462} hd={555} />
          <EveryDayCard img={Caps} name="Caps" wd={462} hd={555} />
          <EveryDayCard
            img={Lifestyle}
            name="Active Lifestyle"
            wd={462}
            hd={555}
          />
        </div>
      </section>
    </main>
  );
};

export default AnOdToCricket;
