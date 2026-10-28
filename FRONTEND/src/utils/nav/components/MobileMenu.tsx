import {
  useImperativeHandle,
  useRef,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import Toggle, { type ToggleRef } from "../../toggleComponents/Toggle";
import { Link } from "react-router";
import NavCategoryCatd from "./NavCategoryCatd";
import { navMenuData } from "../../testData";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<ToggleRef | null>;
}
export interface MobileMenuRef extends ToggleRef {
  closeMenu: () => void;
}

const MobileMenu = ({ isActive, setIsActive, ref }: Props) => {
  const [navMenuItems, setNavMenuItems] = useState(navMenuData);
  // console.log(navMenuItems)
  const [activeMenuItem, setActiveMenuItem] = useState<
    "featured" | "women" | "men" | "kids" | null
  >(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null,
  );

  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const [isSubCategoryActive, setIsSubCategoryActive] = useState(false);

  const [isFeatured, setIsFeatured] = useState(false);
  const [isWomen, setIsWomen] = useState(false);
  const [isMan, setIsMan] = useState(false);

  const mainMenuRef = useRef<ToggleRef>(null);
  const backRef = useRef<ToggleRef>(null);
  const subCategoryRef = useRef<ToggleRef>(null);

  // console.log(ref.current)

  const HandleToggleCategory = (category: string) => {
    setActiveMenuItem(category);
    setIsCategoryActive(true);
  };

  // Reset the selected category states
  const resetCategories = () => {
    setIsFeatured(false);
    setIsWomen(false);
    setIsMan(false);
    setIsSubCategoryActive(false);
  };

  // Close only the submenu
  const HandleCloseSubmenu = () => {
    backRef.current?.close();
    subCategoryRef.current?.close();
    resetCategories();
  };

  const HandleCloseSubCategoryMenu = () => {
    subCategoryRef.current?.close();
  };

  // Close the main menu and submenu
  const HandleCloseMenu = () => {
    resetCategories();

    // Close the submenu using its GSAP animation
    backRef.current?.close();

    // Close the main menu using its GSAP animation
    mainMenuRef.current?.close();
  };

  // Expose methods to Navbar
  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        mainMenuRef.current?.open();
      },

      close: HandleCloseMenu,

      closeMenu: HandleCloseMenu,
    }),
    [],
  );

  const selectedCategory = activeMenuItem ? navMenuData[activeMenuItem] : null;
  const selectSubCategory = selectedCategory?.menu.find(
    (item) => item.title === activeSubCategory,
  );
  return (
    <>
      <Toggle
        ref={mainMenuRef}
        isActive={isActive}
        setIsActive={setIsActive}
        side="left"
        duration={0.5}
        className="w-full top-70p"
      >
        <nav className="flex flex-col gap-4 p-25p">
          <ul className="flex flex-col gap-12p ">
            <li
              onClick={() => HandleToggleCategory("featured")}
              className="flex items-center justify-between text-22 text-gray-dark font-OB cursor-pointer "
            >
              Featured
              <span>
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
              </span>
            </li>
            <li
              onClick={() => HandleToggleCategory("women")}
              className="flex items-center justify-between text-22 text-gray-dark font-OB cursor-pointer "
            >
              Women{" "}
              <span>
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
              </span>
            </li>
            <li
              onClick={() => HandleToggleCategory("men")}
              className="flex items-center justify-between text-22 text-gray-dark font-OB cursor-pointer "
            >
              Men{" "}
              <span>
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
              </span>
            </li>
            <li className="text-22 text-gray-dark font-OB cursor-pointer ">
              Kid{" "}
            </li>
          </ul>
        </nav>

        {/*  */}

        <Toggle
          ref={backRef}
          isActive={isCategoryActive}
          setIsActive={setIsCategoryActive}
          side="left"
          duration={0.3}
          className="max-w-100 "
        >
          <div
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="w-full h-full flex flex-col overflow-hidden bg-[#fffafa] "
          >
            <button
              onClick={() => HandleCloseSubmenu()}
              className="flex items-center gap-8p bg-light w-full px-16p py-8p text-16 text-dark-gray font-OR  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M18.3307 11H3.66406M3.66406 11L9.16406 5.5M3.66406 11L9.16406 16.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
              </svg>
              <span>Back</span>
            </button>

            {/*  */}

            <div className="w-full flex-1 min-h-0 overflow-y-auto scrollbar-none px-24p py-16p ">
              {/*  */}
              <ul className="text-22 text-gray-dark font-OB grid grid-cols-1 gap-12p ">
                <li className="text-26 text-dark-gray uppercase mb-12p ">
                  <Link to={""}>{selectedCategory?.title}</Link>
                </li>
                {selectedCategory?.menu?.map((item) => (
                  <li key={item.title} className=" ">
                    {item.href ? (
                      <Link to={""}>{item.title}</Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSubCategory(item.title);
                          setIsSubCategoryActive(true);
                        }}
                        className="w-full flex justify-between items-center"
                      >
                        <span> {item.title}</span>
                        <Link to={""} className={`duration-300  `}>
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
              {selectSubCategory && (
                <Toggle
                  ref={subCategoryRef}
                  isActive={isSubCategoryActive}
                  setIsActive={setIsSubCategoryActive}
                  side="left"
                  duration={0.3}
                  className="max-w-100 h-full"
                >
                  <div className="flex h-full min-h-0 flex-col overflow-hidden bg-white">
                    {/* Back button */}
                    <button
                      onClick={() => subCategoryRef.current?.close()}
                      className="flex shrink-0 items-center gap-8p bg-light w-full px-16p py-8p text-16 text-dark-gray font-OR  "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M18.3307 11H3.66406M3.66406 11L9.16406 5.5M3.66406 11L9.16406 16.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>

                      <span>Back</span>
                    </button>

                    {/* Scrollable content */}
                    <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain scrollbar-none px-16p py-8p">
                      <h2 className="text-26 text-dark-gray font-OB uppercase mb-16p">
                        {selectSubCategory.title}
                      </h2>

                      <ul className="flex flex-col gap-6p text-14 text-dark font-OM  ">
                        <li className="font-OB uppercase mb-6p ">
                          <Link to={""}>
                            {selectSubCategory?.children?.heading}
                          </Link>
                        </li>
                        {selectSubCategory.children.items.map(
                          (
                            { title, href }: { title: string; href: string },
                            index: number,
                          ) => (
                            <li className={``}>
                              <Link to={href}>{title}</Link>
                            </li>
                          ),
                        )}
                      </ul>

                      <div className="flex flex-col items-center gap-24p pt-32p mb-20">
                        {selectedCategory?.images?.map(({ title, image }) => (
                          <NavCategoryCatd
                            key={title}
                            img={image}
                            title={title}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Toggle>
              )}
              {/*  */}

              <div className="flex flex-col items-center gap-24p pt-32p mb-20 ">
                {selectedCategory?.images?.map(({ title, image, href }) => (
                  <NavCategoryCatd key={title} img={image} title={title} />
                ))}
              </div>
            </div>
            {/*  */}
          </div>
        </Toggle>
      </Toggle>
    </>
  );
};

export default MobileMenu;
