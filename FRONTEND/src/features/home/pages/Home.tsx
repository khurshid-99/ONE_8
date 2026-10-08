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

      {/* Footer */}
      <footer className="w-full bg-dark-gray pt-40p ">
        <div className="max-w-1500p px-16p mx-auto ">
          <h2 className="text-48 text-white font-OB mb-8p ">
            Join the one8 movement
          </h2>
          <p className="text-18 text-white font-OM ">
            Get exclusive drops, training tips, and stories that fuel your next
            breakthrough - straight to your inbox.
          </p>
          <div className="flex items-center justify-between gap-[32px] pt-70p pb-24p  ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
              className="w-[1234px] h-[80px] text-60 text-white font-OB border-b border-gray-medium outline-none placeholder:text-60 placeholder:font-OB  "
            />
            <button className="px-32p py-11p bg-cyan text-16 text-dark-gray font-OM rounded-50 ">
              Join the newsletter
            </button>
          </div>
        </div>

        {/*  */}
        <div className="border-t border-b border-gray-medium  ">
          <div className="relative max-w-1500p mx-auto flex justify-center ">
            <div className="absolute top-40p -left-70p w-[20px] h-auto ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="108"
                viewBox="0 0 50 108"
                fill="none"
                className="h-auto max-w-full text-white "
              >
                <path
                  d="M23.2515 -1.01635e-06L22.7879 16.1543C14.6592 17.2391 8.38719 24.2202 8.3872 32.6731C8.3872 37.7529 10.6539 42.2981 14.2246 45.3581C5.81286 49.3978 -2.18467e-06 58.0207 -1.7482e-06 68.0058C-1.20849e-06 80.353 8.88869 90.6177 20.5924 92.7069L20.1533 108L29.9425 108L29.5101 92.6868C41.1648 90.5551 50 80.3172 50 68.0058C50 58.0207 44.1871 49.4 35.7732 45.3603C39.3438 42.3026 41.6106 37.7574 41.6106 32.6753C41.6106 24.2694 35.4099 17.3196 27.3503 16.1721L26.8934 -1.17555e-06L23.2515 -1.01635e-06ZM13.8301 32.0669C13.8301 26.6874 17.608 22.1936 22.6474 21.1088L22.0234 42.8707C17.3004 41.5622 13.8323 37.2228 13.8323 32.0669L13.8301 32.0669ZM6.97187 67.328C6.97187 58.4211 13.3865 51.0239 21.8317 49.5185L20.8153 84.925C12.8761 83.0305 6.97187 75.8727 6.97187 67.328ZM43.0281 67.328C43.0281 75.8369 37.1751 82.9678 29.2894 84.9004L28.2909 49.5409C36.6737 51.0955 43.0259 58.4636 43.0259 67.328L43.0281 67.328ZM36.1699 32.0669C36.1699 37.1758 32.762 41.4839 28.1037 42.835L27.4907 21.1401C32.4589 22.2764 36.1699 26.7344 36.1699 32.0669Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {/*  */}
            <nav className="w-1210p flex items-start justify-between px-16p py-40p border-r border-gray-medium ">
              <div className="w-[222.8px] flex flex-col gap-[16px] ">
                <Link to={""} className="text-18 text-white font-OB ">
                  Shop
                </Link>
                <ul className="text-14 text-white font-OM flex flex-col gap-[12px]  ">
                  <li>
                    <Link to={""}>An Ode to Cricket</Link>
                  </li>
                  <li>
                    <Link to={""}>Active Lifestyle</Link>
                  </li>
                  <li>
                    <Link to={""}>Cover Drive</Link>
                  </li>
                  <li>
                    <Link to={""}>Hybrid Workout</Link>
                  </li>
                </ul>
              </div>

              {/*  */}
              <div className="w-[222.8px] flex flex-col gap-[16px] ">
                <Link to={""} className="text-18 text-white font-OB ">
                  one8
                </Link>
                <ul className="text-14 text-white font-OM flex flex-col gap-[12px]  ">
                  <li>
                    <Link to={""}>About one8</Link>
                  </li>
                  <li>
                    <Link to={""}>The one8 Promise</Link>
                  </li>
                </ul>
              </div>

              {/*  */}
              <div className="w-[222.8px] flex flex-col gap-[16px] ">
                <Link to={""} className="text-18 text-white font-OB ">
                  Customer Support
                </Link>
                <ul className="text-14 text-white font-OM flex flex-col gap-[12px]  ">
                  <li>
                    <Link to={""}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={""}>Return & Exchange Portal</Link>
                  </li>
                  <li>
                    <Link to={""}>FAQs</Link>
                  </li>
                </ul>
              </div>

              {/*  */}
              <div className="w-[222.8px] flex flex-col gap-[16px] ">
                <Link to={""} className="text-18 text-white font-OB ">
                  Account
                </Link>
                <ul className="text-14 text-white font-OM flex flex-col gap-[12px]  ">
                  <li>
                    <Link to={""}>Log In</Link>
                  </li>
                </ul>
              </div>

              {/*  */}
              <div className="w-[222.8px] flex flex-col gap-[16px] ">
                <Link to={""} className="text-18 text-white font-OB ">
                  Legal
                </Link>
                <ul className="text-14 text-white font-OM flex flex-col gap-[12px]  ">
                  <li>
                    <Link to={""}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={""}>Terms of Use</Link>
                  </li>
                  <li>
                    <Link to={""}>Warranty Policy</Link>
                  </li>
                  <li>
                    <Link to={""}>Return, Exchanges and Refund Policy</Link>
                  </li>
                  <li>
                    <Link to={""}>Cookie Policy</Link>
                  </li>
                </ul>
              </div>

              {/*  */}
            </nav>
            {/*  */}
            <div className="px-24p py-40p flex flex-col items-start gap-[16px] text-white ">
              <span className="block text-18 font-OB ">Follow</span>
              <span className="block text-14 font-OM ">
                Connect with us on our social channels
              </span>
              <div className="flex items-center justify-center gap-[16px] text-14 text-dark-gray ">
                <Link
                  to={""}
                  className=" w-24p aspect-square rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3948_13395)">
                      <path
                        d="M7.47578 8.9995L7.89077 6.104H5.29677V4.225C5.29677 3.433 5.659 2.6605 6.82087 2.6605H8V0.1955C8 0.1955 6.9301 0 5.90687 0C3.7708 0 2.37461 1.387 2.37461 3.8975V6.1045H0V9H2.37461V16H5.29677V9L7.47578 8.9995Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3948_13395">
                        <rect width="8" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                {/*  */}
                <Link
                  to={""}
                  className=" w-24p aspect-square rounded-full flex bg-white items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                  </svg>
                </Link>
                {/*  */}
                <Link
                  to={""}
                  className=" w-24p aspect-square rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <circle
                      cx="10.7896"
                      cy="3.91835"
                      r="0.875"
                      transform="rotate(-25.2402 10.7896 3.91835)"
                      fill="currentColor"
                    ></circle>
                    <path
                      d="M7 3.5C5.04545 3.5 3.5 5.09091 3.5 7C3.5 8.90909 5.09091 10.5 7 10.5C8.90909 10.5 10.5 8.90909 10.5 7C10.5 5.09091 8.95455 3.5 7 3.5ZM7 9.27273C5.77273 9.27273 4.72727 8.27273 4.72727 7C4.72727 5.72727 5.72727 4.72727 7 4.72727C8.27273 4.72727 9.27273 5.72727 9.27273 7C9.27273 8.27273 8.22727 9.27273 7 9.27273Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12.88 1.16667C12.1333 0.373333 11.1067 0 9.89333 0H4.10667C1.63333 0 0 1.63333 0 4.10667V9.89333C0 11.1067 0.42 12.18 1.16667 12.9267C1.91333 13.6267 2.94 14 4.10667 14H9.84667C11.06 14 12.0867 13.6267 12.8333 12.88C13.58 12.1333 14 11.1067 14 9.89333V4.10667C14 2.89333 13.6267 1.86667 12.88 1.16667ZM12.6933 9.89333C12.6933 10.7333 12.4133 11.48 11.9467 11.9467C11.4333 12.4133 10.7333 12.6933 9.89333 12.6933H4.10667C3.26667 12.6933 2.56667 12.4133 2.05333 11.9467C1.54 11.4333 1.26 10.7333 1.26 9.84667V4.10667C1.26 3.26667 1.54 2.52 2.00667 2.05333C2.52 1.58667 3.22 1.30667 4.06 1.30667H9.89333C10.7333 1.30667 11.4333 1.58667 11.9467 2.05333C12.46 2.56667 12.6933 3.26667 12.6933 4.10667V9.89333Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
                {/*  */}
                <Link
                  to={""}
                  className=" w-24p aspect-square rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3948_13409)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 12H9.53438V7.80049C9.53438 6.6491 9.09688 6.00566 8.18555 6.00566C7.19414 6.00566 6.67617 6.67526 6.67617 7.80049V12H4.3V4H6.67617V5.0776C6.67617 5.0776 7.39063 3.75559 9.08828 3.75559C10.7852 3.75559 12 4.7918 12 6.9349V12ZM1.46523 2.95246C0.655859 2.95246 0 2.29146 0 1.47623C0 0.661005 0.655859 0 1.46523 0C2.27461 0 2.93008 0.661005 2.93008 1.47623C2.93008 2.29146 2.27461 2.95246 1.46523 2.95246ZM0.238281 12H2.71602V4H0.238281V12Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3948_13409">
                        <rect width="12" height="12" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                {/*  */}
                <Link
                  to={""}
                  className="w-24p aspect-square rounded-full bg-white flex items-center justify-center "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3948_13406)">
                      <path
                        d="M7 0C0.120235 0 0 0.618063 0 5.44444C0 10.2708 0.120235 10.8889 7 10.8889C13.8798 10.8889 14 10.2708 14 5.44444C14 0.618063 13.8798 0 7 0ZM9.24329 5.68069L6.10071 7.16221C6.04795 7.19528 5.98702 7.21261 5.92494 7.21221C5.86286 7.21182 5.80215 7.19371 5.74981 7.15997C5.69748 7.12624 5.65564 7.07825 5.62914 7.02154C5.60263 6.96483 5.59253 6.90171 5.6 6.83945V4.0486C5.59253 3.98635 5.60263 3.92323 5.62914 3.86652C5.65564 3.80981 5.69748 3.76182 5.74981 3.72808C5.80215 3.69435 5.86286 3.67624 5.92494 3.67584C5.98702 3.67545 6.04795 3.69278 6.10071 3.72585L9.24412 5.2082C9.51835 5.33797 9.51835 5.55009 9.24329 5.68069Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3948_13406">
                        <rect width="14" height="10.8889" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="max-w-1500p mx-auto ">
          <div className="py-24p flex items-center gap-32p  ">
            <span className="text-14 text-white font-OM ">© one8 2026</span>
            <div className="flex items-center gap-8p ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                fill="none"
                aria-labelledby="pi-american_express"
              >
                <title id="pi-american_express">American Express</title>
                <rect
                  x=".5"
                  y=".5"
                  width="37"
                  height="23"
                  rx="2.5"
                  stroke="#000"
                  stroke-opacity=".07"
                  fill="none"
                ></rect>
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z"
                  fill="#0071CE"
                  // style="fill:#0071CE;fill:color(display-p3 0.0000 0.4431 0.8078);fill-opacity:1;"
                ></path>
                <path
                  d="M3 0.5H35C36.3348 0.5 37.5 1.58692 37.5 3V21C37.5 22.4239 36.4239 23.5 35 23.5H3C1.66524 23.5 0.5 22.4131 0.5 21V3C0.5 1.57614 1.57614 0.5 3 0.5Z"
                  stroke="black"
                  stroke-opacity="0.07"
                  // style="stroke:black;stroke-opacity:0.07;"
                ></path>
                <path
                  d="M25.8662 6.33203V3H31L31.8662 5.5332L32.7334 3H37V14.2002H36.7998L34.8672 16.2656L36.7998 18.3594H37V21.2666H33.5996L31.9336 19.3994L30.2002 21.2666H19.4668V12.666H16L20.2666 3H24.4004L25.8662 6.33203ZM20.5996 20.2656H27V18.5322H22.666V17.3994H26.8662V15.666H22.666V14.5322H27V12.7988H20.5996V20.2656ZM30.5332 16.5322L27 20.2656H29.5996L31.8662 17.8662L34.0664 20.2656H36.7324L33.1992 16.4658L36.7324 12.7988H34.1328L31.8662 15.1992L29.7324 12.7988H27L30.5332 16.5322ZM17.666 11.7324H19.9326L20.5332 10.1992H23.999L24.666 11.7324H26.999L23.666 4.19922H20.999L17.666 11.7324ZM33.5996 4.19922L31.9326 8.86621L30.1992 4.19922H27V11.666H29.0664V6.39941L31 11.666H32.7998L34.7324 6.39941V11.666H36.7324V4.13281L33.5996 4.19922ZM23.2656 8.46582H21.2656L22.2656 5.99902L23.2656 8.46582Z"
                  fill="white"
                  // style="fill:white;fill-opacity:1;"
                ></path>
              </svg>
              {/*  */}
              <svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-diners_club"
              >
                <title id="pi-diners_club">Diners Club</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                  fill="#3086C8"
                ></path>
              </svg>
              {/*  */}
              <svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="24"
                role="img"
                aria-labelledby="pi-maestro"
              >
                <title id="pi-maestro">Maestro</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                <circle fill="#00A2E5" cx="23" cy="12" r="7"></circle>
                <path
                  fill="#7375CF"
                  d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                ></path>
              </svg>
              {/*  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                fill="none"
                aria-labelledby="pi-master"
              >
                <title id="pi-master">Mastercard</title>
                <rect
                  x=".5"
                  y=".5"
                  width="37"
                  height="23"
                  rx="2.5"
                  stroke="#000"
                  stroke-opacity=".07"
                  fill="none"
                ></rect>
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z"
                  fill="#1C1C1C"
                  // style="fill:#1C1C1C;fill:color(display-p3 0.1098 0.1098 0.1098);fill-opacity:1;"
                ></path>
                <path
                  d="M35 1C36.1 1 37 1.9 37 3V21C37 22.1 36.1 23 35 23H3C1.9 23 1 22.1 1 21V3C1 1.9 1.9 1 3 1H35Z"
                  fill="#232323"
                  // style="fill:#232323;fill:color(display-p3 0.1373 0.1373 0.1373);fill-opacity:1;"
                ></path>
                <path
                  d="M14.6364 19.2727C18.8538 19.2727 22.2727 15.8538 22.2727 11.6364C22.2727 7.41892 18.8538 4 14.6364 4C10.4189 4 7 7.41892 7 11.6364C7 15.8538 10.4189 19.2727 14.6364 19.2727Z"
                  fill="#EB001B"
                  // style="fill:#EB001B;fill:color(display-p3 0.9216 0.0000 0.1059);fill-opacity:1;"
                ></path>
                <path
                  d="M23.3637 19.2727C27.5811 19.2727 31 15.8538 31 11.6364C31 7.41892 27.5811 4 23.3637 4C19.1462 4 15.7273 7.41892 15.7273 11.6364C15.7273 15.8538 19.1462 19.2727 23.3637 19.2727Z"
                  fill="#F79E1B"
                  // style="fill:#F79E1B;fill:color(display-p3 0.9686 0.6196 0.1059);fill-opacity:1;"
                ></path>
                <path
                  d="M22.2727 11.6362C22.2727 9.01797 20.9637 6.72706 19 5.41797C17.0364 6.83615 15.7273 9.12706 15.7273 11.6362C15.7273 14.1452 17.0364 16.5452 19 17.8543C20.9637 16.5452 22.2727 14.2543 22.2727 11.6362Z"
                  fill="#FF5F00"
                  // style="fill:#FF5F00;fill:color(display-p3 1.0000 0.3725 0.0000);fill-opacity:1;"
                ></path>
              </svg>
              {/*  */}
              <svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="24"
                role="img"
                aria-labelledby="pi-rupay"
              >
                <title id="pi-rupay">RuPay</title>
                <g fill="none" fill-rule="evenodd">
                  <rect
                    stroke-opacity=".07"
                    stroke="#000"
                    fill="#FFF"
                    x=".5"
                    y=".5"
                    width="37"
                    height="23"
                    rx="3"
                  ></rect>
                  <path fill="#097A44" d="M32 15.77l2-7.41 2 3.82z"></path>
                  <path fill="#F46F20" d="M30.76 15.79l2-7.4 2 3.82z"></path>
                  <path
                    d="M20.67 8.2a2 2 0 0 0-1.56-.56h-3l-1.95 6.81h1.75l.66-2.31h1.23a3.4 3.4 0 0 0 1.9-.5 2.93 2.93 0 0 0 1.12-1.72 1.77 1.77 0 0 0-.15-1.72zm-3.21.94h1.12a.76.76 0 0 1 .55.15c.11.11.07.35 0 .53a1.08 1.08 0 0 1-.4.62 1.21 1.21 0 0 1-.7.2H17l.46-1.5zM9.14 9a1.64 1.64 0 0 0-.2-.61 1.3 1.3 0 0 0-.58-.53 2.75 2.75 0 0 0-1.08-.18H4l-2 6.75h1.73l.72-2.52H5.7c.47 0 .58.1.6.13.02.03.09.15 0 .65l-.16.6a3.35 3.35 0 0 0-.11.59v.55h1.79l.12-.43-.11-.08s-.07-.05-.06-.2c.027-.19.07-.377.13-.56l.1-.42a2.14 2.14 0 0 0 .1-1.11.88.88 0 0 0-.26-.41 2 2 0 0 0 .68-.54 2.79 2.79 0 0 0 .53-1c.07-.22.101-.45.09-.68zm-1.86.83a.84.84 0 0 1-.5.6 1.79 1.79 0 0 1-.64.09H4.86l.38-1.33h1.43a1.1 1.1 0 0 1 .53.09c.05 0 .21.07.08.5v.05zm4.9 2.17a2.11 2.11 0 0 1-.3.67 1 1 0 0 1-.87.43c-.34 0-.36-.14-.38-.2a1.24 1.24 0 0 1 .07-.52l.89-3.11H9.9l-.86 3a3 3 0 0 0-.15 1.32c.08.42.4.91 1.41.91.247.004.493-.03.73-.1a2.51 2.51 0 0 0 .6-.29l-.08.3h1.62l1.47-5.13H13L12.18 12zm12.93 1.1l.63-2.18c.24-.83-.07-1.21-.37-1.39A2.75 2.75 0 0 0 24 9.2a2.87 2.87 0 0 0-2 .68 2.75 2.75 0 0 0-.69 1.1l-.09.26h1.61v-.11a1.15 1.15 0 0 1 .25-.37.84.84 0 0 1 .56-.17.89.89 0 0 1 .46.08v.18c0 .06 0 .15-.25.23a2.13 2.13 0 0 1-.48.1l-.44.05a4 4 0 0 0-1.25.32c-.57.271-.99.78-1.15 1.39a1.25 1.25 0 0 0 .17 1.22c.289.307.7.468 1.12.44a2.43 2.43 0 0 0 1.07-.25l.4-.23v.33H25l.13-.48-.13-.07a.61.61 0 0 1 0-.22c0-.25.07-.43.11-.58zm-2.92-.1a.62.62 0 0 1 .34-.4 2.17 2.17 0 0 1 .57-.15l.29-.05.3-.07v.07a1.24 1.24 0 0 1-.51.75 1.44 1.44 0 0 1-.72.21.34.34 0 0 1-.25-.08.55.55 0 0 1-.02-.28zm7.91-3.68l-1.69 3v-3h-1.8l.39 5.13-.12.19a.8.8 0 0 1-.23.25.64.64 0 0 1-.24.08h-.68l-.39 1.37h.83a2 2 0 0 0 1.29-.34 9.55 9.55 0 0 0 1.27-1.71l3.17-5-1.8.03z"
                    fill="#302F82"
                  ></path>
                </g>
              </svg>
              {/*  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                fill="none"
                aria-labelledby="pi-visa"
              >
                <title id="pi-visa">Visa</title>
                <rect
                  x=".5"
                  y=".5"
                  width="37"
                  height="23"
                  rx="2.5"
                  stroke="#000"
                  stroke-opacity=".07"
                  fill="none"
                ></rect>
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z"
                  fill="#142FBD"
                  // style="fill:#142FBD;fill:color(display-p3 0.0784 0.1843 0.7412);fill-opacity:1;"
                ></path>
                <path
                  d="M35 1C36.1 1 37 1.9 37 3V21C37 22.1 36.1 23 35 23H3C1.9 23 1 22.1 1 21V3C1 1.9 1.9 1 3 1H35Z"
                  fill="#1532CB"
                  // style="fill:#1532CB;fill:color(display-p3 0.0824 0.1961 0.7961);fill-opacity:1;"
                ></path>
                <path
                  d="M29.5944 10.2167H29.2778C28.8556 11.2722 28.5389 11.8 28.2222 13.3833H30.2278C29.9111 11.8 29.9111 11.0611 29.5944 10.2167V10.2167ZM32.6556 16.4444H30.8611C30.7556 16.4444 30.7556 16.4444 30.65 16.3389L30.4389 15.3889L30.3333 15.1778H27.8C27.6944 15.1778 27.5889 15.1778 27.5889 15.3889L27.2722 16.3389C27.2722 16.4444 27.1667 16.4444 27.1667 16.4444H24.95L25.1611 15.9167L28.2222 8.73889C28.2222 8.21111 28.5389 8 29.0667 8H30.65C30.7556 8 30.8611 8 30.8611 8.21111L32.3389 15.0722C32.4444 15.4944 32.55 15.8111 32.55 16.2333C32.6556 16.3389 32.6556 16.3389 32.6556 16.4444V16.4444ZM18.5111 16.1278L18.9333 14.2278C19.0389 14.2278 19.1444 14.3333 19.1444 14.3333C19.8833 14.65 20.6222 14.8611 21.3611 14.7556C21.5722 14.7556 21.8889 14.65 22.1 14.5444C22.6278 14.3333 22.6278 13.8056 22.2056 13.3833C21.9944 13.1722 21.6778 13.0667 21.3611 12.8556C20.9389 12.6444 20.5167 12.4333 20.2 12.1167C18.9333 11.0611 19.3556 9.58333 20.0944 8.84444C20.7278 8.42222 21.0444 8 21.8889 8C23.1556 8 24.5278 8 25.1611 8.21111H25.2667C25.1611 8.84444 25.0556 9.37222 24.8444 10.0056C24.3167 9.79444 23.7889 9.58333 23.2611 9.58333C22.9444 9.58333 22.6278 9.58333 22.3111 9.68889C22.1 9.68889 21.9944 9.79444 21.8889 9.9C21.6778 10.1111 21.6778 10.4278 21.8889 10.6389L22.4167 11.0611C22.8389 11.2722 23.2611 11.4833 23.5778 11.6944C24.1056 12.0111 24.6333 12.5389 24.7389 13.1722C24.95 14.1222 24.6333 14.9667 23.7889 15.6C23.2611 16.0222 23.05 16.2333 22.3111 16.2333C20.8333 16.2333 19.6722 16.3389 18.7222 16.0222C18.6167 16.2333 18.6167 16.2333 18.5111 16.1278V16.1278ZM14.8167 16.4444C14.9222 15.7056 14.9222 15.7056 15.0278 15.3889C15.5556 13.0667 16.0833 10.6389 16.5056 8.31667C16.6111 8.10556 16.6111 8 16.8222 8H18.7222C18.5111 9.26667 18.3 10.2167 17.9833 11.3778C17.6667 12.9611 17.35 14.5444 16.9278 16.1278C16.9278 16.3389 16.8222 16.3389 16.6111 16.3389L14.8167 16.4444ZM5 8.21111C5 8.10556 5.21111 8 5.31667 8H8.90556C9.43333 8 9.85556 8.31667 9.96111 8.84444L10.9111 13.4889C10.9111 13.5944 10.9111 13.5944 11.0167 13.7C11.0167 13.5944 11.1222 13.5944 11.1222 13.5944L13.3389 8.21111C13.2333 8.10556 13.3389 8 13.4444 8H15.6611C15.6611 8.10556 15.6611 8.10556 15.5556 8.21111L12.2833 15.9167C12.1778 16.1278 12.1778 16.2333 12.0722 16.3389C11.9667 16.4444 11.7556 16.3389 11.5444 16.3389H9.96111C9.85556 16.3389 9.75 16.3389 9.75 16.1278L8.06111 9.58333C7.85 9.37222 7.53333 9.05556 7.11111 8.95C6.47778 8.63333 5.31667 8.42222 5.10556 8.42222L5 8.21111Z"
                  fill="white"
                  // style="fill:white;fill-opacity:1;"
                ></path>
              </svg>
            </div>
          </div>

          {/*  */}
          <div className="mt-32p ">
            <svg
              width="325"
              height="102"
              viewBox="0 0 325 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto "
            >
              <g opacity="0.25" clip-path="url(#clip0_3955_18919)">
                <path
                  d="M306.278 42.8279C317.602 47.2166 325 57.9614 325 70.6736C325 89.1365 309.6 102 288.159 102C266.568 102 251.017 89.1365 251.017 70.8249C251.017 57.9614 258.415 47.2166 269.89 42.8279C263.851 39.0445 259.925 32.8398 259.925 24.5163C259.925 10.5935 271.249 0 288.159 0C304.919 0 316.394 10.5935 316.394 24.5163C316.394 32.8398 312.317 39.0445 306.278 42.8279ZM288.159 12.2582C280.006 12.2582 273.665 18.3116 273.665 25.727C273.665 32.9911 280.006 38.5905 288.159 38.5905C296.313 38.5905 302.503 33.1424 302.503 25.727C302.503 18.3116 296.313 12.2582 288.159 12.2582ZM288.159 89.5905C301.748 89.5905 311.109 80.8131 311.109 69.7656C311.109 57.9614 300.54 49.638 288.159 49.638C275.477 49.638 264.907 58.1128 264.907 69.6143C264.907 80.8131 275.024 89.5905 288.159 89.5905Z"
                  fill="url(#paint0_linear_3955_18919)"
                ></path>
                <path
                  d="M239.955 64.6202C239.955 66.5875 239.804 68.5549 239.653 70.5222H182.278C184.241 83.0831 193.3 89.5905 205.379 89.5905C213.986 89.5905 221.837 85.6558 225.914 78.543L237.238 83.0831C231.198 95.3412 218.515 102 204.926 102C184.845 102 168.689 87.0178 168.689 64.6202C168.689 42.2225 184.845 27.6943 204.926 27.6943C225.008 27.6943 239.955 42.2225 239.955 64.6202ZM182.429 59.1721H226.82C225.159 47.0653 216.552 40.1038 204.926 40.1038C192.998 40.1038 184.543 46.4599 182.429 59.1721Z"
                  fill="url(#paint1_linear_3955_18919)"
                ></path>
                <path
                  d="M126.045 27.6943C143.559 27.6943 154.581 39.4985 154.43 59.3234V101.853H141.294V60.0801C141.294 48.2759 134.047 40.7092 124.233 40.7092C114.419 40.7092 102.642 46.6113 102.642 61.8961V101.853H89.5059V29.5104H102.642V40.2552C106.869 31.6291 118.344 27.6943 126.045 27.6943Z"
                  fill="url(#paint2_linear_3955_18919)"
                ></path>
                <path
                  d="M36.8409 102C16.7596 102 0 87.1691 0 64.7715C0 42.3739 16.7596 27.6943 36.8409 27.6943C56.9222 27.6943 73.8327 42.3739 73.8327 64.7715C73.8327 87.1691 56.9222 102 36.8409 102ZM36.8409 89.5905C49.8258 89.5905 60.6968 79.451 60.6968 64.7715C60.6968 50.2433 49.8258 40.1038 36.8409 40.1038C24.007 40.1038 13.2869 50.2433 13.2869 64.7715C13.2869 79.451 24.007 89.5905 36.8409 89.5905Z"
                  fill="url(#paint3_linear_3955_18919)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3955_18919"
                  x1="252.866"
                  y1="2.125"
                  x2="345.09"
                  y2="76.2821"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3A3A3A"></stop>
                  <stop offset="0.18" stop-color="#A4A4A4"></stop>
                  <stop offset="0.315" stop-color="#606060"></stop>
                  <stop offset="0.491919" stop-color="#CECECE"></stop>
                  <stop offset="0.615" stop-color="#8F8F8F"></stop>
                  <stop offset="0.785" stop-color="#464646"></stop>
                  <stop offset="0.955" stop-color="#696969"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3955_18919"
                  x1="170.471"
                  y1="29.2424"
                  x2="239.129"
                  y2="102.243"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3A3A3A"></stop>
                  <stop offset="0.18" stop-color="#A4A4A4"></stop>
                  <stop offset="0.315" stop-color="#606060"></stop>
                  <stop offset="0.491919" stop-color="#CECECE"></stop>
                  <stop offset="0.615" stop-color="#8F8F8F"></stop>
                  <stop offset="0.785" stop-color="#464646"></stop>
                  <stop offset="0.955" stop-color="#696969"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3955_18919"
                  x1="91.129"
                  y1="29.2393"
                  x2="159.75"
                  y2="95.8408"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3A3A3A"></stop>
                  <stop offset="0.18" stop-color="#A4A4A4"></stop>
                  <stop offset="0.315" stop-color="#606060"></stop>
                  <stop offset="0.491919" stop-color="#CECECE"></stop>
                  <stop offset="0.615" stop-color="#8F8F8F"></stop>
                  <stop offset="0.785" stop-color="#464646"></stop>
                  <stop offset="0.955" stop-color="#696969"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_3955_18919"
                  x1="1.84582"
                  y1="29.2424"
                  x2="70.3124"
                  y2="104.661"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3A3A3A"></stop>
                  <stop offset="0.18" stop-color="#A4A4A4"></stop>
                  <stop offset="0.315" stop-color="#606060"></stop>
                  <stop offset="0.491919" stop-color="#CECECE"></stop>
                  <stop offset="0.615" stop-color="#8F8F8F"></stop>
                  <stop offset="0.785" stop-color="#464646"></stop>
                  <stop offset="0.955" stop-color="#696969"></stop>
                </linearGradient>
                <clipPath id="clip0_3955_18919">
                  <rect width="325" height="102" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
