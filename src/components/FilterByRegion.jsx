import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function FilterByRegion({ regionFilter, setRegionFilter }) {
  const [dropDown, setDropDown] = useState(false);

  const regions = [
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Americas",
    "Polar",
    "Antarctic Ocean",
    "Antarctic",
  ];

  // handle filter by region
  const handleFilterByRegin = (region) => {
    setRegionFilter(region);
    setDropDown(false);
  };
  return (
    <div className="relative  xl:w-[18%]  lg:w-[30%] bg-white   w-[60%] mt-4 dark:text-white  dark:bg-bgElementDrak ">
      <div
        className=" py-2  shadow-md  cursor-pointer text-xl  lg:h-[5vh] h-[6vh] flex items-center justify-between px-6 outline-none"
        onClick={() => setDropDown(!dropDown)}
      >
        {regionFilter.length === 0 ? "Filter by Region" : regionFilter}
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {dropDown && (
        <div className=" absolute rounded-md shadow-md  w-full mt-2 dark:bg-bgElementDrak  bg-white top-[100%]">
          {regionFilter.length !== 0 ? (
            <option
              onClick={() => handleFilterByRegin("")}
              className="p-2  text-lg pl-6 hover:bg-gray-200 cursor-pointer"
            >
              All Region
            </option>
          ) : (
            ""
          )}
          {regions.map((r, ind) => (
            <option
              className="p-2  text-lg pl-6 hover:bg-gray-200 cursor-pointer"
              key={ind}
              onClick={() => handleFilterByRegin(r)}
            >
              {r}
            </option>
          ))}
        </div>
      )}
    </div>
  );
}
