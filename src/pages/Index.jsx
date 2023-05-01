import React from "react";
import Navbar from "./Navbar";
import "../pages/indexStyles.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="main-container">
      <Navbar />
      <section className="hero">
        <section className="info-cont">
          <h1>ComparaYa!</h1>
          <p>¡¿Quieres saber los mejores precios de la ciudad de Sincelejo?!</p>
          <Link to={"/products"}>
            {" "}
            <button>¡PruebaYa! </button>{" "}
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Index;
