import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/indexStyles.css";
import logo from "../assets/shoping logo.1je.png";
import { MdDarkMode } from "react-icons/md";
import { DarkMode, DarkModeFunction } from "../context/darkMode";
import { MdOutlineDarkMode } from "react-icons/md";
import { color } from "@mui/system";
const Navbar = () => {
  const [dark, setDark, toggleDarkMode] = useContext(DarkMode);

  return (
    <header>
      <div
        className="container-nav"
        style={{
          backgroundColor: dark ? "#202124" : "#ffff",
          color: dark && "white",
        }}
      >
        <img className="logoIndex" src={logo} alt="" height={120} width={210} />
        <nav>
          {dark ? (
            <MdDarkMode
              className="darkMode"
              onClick={toggleDarkMode}
              style={{ color: dark && "white" }}
            />
          ) : (
            <MdOutlineDarkMode
              className="darkMode"
              onClick={toggleDarkMode}
              style={{ color: dark && "black" }}
            />
          )}

          <Link to={"#distribuidoras"}>Sobre nosotros</Link>
          <Link>Como funcionamos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
