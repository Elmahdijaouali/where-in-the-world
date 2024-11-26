import { useEffect, useState } from "react";
import CardCountry from "./CardCountry";
import FilterByRegion from "./FilterByRegion";
import InputSearch from "./InputSearch";

export default function Main({ setNameCountry }) {
  const [countries, setCountries] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [valueInputSearch, setValueInputSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    fetch("/where-in-the-world/data.json")
      .then((res) => res.json())
      .then((data) => JSON.parse(JSON.stringify(data)))
      .then((dataCountries) => {
        setCountries(dataCountries);
        setDataFilter(dataCountries);
      });
  }, []);

  // handle search by name country
  useEffect(() => {
    if (valueInputSearch.trim().length === 0) {
      setDataFilter(countries);
    } else {
      let searchData = countries.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(valueInputSearch.toLowerCase());
      });
      setDataFilter(searchData);
    }
  }, [valueInputSearch]);

  //  handle filter by region
  useEffect(() => {
    if (regionFilter.trim() === "") {
      setDataFilter(countries);
    } else {
      const countriesOfRegion = countries.filter(
        (country) => country.region === regionFilter
      );

      setDataFilter(countriesOfRegion);
    }
  }, [regionFilter]);

  return (
    <div className=" dark:bg-bgDark w-full  py-10 h-fit min-h-[91.6vh]   dark:bg-bgDrak">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start  lg:px-28 px-5  ">
        <InputSearch
          valueInputSearch={valueInputSearch}
          setValueInputSearch={setValueInputSearch}
        />
        <FilterByRegion
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
        />
      </div>
      <div className="lg:px-28 px-15 py-10 flex flex-wrap gap-10 justify-between">
        {dataFilter.map((country, index) => (
          <CardCountry
            key={index}
            imgCountry={country.flags.png}
            nameCountry={country.name}
            propulation={country.population}
            region={country.region}
            capital={country.capital}
            setNameCountry={setNameCountry}
          />
        ))}
      </div>
    </div>
  );
}
