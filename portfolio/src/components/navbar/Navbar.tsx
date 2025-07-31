import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <nav id="home" className="bg-secondary dark:bg-gray-900">
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <h1 className="text-3xl md:text-5xl font-bold text-primary flex justify-center items-center ">
            T.
          </h1>
          <div className="block">
            <ul className="flex items-center gap-4 dark:text-white">
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile Responsive Menu */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
