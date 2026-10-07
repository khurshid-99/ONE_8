interface IVirat {
  img: string;
  name: string;
}

const EveryDayCard = ({ img, name }: IVirat) => {
  return (
    <div className="virat_card relative w-96.5 aspect-386/463 rounded-lg overflow-hidden ">
      <img
        src={img}
        alt=""
        className="w-full aspect-386/463 object-cover object-center "
      />
      {/*  */}
      <button className="absolute top-2 right-1 ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6706 5.4736C17.6806 3.8336 14.7206 4.1236 12.8906 5.9536L12.0006 6.8436L11.1106 5.9536C9.29063 4.1336 6.32064 3.8336 4.33064 5.4736C2.05064 7.3536 1.93063 10.7436 3.97063 12.7836L11.6406 20.4536C11.8406 20.6536 12.1506 20.6536 12.3506 20.4536L20.0206 12.7836C22.0706 10.7436 21.9506 7.3636 19.6706 5.4736Z"
            stroke="#000000"
            stroke-width="1.7px"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      {/*  */}

      <div className="absolute top-0 left-0 w-full h-full z-99  flex flex-col items-center justify-between p-32p ">
        <h5 className="text-20 text-white font-OB">{name}</h5>
        <button className="virat_card_btn relative z-100 bg-white px-32p py-11p rounded-50 text-16 text-black font-OM opacity-0 active:scale-99 ">
          Shop Now
        </button>
        <div
          className="virat_card_logo_8 absolute z-88 top-full
               "
        >
          <svg
            width="88"
            height="410"
            viewBox="0 0 88 410"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M-1.90216e-06 129.889C-2.66446e-06 112.449 10.2597 97.4083 25.0713 90.4658C18.8462 85.2149 14.8906 77.3585 14.8906 68.5771C14.8909 52.7684 27.7069 39.9531 43.5156 39.9531C59.3242 39.9534 72.1394 52.7686 72.1396 68.5771C72.1396 77.3581 68.1844 85.2139 61.96 90.4648C76.773 97.4068 87.0342 112.448 87.0342 129.889C87.0338 153.922 67.5502 173.405 43.5166 173.405C19.4832 173.405 0.000338722 153.922 -1.90216e-06 129.889ZM12.1875 128.728C12.1877 146.138 26.0423 160.253 43.1328 160.253C60.2234 160.253 74.0779 146.138 74.0781 128.728C74.0781 111.316 60.2235 97.2012 43.1328 97.2012C26.0422 97.2013 12.1875 111.316 12.1875 128.728ZM24.1719 67.8037C24.1719 76.9206 30.4801 84.5637 38.9697 86.6074C40.4642 86.4522 41.981 86.3711 43.5166 86.3711C45.0498 86.3711 46.5643 86.4517 48.0566 86.6064C56.5457 84.5623 62.8535 76.9202 62.8535 67.8037C62.8535 57.122 54.1944 48.4629 43.5127 48.4629C32.831 48.4629 24.1719 57.122 24.1719 67.8037Z"
                fill="url(#paint0_linear_997_13451)"
              ></path>
              <path
                d="M35.25 654.504L40.9294 6.07869e-05L47.1964 6.0513e-05L52.8758 654.504L35.25 654.504Z"
                fill="url(#paint1_linear_997_13451)"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_997_13451"
                x1="1.81321"
                y1="170.069"
                x2="121.524"
                y2="99.6445"
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
                id="paint1_linear_997_13451"
                x1="35.6172"
                y1="638.141"
                x2="68.2315"
                y2="637.349"
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
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EveryDayCard;
