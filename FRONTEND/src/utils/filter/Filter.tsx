import { useState } from "react";
import { ArrowDown } from "../../images";

interface IFilter {
  data: string[];
}

const Filter = ({ data }: IFilter) => {
  const [filterData, setFilterData] = useState<string[]>(data);

  return (
    // flex items-start justify-end lg:px-24p mb-16p

    <div className="w-[178px] lg:w-50 aspect-178/56 lg:aspect-200/56 flex items-center relative ">
      <select
        name=""
        id=""
        className={`w-full h-full appearance-none  border border-gray-muted rounded-lg px-15p  `}
      >
        {filterData.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <img
        src={ArrowDown}
        alt=""
        className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none "
      />
    </div>
  );
};

export default Filter;
