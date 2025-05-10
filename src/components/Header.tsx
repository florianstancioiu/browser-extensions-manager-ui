import { useEffect, useState } from "react";
import SvgLogo from "../images/logo.svg?react";
import SvgSun from "../images/icon-sun.svg?react";
import SvgMoon from "../images/icon-moon.svg?react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((val) => !val);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fm:mb-[60px] bg-white-bg dark:bg-dark-bg dark:text-dark-primary dark:border-main-border-dark-header text-primary flex justify-between items-center py-[7px] px-[10px] rounded-[10px] border-[1px] border-main-border mb-[50px]">
      <a href="#">
        {darkMode && <SvgLogo fill="#fff" />}
        {!darkMode && <SvgLogo fill="#091540" />}
      </a>
      <div
        onClick={toggleDarkMode}
        className="dark:hover:bg-hover-dark-bg dark:bg-dark-mode-switch-bg-dark w-[50px] h-[50px] bg-dark-mode-switch-bg grid place-items-center cursor-pointer rounded-[10px]"
      >
        {darkMode && <SvgSun />}
        {!darkMode && <SvgMoon />}
      </div>
    </header>
  );
};

export default Header;
