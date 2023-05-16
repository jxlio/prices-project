import React from "react";
import { Link } from "react-router-dom";
import "../Styles/indexStyles.css";
import logo from "../assets/shoping logo.1je.png"

const Navbar = () => {
  return (
    <div className="nav-container">
      <header className="nav-container">
        <nav className="nav">
          <Link className="logo" to={"/products"}>
            <img src={logo} alt="" height={90}  width={160}/>
          </Link>
          <Link>Sobre Nosotros</Link>
          <Link>Contacto</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
