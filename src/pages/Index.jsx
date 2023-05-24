import React from "react";

import "../Styles/indexStyles.css";

import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CartaDistri from "../Components/cartaDistri";
import Footer from "../Components/Footer";

const Index = () => {
  return (
    <div className="container">
      <Navbar/>
      <section className="hero">
          <h1>
            ¿Quieres saber los mejores precios de la ciudad de Sincelejo?
          </h1>
          <p>Busca el producto que desees, compara sus precios y escoge el de mejor conveniencia!</p>
          <button>ComparaYa!</button>
      </section>
      <section className="somos-compara">
        <section className="container-somos">
        <div className="img-cont"></div> 
        <div className="texto">

        <h2>Somos Compara!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat deleniti amet accusantium minus at asperiores dolor quo soluta cupiditate, nulla architecto doloribus. Sint at sequi corrupti consectetur consequatur qui maiores. </p>
        </div>
        
      </section>
      </section>
      <section className="distribuidoras">
        <div className="distri-container">
        <h2>Distribuidoras</h2>
        <div className="dis">
        <div className="carta">
          <h3>D1</h3>
          
         
        </div>
        <div className="carta">
            <h3>Olimpica</h3>
          
          
        </div>
        <div className="carta">
          <h3>Exito</h3>
         
          
        </div>


        </div>

       </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Index;
