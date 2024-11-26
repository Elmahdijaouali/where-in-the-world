import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Header() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode").length > 0
      ? localStorage.getItem("mode")
      : "light"
  );
  // handle dark mode
  const handleDrakMode = () => {
    localStorage.setItem(
      "mode",
      localStorage.getItem("mode") === "dark" ? "light" : "dark"
    );

    readModeFromLocalstorage();
  };

  const readModeFromLocalstorage = () => {
    if (localStorage.getItem("mode") === "dark") {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    readModeFromLocalstorage();
  }, [mode]);

  return (
    <div className="lg:h-20 dark:bg-bgElementDrak text-black dark:text-white  h-24 w-full  shadow-md flex justify-between items-center px-5 md:px-16 lg:px-24">
      <h1 className="font-bold text-xl md:text-2xl">Where in the world?</h1>
      <button onClick={handleDrakMode} className="font-bold">
        {mode === "light" ? (
          <FontAwesomeIcon className="text-3xl mr-3" icon={faMoon} />
        ) : (
          <FontAwesomeIcon
            className="text-3xl mr-3 "
            style={{ color: "yellow" }}
            icon={faSun}
          />
        )}

        {/* {mode === "dark" ? "Light" : "Dark"} Mode */}
      </button>
    </div>
  );
}
