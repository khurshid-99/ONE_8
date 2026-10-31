import { useState } from "react";
import { ArrowDown } from "../../images";
import { useLocation } from "react-router";
import type { ToggleRef } from "../toggleComponents/Toggle";

type FilterGroup = {
  title: string;
  options: string[];
};

interface SideNavProps {
  className?: string;
  toggleRef?: React.RefObject<ToggleRef | null>;
}

const filterGroups: FilterGroup[] = [
  {
    title: "Price",
    options: [
      "₹1,000 - ₹2,000",
      "₹2,000 - ₹4,000",
      "₹4,000 - ₹6,000",
      "₹6,000 - ₹8,000",
      "₹8,000 - ₹20,000",
    ],
  },
  {
    title: "Gender",
    options: ["Female", "Male", "Unisex"],
  },
  {
    title: "Product type",
    options: ["Cricket shoes", "Sneakers"],
  },
  {
    title: "Size",
    options: [
      "UK 1",
      "UK 2",
      "UK 3",
      "UK 4",
      "UK 5",
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11",
      "UK 12",
    ],
  },
  {
    title: "Category",
    options: ["Footwear"],
  },
  {
    title: "Color",
    options: [
      "Black",
      "Blue",
      "Brown",
      "Dark navy",
      "Green",
      "Grey",
      "Pink",
      "Red",
      "White",
    ],
  },
  {
    title: "Activity",
    options: ["Running", "Lifestyle", "Training", "Cricket"],
  },
];

const SideNav = ({ className, toggleRef }: SideNavProps) => {
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const path = useLocation();

  const toggleGroup = (title: string) => {
    setOpenGroups((previous) =>
      previous.includes(title)
        ? previous.filter((item) => item !== title)
        : [...previous, title],
    );
  };

  const toggleFilter = (option: string) => {
    setSelectedFilters((previous) =>
      previous.includes(option)
        ? previous.filter((item) => item !== option)
        : [...previous, option],
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };
  return (
    <aside
      className={` sticky top-5 w-101.25 shrink-0 self-start p-20p ${className} `}
    >
      <div className="relative flex flex-col ">
        <div className="border-b border-gray-muted w-full ">
          <h3 className="text-36 leading-44p text-dark-gray font-OB capitalize ">
            {path.pathname?.split("/")[2]}
            <span className="text-16 text-gray-dark font-OR ml-2 ">
              52 Products
            </span>
          </h3>
          {/*  */}
          {selectedFilters.length > 0 && (
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center justify-between ">
                <p>Applied filters</p>
                {selectedFilters.length > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-12 text-gray-medium hover:text-black"
                  >
                    Clear
                  </button>
                )}
              </div>
              {/*  */}
              <div>
                <div className="flex items-start gap-2 mb-2 flex-wrap">
                  {selectedFilters.map((item, index) => (
                    <div key={index} className="px-16p py-8p bg-light ">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => toggleRef.current?.close()}
          className="absolute top-5 right-0 cursor-pointer lg:hidden  "
        >
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
        </div>
      </div>

      <div className="">
        {filterGroups.map((group) => {
          const isOpen = openGroups.includes(group.title);

          return (
            <section key={group.title} className="border-t border-light">
              <button
                type="button"
                onClick={() => toggleGroup(group.title)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-18p text-left text-14 font-medium"
              >
                <span className="text-14 text-dark font-RM7 uppercase">
                  {group.title}
                </span>

                <img
                  src={ArrowDown}
                  alt=""
                  className={`mr-15p transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-14p pb-5">
                    {group.options.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 text-16 font-OR text-dark-gray hover:text-black"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.includes(option)}
                          onChange={() => toggleFilter(option)}
                          className="size-18p shrink-0 cursor-pointer accent-black"
                        />

                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </aside>
  );
};

export default SideNav;
