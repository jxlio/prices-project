import React, { useContext } from "react";
import "../Styles/indexStyles.css";
import { DarkMode } from "../context/darkMode";
import logo from "../assets/shoping logo.1je.png";
const Footer = () => {
  const [dark, toggleDarkMode] = useContext(DarkMode);
  return (
    <>
    <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src={logo}  alt="ComparaYa!" height={30} width={30}/>
        </div>
        <div class="footer-links">
          <ul class="footer-nav">
            <li><a href="#">Productos</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <ul class="social-icons">
            <li> <i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li> <i class="fab fa-instagram"> </i> </li>
            <li><i class="fab fa-linkedin-in"></i></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 ComparaYa! All rights reserved.</p>
      </div>
    </div>
  </footer>
  </>
  
  );
};

export default Footer;
