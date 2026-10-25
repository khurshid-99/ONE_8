import { Link } from "react-router";
import { Shoe1 } from "../../../images";
import { useRef, useState } from "react";

const BagCard = () => {
  const [productCount, setProductCount] = useState<number>(1);

  return (
    <div className="w-360p aspect-360/260 py-32p flex gap-16p bg-white border-b border-gray-muted ">
      <div className="w-37 aspect-square ">
        <img
          src={Shoe1}
          alt=""
          className="w-full aspect-square  object-center object-cover "
        />
      </div>
      {/* Text Fild */}
      <div className="flex flex-1 flex-wrap gap-12p ">
        <div className="flex-2 ">
          <Link to={""} className="text-20 text-dark-gray font-OB ">
            Boom Rush
          </Link>
          <span className="block text-16 text-gray-dark font-OR text-wrap leading-7 ">
            Colour Classic Grey - Sonic Blue
          </span>
          <span className="block text-16 text-gray-dark font-OR leading-7">
            Size UK 7
          </span>
        </div>
        <div className="flex-1 ">
          <span className="block text-16 text-dark-gray font-OB text-nowrap ">
            ₹ 9,999.00
          </span>
        </div>
        <div className=" flex flex-nowrap items-center gap-3 ">
          <div className="flex items-center justify-center gap-1 ">
            <button
              onClick={() =>
                productCount > 1 && setProductCount(productCount - 1)
              }
              className="bg-light w-32p aspect-square py-px px-11p "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 11"
                fill="#000000"
              >
                <line y1="5.5" x2="11" y2="5.5" stroke="#000000"></line>
              </svg>
            </button>
            <input
              type="number"
              name="product-count"
              value={productCount}
              onChange={(e) => setProductCount(Number(e.target.value))}
              className="w-32p aspect-square bg-light py-px px-6p [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              onClick={() => setProductCount(productCount + 1)}
              className="bg-light w-32p aspect-square py-px px-11p  "
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="6"
                  x2="11.5"
                  y2="6"
                  stroke="currentColor"
                ></line>
                <line
                  x1="6"
                  y1="0.5"
                  x2="6"
                  y2="11.5"
                  stroke="currentColor"
                ></line>
              </svg>
            </button>
          </div>
          <button className="flex items-center justify-center gap-1.25 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 1C11.8656 1 15 4.13438 15 8C15 11.8656 11.8656 15 8 15C4.13438 15 1 11.8656 1 8C1 4.13438 4.13438 1 8 1ZM8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16ZM11.1062 5.6L10.4 4.89375L10.0469 5.24687L8 7.29375L5.95312 5.24687L5.6 4.89375L4.89375 5.6L5.24687 5.95312L7.29375 8L5.24687 10.0469L4.89375 10.4L5.6 11.1062L5.95312 10.7531L8 8.70625L10.0469 10.7531L10.4 11.1062L11.1062 10.4L8.70625 8L10.7531 5.95312L11.1062 5.6Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-16 text-dark-gray font-OM ">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
