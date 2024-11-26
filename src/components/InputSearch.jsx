import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function InputSearch({ valueInputSearch, setValueInputSearch }) {
  const handleInputSearch = (e) => {
    setValueInputSearch(e.target.value);
  };
  return (
    <div className="xl:w-[600px] lg:w-[500px] dark:text-white w-[90%] relative">
      <FontAwesomeIcon
        className=" absolute left-3 top-[33%] "
        icon={faMagnifyingGlass}
      />
      <input
        type="text"
        onChange={(e) => handleInputSearch(e)}
        value={valueInputSearch}
        className="px-4  dark:bg-bgElementDrak pl-10 py-2 outline-none rounded-md shadow-md lg:h-[5vh] h-[6vh]  w-full "
        placeholder="Search for a country..."
      />
    </div>
  );
}
