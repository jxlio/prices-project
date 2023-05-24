import React from "react";
import { Link } from "react-router-dom";
import "../Styles/indexStyles.css";
import logo from "../assets/shoping logo.1je.png"

const Navbar = () => {
  return (

      <header>
        <div className="container-nav">
          <img className="logo" src={logo} alt="" height={100} />
          <nav>
            <Link to={"#distribuidoras"}>Sobre nosotros</Link>
            <Link>Como funcionamos</Link>
          </nav>
        </div>
      </header>
  
  );
};

export default Navbar;
