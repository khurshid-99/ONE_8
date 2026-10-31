import { useRef, type Dispatch, type SetStateAction } from "react";
import BagCard from "./BagCard";
import SuggestionCard from "./SuggestionCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ActiveBagData {
  isBagActive: boolean;
  setIsBagActive: Dispatch<SetStateAction<boolean>>;
}

const Bag = ({ isBagActive, setIsBagActive }: ActiveBagData) => {
  const asideRef = useRef<HTMLElement | null>(null);

  const closeBag = () => {
    if (!asideRef.current) return;

    gsap.to(asideRef.current, {
      x: "100%",
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setIsBagActive(false);
      },
    });
  };
  useGSAP(
    () => {
      if (!asideRef.current || !isBagActive) return;

      gsap.fromTo(
        asideRef.current,
        { x: "100%" },
        {
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    },
    { dependencies: [isBagActive] },
  );

  if (!isBagActive) return null;

  return (
    <div className="fixed inset-0 z-9999 flex justify-end bg-[#0000007e]">
      <aside
        ref={asideRef}
        className="flex h-screen w-101.25 flex-col overflow-hidden bg-[#fbfdfb]  "
      >
        <div className="flex items-center justify-between shrink-0 px-16p pt-16p ">
          <h1 className="text-36 text-dark-gray font-OB ">
            Your bag{" "}
            <span className="text-16 text-gray-dark font-OR "> 1 Item</span>
          </h1>
          <button onClick={closeBag} className="w-30p aspect-square ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="size-30p "
            >
              <path
                d="M8 1C11.8656 1 15 4.13438 15 8C15 11.8656 11.8656 15 8 15C4.13438 15 1 11.8656 1 8C1 4.13438 4.13438 1 8 1ZM8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16ZM11.1062 5.6L10.4 4.89375L10.0469 5.24687L8 7.29375L5.95312 5.24687L5.6 4.89375L4.89375 5.6L5.24687 5.95312L7.29375 8L5.24687 10.0469L4.89375 10.4L5.6 11.1062L5.95312 10.7531L8 8.70625L10.0469 10.7531L10.4 11.1062L11.1062 10.4L8.70625 8L10.7531 5.95312L11.1062 5.6Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>

        <div
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="min-h-0 flex-1 overflow-y-scroll overscroll-contain"
        >
          <div className="px-16p ">
            <BagCard />
            <BagCard />
            <BagCard />
            <BagCard />
          </div>
          {/* Also bought with */}

          <div className="pt-20p px-16p ">
            <h3 className="text-20 text-dark-gray font-OB pb-20p ">
              Also bought with
            </h3>
            <div className="flex gap-2 ">
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
            </div>
          </div>
          {/* Redeem your discount */}
          <div className="px-16p flex flex-col gap-10p pt-10p ">
            <h4 className="text-16 text-dark-gray font-OM ">
              Redeem your discount
            </h4>
            <div className="flex items-center justify-between rounded-8 border border-[#CCCCCC] px-16p py-11p ">
              <input
                type="text"
                name="promotional-code"
                autoComplete="promotional-code"
                placeholder="Enter promotional code"
                className="w-full text-14 text-dark outline-none border-none placeholder:text-dark "
              />
              <button className="text-14 text-dark-gray font-OB border-b-2 ">
                APPLY
              </button>
            </div>
            <div className="flex items-center justify-between ">
              <h4 className="text-16 text-dark-gray font-OR ">
                MRP
                <span>(1 Item)</span>
              </h4>
              <span className="text-14 text-dark-gray font-OR ">
                ₹ 9,999.00
              </span>
            </div>
            <div className="flex items-center justify-between pt-16p pb-10p border-t ">
              <h4 className="text-20 text-dark-gray font-OB ">
                Total{" "}
                <span className="block text-12 text-gray-dark font-OR ">
                  Inc. of all taxes
                </span>
              </h4>
              <span className="text-18 text-dark-gray font-OB ">
                ₹ 9,999.00
              </span>
            </div>
          </div>
        </div>

        <footer className="px-16p py-24p flex flex-col gap-24p ">
          <button className="w-full p-8p bg-[#0000000F] flex items-center justify-between rounded-8 border border-transparent active:scale-99 active:border-light ">
            <span className="text-12 text-black font-OR ">
              <span className=" font-OB ">₹2,500</span>
              /month | 3/6 months EMI on UPI
            </span>
            <span className="w-23.25 flex flex-col justify-center items-center bg-cyan rounded-50 p-6p  ">
              <span className="block text-12 text-[#101011] font-OB ">
                Buy On EMI
              </span>
              <span className="text-8 font-OB text-nowrap">
                with
                <svg
                  viewBox="0 0 262 56"
                  className="inline-block w-30p h-auto "
                  role="img"
                  aria-label="Snapmint"
                >
                  <path
                    fill="#000000"
                    d="m27 15-3 7q-6-4-10-4-3 0-3 3c0 4 17 2 16 13q0 10-13 10-8 0-14-5l3-6q6 4 12 4l3-2c0-5-16-3-16-14q1-10 13-10 7 1 12 4m36 9v20H53V27q-1-6-6-6-6 0-6 6v17H31V12h10v5q3-5 10-5 11 0 12 12m22 9v-3h-6q-5 0-5 3 0 4 5 4t6-4m10-10v20H85v-3q-3 4-9 4-11 0-11-10 0-9 12-10h8q0-5-6-5l-9 3-3-7q7-4 15-4 12 1 13 12m29 5q0-8-7-8-6 0-7 8 1 8 7 8 7 0 7-8m10 0q0 16-14 16-7 0-10-4v15h-10V12h10v4q4-3 10-4 13 1 14 16m55-3v19h-4V26q0-9-9-9-9 1-10 11v16h-4V26q0-9-9-9-10 1-10 11v16h-4V13h4v7q3-7 12-7t11 8q3-8 12-8 11 0 11 12m8-13h5v31h-5zm5-8q0 2-3 3l-3-3 3-4q3 1 3 4m36 21v19h-4V26q0-9-9-9-10 0-10 10v17h-5V13h5v7q3-7 12-7 11 0 11 12m24 16q-4 3-7 3-7 0-8-9V17h-4v-3h4V6h5v8h9v3h-9v17q0 6 4 5l5-1z"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
          <button className="w-full bg-cyan rounded-50 text-16 text-dark-gray font-OB px-10p py-13p ">
            Checkout securely
          </button>
          {/*  */}
          <div className="flex items-center justify-center gap-8p  ">
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
        </footer>
      </aside>
    </div>
  );
};

export default Bag;
