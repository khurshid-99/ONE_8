// -------------------

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import gsap from "gsap";

import "./Navbar.style.scss";
import {
  AcctiveLife,
  csdcfdvf,
  HybridWorkouot,
  OdeCricket,
  Retouched,
  Running,
  scvfvcsv,
  sfvfv,
} from "../../images";

type MenuLink = {
  title: string;
  href: string;
};

type MenuChildren = {
  heading?: string;
  items: MenuLink[];
};

type MenuItem = {
  title: string;
  href?: string;
  children?: MenuChildren;
};

type MegaMenuData = {
  title: string;
  href: string;
  menu: MenuItem[];
  images: {
    title: string;
    image: string;
    href: string;
  }[];
};

const trendingSearches = [
  "Sneakers",
  "Cricket Shoes",
  "Tshirts",
  "Caps",
  "Jackets",
  "Running Shoes",
];

const navData: Record<string, MegaMenuData> = {
  Featured: {
    title: "Featured",
    href: "/featured-all",
    menu: [
      {
        title: "An Ode to Cricket ",
        href: "/collections/seam-collection",
      },
      {
        title: "Active Lifestyle",
        href: "/collections/seam-collection",
      },
      {
        title: "Cover Drive",
        href: "/collections/active-lifestyle",
      },
      {
        title: "Hybrid Workout",
        href: "/collections/active-lifestyle",
      },
    ],

    images: [
      {
        title: "Cricket",
        image: OdeCricket,
        href: "/collections/gym",
      },
      {
        title: "Active Lifestyle",
        image: AcctiveLife,
        href: "/collections/sneakers",
      },
      {
        title: "Hybrid Workout",
        image: HybridWorkouot,
        href: "/collections/sneakers",
      },
    ],
  },

  Women: {
    title: "Women",
    href: "/collections/women-all",

    menu: [
      {
        title: "Featured",
        children: {
          heading: "Featured",
          items: [
            {
              title: "By Collection",
              href: "/collections/women-featured",
            },
            {
              title: "Seam Collection",
              href: "/collections/seam-collection",
            },
            {
              title: "Active Lifestyle",
              href: "/collections/active-lifestyle",
            },
          ],
        },
      },

      {
        title: "Footwear",
        children: {
          heading: "By Products",
          items: [
            {
              title: "View All",
              href: "/collections/women-footwear",
            },
            {
              title: "Gym",
              href: "/collections/women-gym",
            },
            {
              title: "Running",
              href: "/collections/women-running",
            },
            {
              title: "Sneakers",
              href: "/collections/women-sneakers",
            },
          ],
        },
      },

      {
        title: "Clothing",
        children: {
          heading: "By Products",
          items: [
            {
              title: "View All",
              href: "/collections/women-clothing",
            },
            {
              title: "T-shirts",
              href: "/collections/women-tshirts",
            },
            {
              title: "Jackets",
              href: "/collections/women-jackets",
            },
            {
              title: "Tank Tops",
              href: "/collections/women-tank-tops",
            },
            {
              title: "Leggings",
              href: "/collections/women-leggings",
            },
            {
              title: "Shorts",
              href: "/collections/women-shorts",
            },
          ],
        },
      },

      {
        title: "Caps",
        href: "/collections/women-caps",
      },

      {
        title: "Activity",
        children: {
          heading: "By Activity",
          items: [
            {
              title: "Lifestyle",
              href: "/collections/women-lifestyle",
            },
            {
              title: "Gym",
              href: "/collections/women-gym",
            },
            {
              title: "Running",
              href: "/collections/women-running",
            },
          ],
        },
      },

      {
        title: "Bestsellers",
        href: "/collections/women-bestsellers",
      },

      {
        title: "New Arrivals",
        href: "/collections/women-new-arrivals",
      },
    ],

    images: [
      {
        title: "Gym",
        image: scvfvcsv,
        href: "/collections/women-gym",
      },
      {
        title: "Sneakers",
        image: Retouched,
        href: "/collections/women-sneakers",
      },
    ],
  },

  Men: {
    title: "Men",
    href: "/collections/men-all",

    menu: [
      {
        title: "Featured",
        href: "/collections/men-featured",
      },
      {
        title: "Footwear",
        children: {
          heading: "By Products",
          items: [
            {
              title: "View All",
              href: "/collections/men-footwear",
            },
            {
              title: "Gym",
              href: "/collections/men-gym",
            },
            {
              title: "Running",
              href: "/collections/men-running",
            },
            {
              title: "Cricket",
              href: "/collections/men-cricket",
            },
            {
              title: "Sneakers",
              href: "/collections/men-sneakers",
            },
          ],
        },
      },
      {
        title: "Clothing",
        children: {
          heading: "By Products",
          items: [
            {
              title: "View All",
              href: "/collections/men-clothing",
            },
            {
              title: "T-shirts",
              href: "/collections/men-tshirts",
            },
            {
              title: "Polos",
              href: "/collections/men-polos",
            },
            {
              title: "Sweatshirts",
              href: "/collections/men-sweatshirts",
            },
            {
              title: "Jackets",
              href: "/collections/men-jackets",
            },
            {
              title: "Pants",
              href: "/collections/men-pants",
            },
            {
              title: "Shorts",
              href: "/collections/men-shorts",
            },
          ],
        },
      },
      {
        title: "Caps",
        href: "/collections/men-caps",
      },
      {
        title: "Activity",
        children: {
          heading: "By Activity",
          items: [
            {
              title: "Running",
              href: "/collections/men-running",
            },
            {
              title: "Gym",
              href: "/collections/men-gym",
            },
            {
              title: "Cricket",
              href: "/collections/men-cricket",
            },
            {
              title: "Lifestyle",
              href: "/collections/men-lifestyle",
            },
          ],
        },
      },
      {
        title: "Bestsellers",
        href: "/collections/men-bestsellers",
      },
      {
        title: "New Arrivals",
        href: "/collections/men-new-arrivals",
      },
    ],

    images: [
      {
        title: "Seam Collection",
        image: sfvfv,
        href: "/collections/seam-collection",
      },
      {
        title: "Gym",
        image: Running,
        href: "/collections/men-gym",
      },
      {
        title: "Running",
        image: csdcfdvf,
        href: "/collections/men-running",
      },
    ],
  },

  Kids: {
    title: "Kids",
    href: "/collections/kids-all",

    menu: [],

    images: [],
  },
};

const accountLinks = [
  {
    title: "My account",
    href: "/account",
  },
  {
    title: "Wishlist",
    href: "/wishlist",
  },
  {
    title: "Contact us",
    href: "/pages/contact-us",
  },
  {
    title: "Return & Exchange Portal",
    href: "/pages/return-exchange",
  },
];

const topLinks = ["Featured", "Women", "Men", "Kids"];

export default function Navbar() {
  const path = useLocation();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const [searchOpen, setSearchOpen] = useState(false);

  const [accountOpen, setAccountOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileLevel, setMobileLevel] = useState<"main" | "category" | "sub">(
    "main",
  );

  const [mobileCategory, setMobileCategory] = useState<string | null>(null);

  const [mobileSubCategory, setMobileSubCategory] = useState<string | null>(
    null,
  );

  const [text, setText] = useState("");

  const navbarRef = useRef<HTMLElement | null>(null);

  const menuRef = useRef<HTMLDivElement | null>(null);

  /**
   * ------------------------
   * Scroll to Close Mega Menu
   * ------------------------
   */

  useEffect(() => {
    if (!activeMenu) return;

    const handleScroll = () => {
      setActiveMenu(null);
      setActiveSubMenu(null);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeMenu]);

  /*
   * ------------------------------------
   * Search Typewriter
   * ------------------------------------
   */

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    let timer: gsap.core.Tween | undefined;

    const type = () => {
      const word = trendingSearches[wordIndex];

      if (!deleting) {
        charIndex++;

        setText(word.substring(0, charIndex));

        if (charIndex === word.length) {
          deleting = true;

          timer = gsap.delayedCall(1.2, type);

          return;
        }
      } else {
        charIndex--;

        setText(word.substring(0, charIndex));

        if (charIndex === 0) {
          deleting = false;

          wordIndex = (wordIndex + 1) % trendingSearches.length;
        }
      }

      const speed = deleting
        ? gsap.utils.random(0.04, 0.08)
        : gsap.utils.random(0.07, 0.16);

      timer = gsap.delayedCall(speed, type);
    };

    type();

    return () => {
      timer?.kill();
    };
  }, []);

  /*
   * ------------------------------------
   * Navbar scroll
   * ------------------------------------
   */

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!navbarRef.current) return;

  //     if (window.scrollY > 20) {
  //       navbarRef.current.classList.add("navbar_scrolled");
  //     } else {
  //       navbarRef.current.classList.remove("navbar_scrolled");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  /*
   * ------------------------------------
   * Outside click
   * ------------------------------------
   */

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (menuRef.current && !menuRef.current.contains(target)) {
        setActiveMenu(null);
        setSearchOpen(false);
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  /*
   * ------------------------------------
   * Open desktop menu
   * ------------------------------------
   */

  const openMenu = (menuName: string) => {
    setActiveMenu(menuName);

    setActiveSubMenu(null);

    setSearchOpen(false);

    setAccountOpen(false);
  };

  /*
   * ------------------------------------
   * Mobile
   * ------------------------------------
   */

  const openMobileCategory = (category: string) => {
    setMobileCategory(category);

    setMobileLevel("category");
  };

  const openMobileSubCategory = (category: string) => {
    setMobileSubCategory(category);

    setMobileLevel("sub");
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);

    setMobileLevel("main");

    setMobileCategory(null);

    setMobileSubCategory(null);
  };

  const mobileBack = () => {
    if (mobileLevel === "sub") {
      setMobileLevel("category");
      setMobileSubCategory(null);

      return;
    }

    if (mobileLevel === "category") {
      setMobileLevel("main");
      setMobileCategory(null);

      return;
    }

    closeMobileMenu();
  };

  const activeData = activeMenu ? navData[activeMenu] : null;

  const activeSubMenuData = activeData?.menu.find(
    (item) => item.title === activeSubMenu,
  );

  return (
    <>
      <nav
        ref={navbarRef}
        className={`top_navbar absolute z-999 w-full h-90p flex items-center justify-between px-40p ${path.pathname !== "/" ? "" : `${activeData ? `bg-white text-black placeholder:text-light ` : `text-white placeholder:text-white`}`}`}
      >
        {/* Desktop navigation */}

        <ul className="top_nav_ul flex items-center gap-32p text-16 font-OM  ">
          {topLinks.map((item) => (
            <li
              key={item}
              className={`nav_list_item ${
                activeMenu === item ? "nav_list_item_active" : ""
              }`}
              onMouseEnter={() => openMenu(item)}
            >
              <Link to={navData[item].href} onClick={() => setActiveMenu(null)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}

        <div>
          <Link to={""} className="block w-84p h-62p ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 120.83"
              className="w-full h-full "
            >
              <path
                d="M48.95 0l-.36 11.78c-6.07.78-10.76 5.97-10.76 12.25 0 3.91 1.81 7.39 4.64 9.65C36.13 36.6 31.74 43 31.74 50.44c0 9.05 6.52 16.58 15.12 18.14l-.37 11.98h7.38l-.37-11.98c8.6-1.56 15.12-9.09 15.12-18.14 0-7.43-4.4-13.84-10.73-16.76 2.83-2.26 4.64-5.75 4.64-9.65 0-6.28-4.69-11.47-10.76-12.25L51.41 0h-2.46zm-7.13 23.64c0-4.03 2.86-7.4 6.66-8.19l-.5 16.25c-3.55-.97-6.16-4.21-6.16-8.07m-5.17 26.28c0-6.67 4.83-12.21 11.18-13.32l-.81 26.48c-5.95-1.42-10.37-6.77-10.37-13.15m27.05-.01c0 6.38-4.42 11.73-10.37 13.15l-.81-26.48c6.35 1.11 11.18 6.65 11.18 13.32m-5.16-26.26c0 3.86-2.61 7.1-6.16 8.07l-.5-16.25c3.8.79 6.66 4.15 6.66 8.19M0 109.26c0-6.96 5.27-11.52 11.52-11.52s11.57 4.56 11.57 11.52-5.32 11.57-11.57 11.57S0 116.22 0 109.26zm18.48 0c0-4.23-3.2-7.2-6.96-7.2s-6.91 2.96-6.91 7.2 3.15 7.24 6.91 7.24 6.96-2.96 6.96-7.24zM47.74 107.7v12.56h-4.61v-12.28c0-3.57-2.16-5.74-4.99-5.74s-6.35 1.65-6.35 6.21v11.81h-4.61V98.29h4.61v3.39c1.27-2.73 4.8-3.95 7.15-3.95 5.55 0 8.84 3.72 8.8 9.97zM73.85 111.14h-17.5c.61 3.57 3.25 5.41 6.77 5.41 2.59 0 4.99-1.18 6.21-3.2l3.67 1.83c-1.93 3.67-5.88 5.64-10.07 5.64-6.35 0-11.34-4.66-11.34-11.62s5.08-11.48 11.34-11.48 11.01 4.52 11.01 11.43c0 .61-.05 1.27-.09 1.98zm-4.52-3.72c-.47-3.43-2.96-5.41-6.35-5.41s-5.93 1.74-6.58 5.41h12.93zM100 111.09c0 5.74-4.89 9.74-11.57 9.74s-11.66-4-11.66-9.69c0-3.95 2.35-7.29 5.83-8.56-1.88-1.13-3.2-3.1-3.2-5.74 0-4.42 3.72-7.71 9.03-7.71s8.98 3.29 8.98 7.71c0 2.63-1.32 4.61-3.2 5.74 3.48 1.32 5.79 4.61 5.79 8.51zm-4.84-.33c0-3.48-3.06-5.93-6.73-5.93s-6.82 2.49-6.82 5.88 2.96 5.79 6.82 5.79 6.73-2.54 6.73-5.74zM84.2 97.26c0 2.16 1.83 3.81 4.23 3.81s4.23-1.65 4.23-3.81-1.83-3.95-4.23-3.95-4.23 1.79-4.23 3.95z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>

        {/* Search */}
        <div className="flex items-center gap-16p ">
          <form action="" className="px-16p ">
            <div className="navbar_search_container relative px-16p py-8p border  rounded-sm flex items-center justify-center gap-12p ">
              <button aria-label="Search for products">
                <svg
                  className="icon-search"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                  <path
                    d="M14.5 14.5L19 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <input
                type="search"
                placeholder={`Search for ${text}`}
                className={`outline-none text-16p font-OM  `}
              />

              {/*  */}
            </div>
          </form>
          {/*  */}
          <div className="flex items-center gap-16p hover:text-black ">
            <div>
              <Link to={""} className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                  className="min-w-32p w-32p h-32p "
                >
                  <path
                    d="M19.6706 5.4736C17.6806 3.8336 14.7206 4.1236 12.8906 5.9536L12.0006 6.8436L11.1106 5.9536C9.29063 4.1336 6.32064 3.8336 4.33064 5.4736C2.05064 7.3536 1.93063 10.7436 3.97063 12.7836L11.6406 20.4536C11.8406 20.6536 12.1506 20.6536 12.3506 20.4536L20.0206 12.7836C22.0706 10.7436 21.9506 7.3636 19.6706 5.4736Z"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>
            <div>
              <Link to={""}>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="svgkp"
                  className="min-w-32p w-32p h-32p "
                >
                  <path
                    d="M22.9129 12.935L13.7571 23.0474C13.5348 23.2929 13.1284 23.1084 13.1669 22.7794L14.0816 14.9731H10.6991C10.4034 14.9731 10.2484 14.6219 10.4478 14.4035L20.3133 3.59739C20.5589 3.32834 20.9984 3.58134 20.8891 3.92887L18.2354 12.3664H22.6607C22.9557 12.3664 23.1109 12.7163 22.9129 12.935Z"
                    fill="#FEA203"
                  ></path>
                  <path
                    id="svgkp-path"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6079 5.35819C16.4805 5.1933 16.3421 5.03582 16.1932 4.8869C15.2702 3.96387 14.0183 3.44531 12.7129 3.44531C11.4075 3.44531 10.1556 3.96387 9.2326 4.8869C8.30957 5.80993 7.79102 7.06183 7.79102 8.36719C7.79102 9.67255 8.30957 10.9244 9.2326 11.8475C9.48368 12.0986 9.75909 12.3197 10.0533 12.5086L11.0235 11.4503C10.7335 11.2914 10.4649 11.0911 10.227 10.8531C9.56766 10.1938 9.19727 9.29959 9.19727 8.36719C9.19727 7.43479 9.56766 6.54057 10.227 5.88127C10.8863 5.22196 11.7805 4.85156 12.7129 4.85156C13.6453 4.85156 14.5395 5.22196 15.1988 5.88127C15.3636 6.04604 15.5103 6.22549 15.6377 6.41654L16.6079 5.35819ZM20.6413 18.6497L19.6746 19.7132C20.1676 20.4122 20.4473 21.2264 20.4473 22.0781V23.8359C20.4473 24.2243 20.7621 24.5391 21.1504 24.5391C21.5387 24.5391 21.8535 24.2243 21.8535 23.8359V22.0781C21.8535 20.7863 21.4016 19.6103 20.6413 18.6497ZM12.3111 17.5078H10.3026C7.27113 17.5078 4.97852 19.6394 4.97852 22.0781V23.8359C4.97852 24.2243 4.66372 24.5391 4.27539 24.5391C3.88707 24.5391 3.57227 24.2243 3.57227 23.8359V22.0781C3.57227 18.6922 6.67684 16.1016 10.3026 16.1016H12.4885L12.3111 17.5078Z"
                    fill="currentColor"
                    stroke="currentColor"
                  ></path>
                </svg>
              </Link>
            </div>
            <div>
              <Link to={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="min-w-32p w-32p h-32p "
                >
                  <path
                    d="M6.66602 11.3333C6.66602 10.2288 7.56145 9.33334 8.66602 9.33334H23.3327C24.4373 9.33334 25.3327 10.2288 25.3327 11.3333V25C25.3327 26.6569 23.9895 28 22.3327 28H9.66601C8.00916 28 6.66602 26.6569 6.66602 25V11.3333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M20 13.3333V7C20 5.34315 18.6569 4 17 4H15C13.3431 4 12 5.34314 12 7V13.3333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Mega Menu */}

      {activeData && (
        <div
          ref={menuRef}
          className="desktop_mega_menu  fixed z-998 w-full left-0 "
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="mega_menu_inner justify-between ">
            {/* Left */}

            <div className="mega_menu_links w-[330px]  bg-light flex flex-col justify-between pl-40p py-22p pr-16p ">
              <ul className="flex flex-col mb-62p">
                {activeData?.menu.map((item) => (
                  <li
                    key={item.title}
                    className={`text-24 font-OB mb-16p  duration-500 cursor-pointer ${activeSubMenu === item.title ? "pl-4 text-black" : "pl-0 text-gray-dark hover:text-black"} `}
                  >
                    {item.href ? (
                      <Link to={item.href}>{item.title}</Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActiveSubMenu(item.title)}
                        className="w-full flex justify-between items-center "
                      >
                        <span> {item.title}</span>
                        <Link
                          to={""}
                          className={`duration-300 ${activeSubMenu === item.title ? "text-cyan" : ""} `}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M18.7837 11.5699C19.0335 11.8197 19.0335 12.2216 18.7837 12.4714L14.2759 16.9792C14.0261 17.229 13.6242 17.229 13.3744 16.9792C13.1246 16.7294 13.1246 16.3275 13.3744 16.0777L16.7947 12.6574L5.71298 12.6574C5.35987 12.6574 5.07438 12.3719 5.07626 12.0207C5.07813 11.6694 5.35987 11.3839 5.7111 11.382L16.7928 11.382L13.3725 7.96175C13.1227 7.71194 13.1227 7.31 13.3725 7.06019C13.6223 6.81038 14.0242 6.81038 14.2741 7.06019L18.7819 11.568L18.7837 11.5699Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Link>
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {/*  */}

              <div className="flex items-end justify-between ">
                <ul className="flex flex-col items-start gap-6p text-16 text-dark font-OM ">
                  <li>
                    <Link to={""}>My account</Link>
                  </li>
                  <li>
                    <Link to={""}>Wishlist</Link>
                  </li>
                  <li>
                    <Link to={""}>Return & Exchange Portal</Link>
                  </li>
                </ul>
                <div className="text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="108"
                    viewBox="0 0 50 108"
                    fill="none"
                  >
                    <path
                      d="M23.2515 -1.01635e-06L22.7879 16.1543C14.6592 17.2391 8.38719 24.2202 8.3872 32.6731C8.3872 37.7529 10.6539 42.2981 14.2246 45.3581C5.81286 49.3978 -2.18467e-06 58.0207 -1.7482e-06 68.0058C-1.20849e-06 80.353 8.88869 90.6177 20.5924 92.7069L20.1533 108L29.9425 108L29.5101 92.6868C41.1648 90.5551 50 80.3172 50 68.0058C50 58.0207 44.1871 49.4 35.7732 45.3603C39.3438 42.3026 41.6106 37.7574 41.6106 32.6753C41.6106 24.2694 35.4099 17.3196 27.3503 16.1721L26.8934 -1.17555e-06L23.2515 -1.01635e-06ZM13.8301 32.0669C13.8301 26.6874 17.608 22.1936 22.6474 21.1088L22.0234 42.8707C17.3004 41.5622 13.8323 37.2228 13.8323 32.0669L13.8301 32.0669ZM6.97187 67.328C6.97187 58.4211 13.3865 51.0239 21.8317 49.5185L20.8153 84.925C12.8761 83.0305 6.97187 75.8727 6.97187 67.328ZM43.0281 67.328C43.0281 75.8369 37.1751 82.9678 29.2894 84.9004L28.2909 49.5409C36.6737 51.0955 43.0259 58.4636 43.0259 67.328L43.0281 67.328ZM36.1699 32.0669C36.1699 37.1758 32.762 41.4839 28.1037 42.835L27.4907 21.1401C32.4589 22.2764 36.1699 26.7344 36.1699 32.0669Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <div className="flex justify-between">
                {/* Menu Items */}
                {activeSubMenuData?.children && (
                  <div className="pl-40p py-32p ">
                    <h3 className="text-32 text-dark font-OB mb-32p">
                      {activeSubMenuData.children.heading}
                    </h3>

                    <ul className="flex flex-col">
                      {activeSubMenuData.children?.items?.map((child) => (
                        <li
                          key={child.title}
                          className="text-12 text-dark font-OM mb-12p "
                        >
                          <Link to={child.href} className="text-16 font-OR">
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Images */}

                {activeData.images.length > 0 && (
                  <div
                    className={`flex flex-1 justify-end items-center gap-2 py-32p pr-16p ${
                      activeData.images.length === 3
                        ? "mega_menu_images_three"
                        : ""
                    }`}
                  >
                    {activeData.images.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className=""
                        onClick={() => setActiveMenu(null)}
                      >
                        <div className="">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-360p aspect-360/388 object-cover object-center rounded-md"
                          />
                        </div>

                        <span className="text-18p text-dark font-OB leading-16p ">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className=" flex justify-end items-end">
                <svg
                  width="528"
                  height="165"
                  viewBox="0 0 528 165"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M497.583 69.2804C515.98 76.3798 528 93.7611 528 114.325C528 144.191 502.98 165 468.148 165C433.07 165 407.805 144.191 407.805 114.57C407.805 93.7611 419.824 76.3798 438.467 69.2804C428.655 63.1602 422.277 53.1232 422.277 39.6588C422.277 17.1365 440.674 0 468.148 0C495.375 0 514.018 17.1365 514.018 39.6588C514.018 53.1232 507.395 63.1602 497.583 69.2804ZM468.148 19.8294C454.902 19.8294 444.599 29.6217 444.599 41.6172C444.599 53.368 454.902 62.4258 468.148 62.4258C481.394 62.4258 491.451 53.6128 491.451 41.6172C491.451 29.6217 481.394 19.8294 468.148 19.8294ZM468.148 144.926C490.224 144.926 505.433 130.727 505.433 112.856C505.433 93.7611 488.262 80.2967 468.148 80.2967C447.543 80.2967 430.372 94.0059 430.372 112.611C430.372 130.727 446.807 144.926 468.148 144.926Z"
                    fill="currentColor"
                    fill-opacity="0.03"
                  ></path>
                  <path
                    d="M389.834 104.532C389.834 107.715 389.589 110.897 389.344 114.08H296.131C299.32 134.399 314.038 144.926 333.662 144.926C347.643 144.926 360.399 138.561 367.022 127.055L385.419 134.399C375.607 154.228 355.002 165 332.926 165C300.301 165 274.055 140.764 274.055 104.532C274.055 68.301 300.301 44.7996 332.926 44.7996C365.55 44.7996 389.834 68.301 389.834 104.532ZM296.377 95.7194H368.494C365.795 76.1349 351.814 64.8737 332.926 64.8737C313.547 64.8737 299.811 75.1556 296.377 95.7194Z"
                    fill="currentColor"
                    fill-opacity="0.03"
                  ></path>
                  <path
                    d="M204.776 44.7996C233.23 44.7996 251.137 63.8945 250.891 95.9642V164.763H229.551V97.1883C229.551 78.0933 217.776 65.853 201.832 65.853C185.888 65.853 166.755 75.4005 166.755 100.126V164.763H145.414V47.7373H166.755V65.1185C173.623 51.1645 192.266 44.7996 204.776 44.7996Z"
                    fill="currentColor"
                    fill-opacity="0.03"
                  ></path>
                  <path
                    d="M59.8522 165C27.2279 165 0 141.009 0 104.777C0 68.5458 27.2279 44.7996 59.8522 44.7996C92.4766 44.7996 119.95 68.5458 119.95 104.777C119.95 141.009 92.4766 165 59.8522 165ZM59.8522 144.926C80.9477 144.926 98.609 128.524 98.609 104.777C98.609 81.2758 80.9477 64.8737 59.8522 64.8737C39.0021 64.8737 21.5861 81.2758 21.5861 104.777C21.5861 128.524 39.0021 144.926 59.8522 144.926Z"
                    fill="currentColor"
                    fill-opacity="0.03"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="mobile_nav_overlay">
          <div className="mobile_nav">
            <div className="mobile_nav_header">
              {mobileLevel !== "main" ? (
                <button
                  type="button"
                  onClick={mobileBack}
                  className="mobile_back_btn"
                >
                  ← Back
                </button>
              ) : (
                <span className="mobile_nav_logo">one8</span>
              )}

              <button
                type="button"
                className="mobile_close_btn"
                onClick={closeMobileMenu}
              >
                ×
              </button>
            </div>

            {/* Main */}

            {mobileLevel === "main" && (
              <div className="mobile_menu_content">
                {topLinks.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="mobile_menu_item"
                    onClick={() => openMobileCategory(item)}
                  >
                    <span>{item}</span>

                    <span>→</span>
                  </button>
                ))}

                <div className="mobile_menu_divider" />

                {accountLinks.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="mobile_menu_item"
                    onClick={closeMobileMenu}
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Category */}

            {mobileLevel === "category" &&
              mobileCategory &&
              navData[mobileCategory] && (
                <div className="mobile_menu_content">
                  <Link
                    to={navData[mobileCategory].href}
                    className="mobile_menu_all"
                    onClick={closeMobileMenu}
                  >
                    View All {mobileCategory}
                  </Link>

                  {navData[mobileCategory].menu.map((item) => (
                    <div key={item.title}>
                      {item.children ? (
                        <button
                          type="button"
                          className="mobile_menu_item"
                          onClick={() => openMobileSubCategory(item.title)}
                        >
                          <span>{item.title}</span>

                          <span>→</span>
                        </button>
                      ) : (
                        <Link
                          to={item.href || "#"}
                          className="mobile_menu_item"
                          onClick={closeMobileMenu}
                        >
                          <span>{item.title}</span>
                        </Link>
                      )}
                    </div>
                  ))}

                  {navData[mobileCategory].images.length > 0 && (
                    <div className="mobile_menu_images">
                      {navData[mobileCategory].images.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          onClick={closeMobileMenu}
                        >
                          <img src={item.image} alt={item.title} />

                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

            {/* Sub category */}

            {mobileLevel === "sub" && mobileCategory && mobileSubCategory && (
              <div className="mobile_menu_content">
                {navData[mobileCategory].menu
                  .filter((item) => item.title === mobileSubCategory)
                  .map((item) => (
                    <div key={item.title}>
                      <h3 className="mobile_sub_title">{item.title}</h3>

                      {item.children?.heading && (
                        <p className="mobile_sub_heading">
                          {item.children.heading}
                        </p>
                      )}

                      {/* {item.children?.items.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          className="mobile_menu_item"
                          onClick={closeMobileMenu}
                        >
                          {child.title}
                        </Link>
                      ))} */}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
