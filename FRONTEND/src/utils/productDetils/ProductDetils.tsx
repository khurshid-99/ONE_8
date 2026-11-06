import { Link } from "react-router";
import { PDShoe1, PDShoe2, PDShoe3, PDShoe4, PDShoe5 } from "../../images";
import { useState } from "react";

const sizes = [
  { value: "UK 6", optionId: "48169599893664", variantId: "57738053583008" },
  { value: "UK 7", optionId: "48169599926432", variantId: "57738053615776" },
  { value: "UK 8", optionId: "48169599959200", variantId: "57738053648544" },
  { value: "UK 9", optionId: "48169599991968", variantId: "57738053681312" },
  { value: "UK 10", optionId: "48169600024736", variantId: "57738053714080" },
  { value: "UK 11", optionId: "48169600057504", variantId: "57738053746848" },
  { value: "UK 12", optionId: "48169600090272", variantId: "57738053779616" },
];

const ProductDetils = () => {
  const [selectedSize, setSelectedSize] = useState("UK 7");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <main>
      <div className="w-full h-90p overflow-x-hidden " />
      <section className="w-full grid grid-cols-3 gap-x-10p relative ">
        <div className="col-span-2 grid grid-cols-2 grid-flow-row items-start gap-10p ">
          {/* Card 1 */}
          <div className="col-span-1 aspect-625/780">
            <img
              src={PDShoe1}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card 2 */}
          <div className="col-span-1 aspect-625/780">
            <img
              src={PDShoe2}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card 3 */}
          <div className="col-span-2 aspect-1260/800">
            <img
              src={PDShoe3}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card 4 */}
          <div className="col-span-1 aspect-625/780">
            <img
              src={PDShoe4}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card 5 */}
          <div className="col-span-1 aspect-625/780">
            <img
              src={PDShoe5}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Card 6 */}
          <div className="col-span-2 aspect-1260/800">
            <img
              src={PDShoe3}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <aside className="sticky top-0 right-0 w-full aspect-630/720 col-span-1 bg-white pr-25p ">
          {/*  */}
          <nav className="flex items-center gap-16p pb-22p ">
            <Link to={"/"} className="text-dark text-14 font-OM ">
              Home{" "}
            </Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="6"
                viewBox="0 0 7 6"
                fill="none"
              >
                <path
                  d="M3.64026 0.2625C3.55276 0.10125 3.38401 0 3.20026 0C3.01651 0 2.84776 0.10125 2.76026 0.2625L0.0602583 5.2625C-0.0234917 5.4175 -0.0197418 5.605 0.0702582 5.75625C0.160258 5.9075 0.324008 6 0.500258 6L5.90026 6C6.07651 6 6.23901 5.9075 6.33026 5.75625C6.42151 5.605 6.42401 5.4175 6.34026 5.2625L3.64026 0.2625Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="text-14 text-gray font-OR ">
              Seam XVIII Signature - White
            </span>
          </nav>
          {/*  */}
          <div className="w-fit bg-gray-light rounded-50 py-4p px-8p lg:px-14p lg:py-6p flex items-center gap-8p flex-nowrap select-none leading-[20px]  ">
            <div className="relative flex items-center justify-center ">
              <span className="w-6p lg:w-8p aspect-square inline-block bg-black rounded-full "></span>
              <span className="absolute animate-ping opacity-75 w-6p lg:w-8p aspect-square inline-block bg-black rounded-full "></span>
            </div>
            <span className="text-10 lg:text-12 text-black font-RM7 uppercase ">
              Live Now
            </span>
          </div>
          {/*  */}
          <div className="py-16p ">
            <p className="text-12 text-dark font-OB uppercase ">
              <strong>Men's Lifestyle</strong>
            </p>
            <h1 className="text-36 text-dark font-OB ">Seam XVIII Signature</h1>
            <p className="text-16 text-dark font-OR pt-16p ">
              First-ever cricket-inspired lifestyle sneaker. Co-created with
              Virat Kohli, with a surprise from him inside the box.
            </p>
          </div>
          {/*  */}
          <p className="text-24 text-dark font-OB  ">₹ 8,999.00</p>
          <p className="text-12 text-gray font-OR pb-16p">
            Inclusive of all taxes
          </p>
          {/*  */}
          <button className="w-full flex items-center justify-between p-8p bg-[#0000000f] rounded-8 text-12 text-black ">
            <span className="flex items-center ">
              <span className="text-black font-OB inline-block ">₹2,250 </span>{" "}
              <span className="text-black font-OR inline-block ">
                /month | 3/6 months EMI on UPI by
              </span>
              <span className="inline-block ">
                <svg
                  viewBox="0 0 262 56"
                  className="w-62p "
                  role="img"
                  aria-label="Snapmint"
                >
                  <path
                    fill="currentColor"
                    d="m27 15-3 7q-6-4-10-4-3 0-3 3c0 4 17 2 16 13q0 10-13 10-8 0-14-5l3-6q6 4 12 4l3-2c0-5-16-3-16-14q1-10 13-10 7 1 12 4m36 9v20H53V27q-1-6-6-6-6 0-6 6v17H31V12h10v5q3-5 10-5 11 0 12 12m22 9v-3h-6q-5 0-5 3 0 4 5 4t6-4m10-10v20H85v-3q-3 4-9 4-11 0-11-10 0-9 12-10h8q0-5-6-5l-9 3-3-7q7-4 15-4 12 1 13 12m29 5q0-8-7-8-6 0-7 8 1 8 7 8 7 0 7-8m10 0q0 16-14 16-7 0-10-4v15h-10V12h10v4q4-3 10-4 13 1 14 16m55-3v19h-4V26q0-9-9-9-9 1-10 11v16h-4V26q0-9-9-9-10 1-10 11v16h-4V13h4v7q3-7 12-7t11 8q3-8 12-8 11 0 11 12m8-13h5v31h-5zm5-8q0 2-3 3l-3-3 3-4q3 1 3 4m36 21v19h-4V26q0-9-9-9-10 0-10 10v17h-5V13h5v7q3-7 12-7 11 0 11 12m24 16q-4 3-7 3-7 0-8-9V17h-4v-3h4V6h5v8h9v3h-9v17q0 6 4 5l5-1z"
                  ></path>
                </svg>
              </span>
            </span>
            <span className="inline-block font-OB py-6p px-13p bg-cyan rounded-50 ">
              Buy On EMI
            </span>
          </button>
          {/*  */}
          <div className="pt-24p ">
            <fieldset className="pb-16p ">
              <legend className="flex items-center gap-4p text-14 text-dark font-OR pb-16p ">
                <span>Colour:</span>
                <span>Classic White - Green Dew</span>
              </legend>
              {/*  */}
              <div className="flex items-center gap-8p  ">
                <button
                  className="
                    relative
                    w-48p aspect-48/18
                   bg-[#FAFBFA]
                    border border-[#cccccc]
                    after:content-['']
                    after:absolute
                    after:w-full
                    after:h-px
                    after:bg-black
                    after:top-5
                    after:left-1/2
                    after:-translate-x-1/2
                    "
                ></button>
                <button
                  className="
                    relative
                    w-48p aspect-48/18
                   bg-[#8B1D1D]
                    border border-[#cccccc]
                    after:content-['']
                    after:absolute
                    after:w-full
                    after:h-px
                    after:bg-black
                    after:top-5
                    after:left-1/2
                    after:-translate-x-1/2
                    "
                ></button>
              </div>
            </fieldset>
            {/*  */}
            <fieldset>
              <legend className="w-full flex items-center justify-between pb-16p ">
                <span className="text-14 text-deep-red font-OR text-nowrap ">
                  Please Select Size
                </span>
                <span className="w-full text-14 text-dark text-end font-OR cursor-pointer ">
                  <u>Our size guides</u>
                </span>
              </legend>
              {/*  */}

              <div className="flex flex-wrap gap-13p">
                {sizes.map((size) => (
                  <label
                    key={size.value}
                    className="
                        relative flex
                        w-48p aspect-48/28
                        items-center justify-center
                        bg-light text-black
                        text-14 leading-22p
                        cursor-pointer
                        hover:border border-black
                        has-checked:bg-black
                        has-checked:text-white
                        has-checked:border-black
                        "
                  >
                    <input
                      type="radio"
                      className="peer absolute inset-0 w-full h-full appearance-none m-0 cursor-pointer "
                      name="Size"
                      value={size.value}
                      data-input=""
                      data-option-value-id={size.optionId}
                      data-option-variant-id={size.variantId}
                      checked={selectedSize === size.value}
                      onChange={() => setSelectedSize(size.value)}
                    />

                    {size.value}
                  </label>
                ))}
              </div>
            </fieldset>
            {/*  */}
            <div className="flex items-center gap-6p pt-16p ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-24p aspect-square text-[#398A16] "
              >
                <path
                  d="M7 13L10 16L17 9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle>
              </svg>
              <span className="text-14 text-dark-gray font-OR ">In stock</span>
            </div>
            {/*  */}
            <div className="pt-16p pb-24p  ">
              <button className="w-full bg-cyan text-dark font-OM py-13p px-32p rounded-50 ">
                Add to Bag
              </button>
              {/*  */}
              <div className="flex items-center justify-center gap-8p pt-16p ">
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
                    strokeOpacity=".07"
                    fill="none"
                  ></rect>
                  <path
                    d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z"
                    fill="#0071CE"
                  ></path>
                  <path
                    d="M3 0.5H35C36.3348 0.5 37.5 1.58692 37.5 3V21C37.5 22.4239 36.4239 23.5 35 23.5H3C1.66524 23.5 0.5 22.4131 0.5 21V3C0.5 1.57614 1.57614 0.5 3 0.5Z"
                    stroke="black"
                    strokeOpacity="0.07"
                    // style="stroke:black;strokeOpacity:0.07;"
                  ></path>
                  <path
                    d="M25.8662 6.33203V3H31L31.8662 5.5332L32.7334 3H37V14.2002H36.7998L34.8672 16.2656L36.7998 18.3594H37V21.2666H33.5996L31.9336 19.3994L30.2002 21.2666H19.4668V12.666H16L20.2666 3H24.4004L25.8662 6.33203ZM20.5996 20.2656H27V18.5322H22.666V17.3994H26.8662V15.666H22.666V14.5322H27V12.7988H20.5996V20.2656ZM30.5332 16.5322L27 20.2656H29.5996L31.8662 17.8662L34.0664 20.2656H36.7324L33.1992 16.4658L36.7324 12.7988H34.1328L31.8662 15.1992L29.7324 12.7988H27L30.5332 16.5322ZM17.666 11.7324H19.9326L20.5332 10.1992H23.999L24.666 11.7324H26.999L23.666 4.19922H20.999L17.666 11.7324ZM33.5996 4.19922L31.9326 8.86621L30.1992 4.19922H27V11.666H29.0664V6.39941L31 11.666H32.7998L34.7324 6.39941V11.666H36.7324V4.13281L33.5996 4.19922ZM23.2656 8.46582H21.2656L22.2656 5.99902L23.2656 8.46582Z"
                    fill="white"
                    // style="fill:white;fillOpacity:1;"
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
                    strokeOpacity=".07"
                    fill="none"
                  ></rect>
                  <path
                    d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z"
                    fill="#1C1C1C"
                  ></path>
                  <path
                    d="M35 1C36.1 1 37 1.9 37 3V21C37 22.1 36.1 23 35 23H3C1.9 23 1 22.1 1 21V3C1 1.9 1.9 1 3 1H35Z"
                    fill="#232323"
                  ></path>
                  <path
                    d="M14.6364 19.2727C18.8538 19.2727 22.2727 15.8538 22.2727 11.6364C22.2727 7.41892 18.8538 4 14.6364 4C10.4189 4 7 7.41892 7 11.6364C7 15.8538 10.4189 19.2727 14.6364 19.2727Z"
                    fill="#EB001B"
                  ></path>
                  <path
                    d="M23.3637 19.2727C27.5811 19.2727 31 15.8538 31 11.6364C31 7.41892 27.5811 4 23.3637 4C19.1462 4 15.7273 7.41892 15.7273 11.6364C15.7273 15.8538 19.1462 19.2727 23.3637 19.2727Z"
                    fill="#F79E1B"
                  ></path>
                  <path
                    d="M22.2727 11.6362C22.2727 9.01797 20.9637 6.72706 19 5.41797C17.0364 6.83615 15.7273 9.12706 15.7273 11.6362C15.7273 14.1452 17.0364 16.5452 19 17.8543C20.9637 16.5452 22.2727 14.2543 22.2727 11.6362Z"
                    fill="#FF5F00"
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
                  <g fill="none" fillRule="evenodd">
                    <rect
                      strokeOpacity=".07"
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
                    strokeOpacity=".07"
                    fill="none"
                  ></rect>
                  <path
                    d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.4 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.6 0 35 0Z"
                    fill="#142FBD"
                  ></path>
                  <path
                    d="M35 1C36.1 1 37 1.9 37 3V21C37 22.1 36.1 23 35 23H3C1.9 23 1 22.1 1 21V3C1 1.9 1.9 1 3 1H35Z"
                    fill="#1532CB"
                  ></path>
                  <path
                    d="M29.5944 10.2167H29.2778C28.8556 11.2722 28.5389 11.8 28.2222 13.3833H30.2278C29.9111 11.8 29.9111 11.0611 29.5944 10.2167V10.2167ZM32.6556 16.4444H30.8611C30.7556 16.4444 30.7556 16.4444 30.65 16.3389L30.4389 15.3889L30.3333 15.1778H27.8C27.6944 15.1778 27.5889 15.1778 27.5889 15.3889L27.2722 16.3389C27.2722 16.4444 27.1667 16.4444 27.1667 16.4444H24.95L25.1611 15.9167L28.2222 8.73889C28.2222 8.21111 28.5389 8 29.0667 8H30.65C30.7556 8 30.8611 8 30.8611 8.21111L32.3389 15.0722C32.4444 15.4944 32.55 15.8111 32.55 16.2333C32.6556 16.3389 32.6556 16.3389 32.6556 16.4444V16.4444ZM18.5111 16.1278L18.9333 14.2278C19.0389 14.2278 19.1444 14.3333 19.1444 14.3333C19.8833 14.65 20.6222 14.8611 21.3611 14.7556C21.5722 14.7556 21.8889 14.65 22.1 14.5444C22.6278 14.3333 22.6278 13.8056 22.2056 13.3833C21.9944 13.1722 21.6778 13.0667 21.3611 12.8556C20.9389 12.6444 20.5167 12.4333 20.2 12.1167C18.9333 11.0611 19.3556 9.58333 20.0944 8.84444C20.7278 8.42222 21.0444 8 21.8889 8C23.1556 8 24.5278 8 25.1611 8.21111H25.2667C25.1611 8.84444 25.0556 9.37222 24.8444 10.0056C24.3167 9.79444 23.7889 9.58333 23.2611 9.58333C22.9444 9.58333 22.6278 9.58333 22.3111 9.68889C22.1 9.68889 21.9944 9.79444 21.8889 9.9C21.6778 10.1111 21.6778 10.4278 21.8889 10.6389L22.4167 11.0611C22.8389 11.2722 23.2611 11.4833 23.5778 11.6944C24.1056 12.0111 24.6333 12.5389 24.7389 13.1722C24.95 14.1222 24.6333 14.9667 23.7889 15.6C23.2611 16.0222 23.05 16.2333 22.3111 16.2333C20.8333 16.2333 19.6722 16.3389 18.7222 16.0222C18.6167 16.2333 18.6167 16.2333 18.5111 16.1278V16.1278ZM14.8167 16.4444C14.9222 15.7056 14.9222 15.7056 15.0278 15.3889C15.5556 13.0667 16.0833 10.6389 16.5056 8.31667C16.6111 8.10556 16.6111 8 16.8222 8H18.7222C18.5111 9.26667 18.3 10.2167 17.9833 11.3778C17.6667 12.9611 17.35 14.5444 16.9278 16.1278C16.9278 16.3389 16.8222 16.3389 16.6111 16.3389L14.8167 16.4444ZM5 8.21111C5 8.10556 5.21111 8 5.31667 8H8.90556C9.43333 8 9.85556 8.31667 9.96111 8.84444L10.9111 13.4889C10.9111 13.5944 10.9111 13.5944 11.0167 13.7C11.0167 13.5944 11.1222 13.5944 11.1222 13.5944L13.3389 8.21111C13.2333 8.10556 13.3389 8 13.4444 8H15.6611C15.6611 8.10556 15.6611 8.10556 15.5556 8.21111L12.2833 15.9167C12.1778 16.1278 12.1778 16.2333 12.0722 16.3389C11.9667 16.4444 11.7556 16.3389 11.5444 16.3389H9.96111C9.85556 16.3389 9.75 16.3389 9.75 16.1278L8.06111 9.58333C7.85 9.37222 7.53333 9.05556 7.11111 8.95C6.47778 8.63333 5.31667 8.42222 5.10556 8.42222L5 8.21111Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </aside>
      </section>
      {/*  */}
      <section className="max-w-1600p mx-auto py-40p ">
        <div>
          <div
            onClick={() => handleAccordion(0)}
            className="flex items-center justify-between py-12p border-t border-gray-muted button_container cursor-pointer"
          >
            <button className="text-24 text-dark font-OB">Description</button>

            <span className="pr-16p">
              <svg
                className={`w-13p aspect-13/6.5 transition-transform duration-300 ${
                  activeAccordion === 0 ? "rotate-180" : ""
                }`}
                viewBox="0 0 13 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12.3535 0.353516L6.35352 6.35352L0.353516 0.353516"
                  stroke="currentColor"
                />
              </svg>
            </span>
          </div>
          {/*  */}
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              activeAccordion === 0 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="mb-16p ">
                Seam XVIII Signature is an ode to the legacy of cricket. It
                draws directly from the game's most iconic element - the cricket
                ball. The season-ball-inspired finish, the stitched seam, and
                the low-profile silhouette - every detail is crafted as a
                deliberate nod to the sport. Finished with Virat's signature,
                this limited edition is built for those who carry the game with
                them.
              </p>

              <p className="mb-16p ">
                Marketed by: <br />
                Agilitas Brands Private Limited, 02B-109, Roshni Tech Hub,
                Marathahalli Main Road, Lakshminarayana Pura, EPIP Zone,
                Chinnapanna Halli, Marathahalli Colony, Bangalore - 560037.
              </p>
              <p className="mb-16p ">Country of origin: India</p>
              <p className="mb-16p ">Net quantity: 1 pair</p>
              <p className="mb-16p ">
                For customer complaints:{" "}
                <Link to={""} className="border-b border-cyan ">
                  click here
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div
            onClick={() => handleAccordion(1)}
            className="flex items-center justify-between py-12p border-t border-gray-muted button_container cursor-pointer"
          >
            <button className="text-24 text-dark font-OB">Fabric & Care</button>

            <span className="pr-16p">
              <svg
                className={`w-13p aspect-13/6.5 transition-transform duration-300 ${
                  activeAccordion === 1 ? "rotate-180" : ""
                }`}
                viewBox="0 0 13 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12.3535 0.353516L6.35352 6.35352L0.353516 0.353516"
                  stroke="currentColor"
                />
              </svg>
            </span>
          </div>
          {/*  */}
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              activeAccordion === 1 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p>
                Keep your one8 footwear looking fresh by wiping it regularly
                with a clean, dry cloth to remove dust and surface dirt. Avoid
                washing, soaking, or machine cleaning, as this can damage the
                material and structure.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div
            onClick={() => handleAccordion(2)}
            className="flex items-center justify-between py-12p border-t border-gray-muted button_container cursor-pointer"
          >
            <button className="text-24 text-dark font-OB">
              Technical Specification
            </button>

            <span className="pr-16p">
              <svg
                className={`w-13p aspect-13/6.5 transition-transform duration-300 ${
                  activeAccordion === 2 ? "rotate-180" : ""
                }`}
                viewBox="0 0 13 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12.3535 0.353516L6.35352 6.35352L0.353516 0.353516"
                  stroke="currentColor"
                />
              </svg>
            </span>
          </div>
          {/*  */}
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              activeAccordion === 2 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-16 text-dark font-OR ">
                Constructed with Intent
              </p>
              <div className="grid grid-cols-3 pb-40p pt-30p gap-x-40p ">
                <div className="flex items-start gap-10p ">
                  <span className="w-150p aspect-square flex items-center justify-center shrink-0 bg-light border border-light-gray text-14 text-dark font-OB  ">
                    Upper
                  </span>
                  <p className="text-12 text-dark-gray font-RM7 leading-24p uppercase ">
                    Season-ball inspired finish mirroring the texture of a
                    match-day cricket ball.
                  </p>
                </div>
                <div className="flex items-start gap-10p ">
                  <span className="w-150p aspect-square flex items-center justify-center shrink-0 bg-light border border-light-gray text-14 text-dark font-OB  ">
                    Craftsmanship
                  </span>
                  <p className="text-12 text-dark-gray font-RM7 leading-24p uppercase ">
                    Stitched seam on the logo and tongue, inspired by the
                    six-row construction of a cricket ball.
                  </p>
                </div>
                <div className="flex items-start gap-10p ">
                  <span className="w-150p aspect-square flex items-center justify-center shrink-0 bg-light border border-light-gray text-14 text-dark font-OB  ">
                    Lining
                  </span>
                  <p className="text-12 text-dark-gray font-RM7 leading-24p uppercase ">
                    Premium soft lining provides a high-end, second-skin feel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div
            onClick={() => handleAccordion(4)}
            className="flex items-center justify-between py-12p border-t border-gray-muted button_container "
          >
            <button className="text-24 text-dark font-OB ">
              Shipping & Returns
            </button>
            <span className="pr-16p ">
              <svg
                className={`w-13p aspect-13/6.5 transition-transform duration-300 ${
                  activeAccordion === 4 ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                focusable="false"
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3535 0.353516L6.35352 6.35352L0.353516 0.353516"
                  stroke="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          {/*  */}
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              activeAccordion === 4 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p>
                14-day free returns in India. Don't love it, we'll collect it
                and refund you. Note that returns & exchanges are not applicable
                on orders outside India. Delivery in 2-4 days (India) / 7-14
                days (international). Learn more.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </section>
    </main>
  );
};

export default ProductDetils;
