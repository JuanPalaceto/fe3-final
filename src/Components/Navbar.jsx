import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import Button from "./Button";
import { useContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  //const isDarkMode = state.theme === "dark";

  return (
    <nav className="flex items-center justify-between p-4 px-10 bg-zinc-50 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 shadow-md">
      <div className="flex space-x-10">
        <Link to={routes.Home} className="hover:text-blue-500">
          Home
        </Link>
        <Link to={routes.Contact} className="hover:text-blue-500">
          Contact
        </Link>
        <Link to={routes.Favs} className="hover:text-blue-500">
          Favs
        </Link>
      </div>
      <Button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      className="px-4 py-2 bg-blue-500 dark:bg-gray-300 text-white dark:text-gray-800 rounded hover:bg-blue-800 dark:hover:bg-blue-300">
        Change theme
      {/* className="px-4 py-2 text-xl"> */}
      {/*{isDarkMode ? "☀️" : "🌙"}  Mostramos un ícono dependiendo del tema */}
    </Button>
    </nav>
  );
};

export default Navbar;
