import React, { useContext } from "react";
import "../Styles/indexStyles.css";
import { DarkMode } from "../context/darkMode";
const Footer = () => {
  const [dark, toggleDarkMode] = useContext(DarkMode);
  return (
    <footer>
      <div
        className="footer-container"
        style={{
          backgroundColor: dark ? "#202124" : "white",
          color: dark ? "white" : "black",
        }}
      >
        <p>&copy; 2023 ComparaYa! All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
