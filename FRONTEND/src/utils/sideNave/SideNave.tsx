import { useState } from "react";
import { ArrowDown } from "../../images";

type FilterGroup = {
  title: string;
  options: string[];
};

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

const SideNave = () => {
  const [openGroups, setOpenGroups] = useState<string[]>(["Price"]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

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
    <aside className="sticky top-20 w-101.25 shrink-0 self-start p-20p">
      <div className=" flex flex-col ">
        <div className="border-b border-gray-muted w-full ">
          <h3 className="text-36 leading-44p text-dark-gray font-OB ">
            Featured - All{" "}
            <span className="text-16 text-gray-dark font-OR ">
              {" "}
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
                <div className="flex items-start gap-2 mb-2 flex-wrap ">
                  {selectedFilters.map((item, index) => (
                    <div key={index} className="px-16p py-8p bg-light ">
                      {item}{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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

export default SideNave;
