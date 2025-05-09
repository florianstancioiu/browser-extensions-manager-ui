import { useState } from "react";
import SvgLogo from "../images/logo.svg";
import SvgSun from "../images/icon-sun.svg?react";
import SvgMoon from "../images/icon-moon.svg?react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((val) => !val);
  };

  return (
    <header className="bg-white-bg text-primary flex justify-between items-center py-[7px] px-[10px] rounded-[10px] border-[1px] border-main-border mb-[50px]">
      <a href="#">
        <img src={SvgLogo} alt="Browser Extensions Manager UI Logo" />
      </a>
      {darkMode && (
        <div
          onClick={toggleDarkMode}
          className="w-[50px] h-[50px] bg-dark-mode-switch-bg grid place-items-center cursor-pointer rounded-[10px]"
        >
          <SvgSun />
        </div>
      )}
      {!darkMode && (
        <div
          onClick={toggleDarkMode}
          className="w-[50px] h-[50px] bg-dark-mode-switch-bg grid place-items-center cursor-pointer rounded-[10px]"
        >
          <SvgMoon />
        </div>
      )}
    </header>
  );
};

export default Header;
