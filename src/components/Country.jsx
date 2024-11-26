import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Country({ nameCountry }) {
  const [infoCountry, setInfoCountry] = useState({});
  useEffect(() => {
    fetch("../../data.json")
      .then((res) => res.json())
      .then((data) => JSON.parse(JSON.stringify(data)))
      .then((dataCountries) => {
        const country = dataCountries.find(
          (country) => country.name === nameCountry
        );
        setInfoCountry(country);
      });
  }, []);

  return (
    <div className="min-h-[91.5vh] h-fit bg-gray-100 w-full xl:px-24 lg:px-1 lg:py-14 p-10 dark:bg-bgDark dark:text-white">
      <button className=" shadow-lg  rounded-sm py-2 lg:ml-14 px-3 w-32 mb-14 dark:bg-bgElementDrak bg-white">
        <NavLink to={"/"}>
          <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
          Back
        </NavLink>
      </button>
      <div className="w-full flex lg:flex-row flex-col">
        <div className="lg:w-6/12 mb-10 lg:mb-0 w-full lg:h-[50vh]">
          <div className="w-full lg:h-[50vh] xl:px-14 lg:px-10 h-[30vh]">
            <img
              className="w-full h-full"
              src={infoCountry.flags?.png}
              alt="image country"
            />
          </div>
        </div>
        <div className="lg:w-6/12 w-full flex flex-col justify-center lg:h-[50vh] xl:p-14 lg:px-10">
          <h1 className="font-bold text-3xl mb-10 ">{infoCountry.name}</h1>
          <div className="flex justify-between gap-5 lg:flex-row flex-col">
            <div className="lg:w-[50%]">
              <h4 className="text-lg my-1">
                <span className="font-semibold mr-3 ">Native Name:</span>
                {infoCountry.nativeName}
              </h4>
              <h4 className="text-lg my-1">
                <span className="font-semibold mr-3">Population:</span>
                {infoCountry.population}
              </h4>
              <h4 className="text-lg my-1">
                <span className="font-semibold mr-3">Region:</span>
                {infoCountry.region}
              </h4>
              <h4 className="text-lg my-1">
                <span className="font-semibold mr-3">Sub Region:</span>
                {infoCountry.subregion}
              </h4>
              <h4 className="text-lg my-1">
                <span className="font-semibold mr-3">Capital:</span>
                {infoCountry.capital}
              </h4>
            </div>
            <div className="lg:w-[50%] ">
              <h4 className="text-lg my-1">
                <span className="font-semibold mr-3">Top Level Domain:</span>
                {infoCountry.topLevelDomain}
              </h4>
              <h4 className="text-lg my-1">
                <span className="font-semibold mr-3">Currencies:</span>
                {infoCountry.currencies?.map(
                  (currencie) => currencie.code + " "
                )}
              </h4>
              <h4 className="text-lg my-1">
                <span className="font-semibold mr-3">Languages:</span>
                {infoCountry.languages?.map((lang) => " " + lang.name + " ")}
              </h4>
            </div>
          </div>
          <div className="mt-6">
            <p className="w-full flex gap-2 flex-wrap">
              <span className="text-xl font-bold lg:inline-block w-full lg:w-fit mr-3">
                Border countries:
              </span>
              {infoCountry.borders?.map((border, index) => (
                <span
                  key={index}
                  className=" shadow-md dark:bg-bgElementDrak bg-white py-1.5 lg:mx-3 rounded-sm my-5 lg:my-0  px-12"
                >
                  {border}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
