import React from "react";
import "../pages/indexStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="nav-container">
      <nav className="nav">
        <div className="logo">
          <Link href="">Logo</Link>
        </div>
        <Link href="" className="link">
          Sobre nosotros
        </Link>
        <Link href="" className="link">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
