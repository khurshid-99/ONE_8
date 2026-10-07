import { Link } from "react-router";
import { Shoe1, Shoe2 } from "../images";
import "./styles/style.scss";

const ProductCard = () => {
  return (
    <div className="product_card relative w-111 aspect-444/719 bg-light flex flex-col justify-between rounded-lg overflow-hidden select-none ">
      <div className="w-full ">
        <img
          src={Shoe1}
          alt=""
          className="product_img_1 w-full aspect-444/555 object-center object-cover "
        />
        <img
          src={Shoe2}
          alt=""
          className="product_img_2 w-full aspect-444/555 object-center object-cover "
        />
      </div>

      {/*  */}
      <div className="absolute top-6 left-6  w-24.5 aspect-98/32 bg-gray-light rounded-50 px-12p py-6p flex items-center justify-between select-none ">
        <div className="relative flex items-center justify-center ">
          <span className="w-8p aspect-square inline-block bg-black rounded-full "></span>
          <span className="absolute animate-ping opacity-75 w-8p aspect-square inline-block bg-black rounded-full "></span>
        </div>
        <span className="text-12 text-black font-RM7 uppercase ">Live Now</span>
      </div>
      {/*  */}
      <button className="absolute top-6 right-6 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M19.6706 5.4736C17.6806 3.8336 14.7206 4.1236 12.8906 5.9536L12.0006 6.8436L11.1106 5.9536C9.29063 4.1336 6.32064 3.8336 4.33064 5.4736C2.05064 7.3536 1.93063 10.7436 3.97063 12.7836L11.6406 20.4536C11.8406 20.6536 12.1506 20.6536 12.3506 20.4536L20.0206 12.7836C22.0706 10.7436 21.9506 7.3636 19.6706 5.4736Z"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>

      {/*  */}
      <div className="text-dark px-24p pb-24p flex flex-col gap-2">
        <p className="text-12 font-OB "> Men's Running/Gym</p>
        <Link to={""} className="text-14 font-OR ">
          Boom Rush
        </Link>
        <p className="text-18 font-OB ">
          <span>₹ 9,999.00</span>
        </p>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2 ">
            <button className="w-24p aspect-square rounded-full bg-[#BBBBBF] "></button>
            <button className="w-24p aspect-square rounded-full bg-[#6a6abb] "></button>
            <button className="w-24p aspect-square rounded-full bg-[#f71515] "></button>
            <button className="w-24p aspect-square rounded-full bg-[#8f96ff] "></button>
            <button className="w-24p aspect-square rounded-full bg-[#000000] "></button>
          </div>
          <button className="add_to_bag_btn">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.71429 3.375V4.5H10.2857V3.375C10.2857 2.13398 9.26071 1.125 8 1.125C6.73929 1.125 5.71429 2.13398 5.71429 3.375ZM4.57143 4.5V3.375C4.57143 1.51172 6.10714 0 8 0C9.89286 0 11.4286 1.51172 11.4286 3.375V4.5H14.2857C15.2321 4.5 16 5.25586 16 6.1875V14.625C16 16.4883 14.4643 18 12.5714 18H3.42857C1.53571 18 0 16.4883 0 14.625V6.1875C0 5.25586 0.767857 4.5 1.71429 4.5H4.57143ZM5.14286 5.625H1.71429C1.4 5.625 1.14286 5.87813 1.14286 6.1875V14.625C1.14286 15.866 2.16786 16.875 3.42857 16.875H12.5714C13.8321 16.875 14.8571 15.866 14.8571 14.625V6.1875C14.8571 5.87813 14.6 5.625 14.2857 5.625H10.8571H5.14286ZM4.57143 11.25C4.57143 10.9406 4.82857 10.6875 5.14286 10.6875H7.42857V8.4375C7.42857 8.12813 7.68571 7.875 8 7.875C8.31429 7.875 8.57143 8.12813 8.57143 8.4375V10.6875H10.8571C11.1714 10.6875 11.4286 10.9406 11.4286 11.25C11.4286 11.5594 11.1714 11.8125 10.8571 11.8125H8.57143V14.0625C8.57143 14.3719 8.31429 14.625 8 14.625C7.68571 14.625 7.42857 14.3719 7.42857 14.0625V11.8125H5.14286C4.82857 11.8125 4.57143 11.5594 4.57143 11.25Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="abb_to_bag_text">Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
