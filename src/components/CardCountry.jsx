import { NavLink } from "react-router-dom";

export default function CardCountry({
  imgCountry,
  nameCountry,
  propulation,
  region,
  capital,
  setNameCountry,
}) {
  return (
    <div
      onClick={() => setNameCountry(nameCountry)}
      className="dark:bg-bgElementDrak dark:text-white h-[65vh] lg:h-[50vh] rounded-lg 2xl:w-[22%] xl:w-[30%] lg:w-[44%] md-w-[70%] sm:w-[90%] mx-auto shadow-lg  bg-white"
    >
      <NavLink to={`country/${nameCountry}`}>
        <div className="h-[50%] w-full">
          <img
            src={imgCountry}
            className="w-full  h-full"
            alt="image country"
          />
        </div>
        <div className="p-5 md:p-10 h-[50%]">
          <h3 className="font-bold text-2xl mb-6 h-10 overflow-hidden">
            {nameCountry}
          </h3>

          <h4 className="text-lg">
            {" "}
            <span className="font-semibold ">Population:</span> {propulation}
          </h4>
          <h4 className="text-lg">
            <span className="font-semibold ">Region:</span> {region}
          </h4>
          <h4 className="text-lg">
            <span className="font-semibold ">Capital:</span>
            {capital}
          </h4>
        </div>
      </NavLink>
    </div>
  );
}
