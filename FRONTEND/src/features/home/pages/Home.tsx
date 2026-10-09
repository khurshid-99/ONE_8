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
import ProductCard from "../../../utils/ProductCard";
import EveryDayCard from "../components/EveryDayCard";
import ViratCard from "../components/ViratCard";

import "../style/Virat.scss";
import "../style/Home.scss";
import { Link } from "react-router";
import Navbar from "../../../utils/nav/Navbar";
import Footer from "../../../utils/footer/Footer";

const Home = () => {
  return (
    <main className="w-full relative">
      <Navbar />

      <header className="w-full h-screen relative ">
        <img
          src={HeroImg}
          alt=""
          className="w-full h-screen object-cover object-center "
        />
        <div className="absolute top-0 left-0 w-full h-full px-16 pt-32p pb-24p text-white font-OM flex flex-col justify-end items-start gap-3.5 ">
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

      {/* Featured */}
      <section className="w-full my-80p ">
        <div className="py-20p ">
          <h3 className="text-24 text-dark text-center font-OM">
            <strong>Featured</strong>
          </h3>
        </div>
        <div className="flex gap-1 px-4 w-full pb-30p ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      {/* Virat's Picks */}
      <section className="w-full my-80p ">
        <div className="relative max-w-[1600px] mx-auto px-16p pb-40p ">
          <h3 className="text-24 text-dark font-OB text-center ">
            <strong>Virat's Picks</strong>
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2 pb-30p ">
          <ViratCard img={Virat1} name="Cricket Ribbed Collar Sweatshirt" />
          <ViratCard img={Virat2} name="Prime Flo Cap" />
          <ViratCard img={Virat3} name={"Arc T-Shirt"} />
          <ViratCard img={Virat4} name="Sync Workwear Jacket" />
        </div>
      </section>

      {/* Cricket Collection */}

      <section className="w-full my-80p ">
        <div className="relative max-w-[1600px] mx-auto px-16p pb-40p ">
          <h3 className="text-24 text-dark font-OB text-center ">
            <strong>Cricket Collection</strong>
          </h3>
        </div>
        <div className="flex gap-1 px-4 w-full pb-30p ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
          <EveryDayCard img={Footwear} name="Footwear" />
          <EveryDayCard img={Clothing} name="Clothing" />
          <EveryDayCard img={Caps} name="Caps" />
          <EveryDayCard img={Lifestyle} name="Active Lifestyle" />
        </div>
      </section>

      {/* Menswear & Womenswear  */}
      <section className="w-full h-[1077px] flex items-center justify-cente p-4 my-80p  ">
        <div className="men_50 w-1/2 bg-white">
          <div className="w-[928px] h-[1077px] flex flex-col justify-end ">
            <div className="men_img_wrapper relative w-[742px] aspect-square flex items-end justify-start">
              <span className="absolute top-0 right-[32px] text-10 text-dark-gray font-RM5 uppercase">
                00. // Mens wear
              </span>

              <img
                src={Men}
                alt=""
                className="men_img w-[725px] aspect-square object-center object-cover"
              />

              <div className="men_side_text absolute top-[22px] left-full rotate-90 origin-top-left w-[907px] flex flex-row ">
                <span className="text-10 text-dark-gray font-RM5 uppercase text-center">
                  Engineered for comfort
                </span>
              </div>
            </div>

            <div className="pt-16p">
              <h3 className="text-24 text-dark font-OB pb-8p">Menswear</h3>
              <p className="text-16 text-dark font-OM pb-24p">
                Movement in every form
              </p>
              <button className="text-16 text-white font-OM px-32p py-11p bg-dark rounded-50">
                Shop now
              </button>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="men_50 w-1/2 bg-white">
          <div className="w-[928px] h-[1077px] flex flex-col justify-end ">
            <div className="men_img_wrapper relative w-[742px] aspect-square flex items-end justify-start ">
              <span className="absolute top-0 right-[32px] text-10 text-dark-gray font-RM5 uppercase">
                00. // Womens wear
              </span>

              <img
                src={Women}
                alt=""
                className="men_img w-[725px] aspect-square object-center object-cover"
              />

              <div className="men_side_text absolute top-[22px] left-full rotate-90 origin-top-left w-[907px] flex flex-row ">
                <span className="text-10 text-dark-gray font-RM5 uppercase text-center">
                  Engineered for comfort
                </span>
              </div>
            </div>

            <div className="pt-16p">
              <h3 className="text-24 text-dark font-OB pb-8p">Womenswear</h3>
              <p className="text-16 text-dark font-OM pb-24p">
                For the everyday athlete
              </p>
              <button className="text-16 text-white font-OM px-32p py-11p bg-dark rounded-50">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* An Ode To Cricket */}
      <section className="mt-80p pb-80p ">
        <div>
          <img
            src={AnOdeToCricket}
            alt=""
            className="w-[1920px] aspect-1920/853 object-cover object-center rounded-t-lg "
          />
        </div>
        <div className="w-full flex flex-col items-center gap-4 pt-16p ">
          <h3 className="text-36 text-dark-gray font-OB ">An Ode To Cricket</h3>
          <p className="tex-18 text-dark-gray font-OM ">
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
