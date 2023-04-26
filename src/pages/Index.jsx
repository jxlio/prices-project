import React from "react";
import Navbar from "../Components/Navbar";
import "../pages/indexStyles.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="main-container">
      <Navbar />
      <section className="hero">
        <h1>ComparaYa!</h1>
        <p>¿Quieres saber los mejores precios de la ciudad de Sincelejo?</p>
       <Link to={"/products"}> <button>¡PruebaYa!  </button>  </Link>  
      </section>
      <Footer/>
    </div>
  );
};

export default Index;
