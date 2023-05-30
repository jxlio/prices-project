import React, { useContext, useState } from "react";
import "../Styles/indexStyles.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { DarkMode } from "../context/darkMode";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/shoping logo.1je.png"

const Index = () => {
  const [dark] = useContext(DarkMode);
  const [imageClass, setImageClass] = useState('img-cont2');


  /* Pagina principal, full stilos, nada importante realmente*/

  const changeImage = (action) => {
    if (action === 'antes') {
      setImageClass('img-cont2');
    } else if (action === 'next') {
      setImageClass('img-cont3');
    } else if (action === 'otra') {
      setImageClass('img-cont4');
    }
  };

  return (
    <div className="container">
      <Navbar />
      <section
        className="hero"
        style={{ backgroundColor: dark ? "#202124" : "white" }}
      >
        <h1 className="h1">
          <Typewriter
            words={[
              "¿Quieres saber los mejores precios de la ciudad de Sincelejo?",
              "Entra y Compara!",
              "Ahorra!",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </h1>
        <p className="p" style={{ color: dark && "white" }}>
          {" "}
          Busca el producto que desees, compara sus precios y escoge el de mejor
          conveniencia!
        </p>

        <Link to={"/products"}>
          {" "}
          <button className="button"> ComparaYa!</button>{" "}
        </Link>
      </section>
      <section
        className="somos-compara"
        style={{ backgroundColor: dark ? "#202124" : "white" }}
      >
        <section className="container-somos" id="compara">
          <div className="img-cont"></div>
          <div className="texto">
            <h2 className="h2">Somos Compara!</h2>
            <p className="p">
              Esta web fue creada por un grupo de estudiantes para facilitar el
              acceso a las compras en la ciudad de Sincelejo!{" "}
            </p>
          </div>
        </section>
      </section>

      <section
      id="somos"
        className="somos-compara"
        style={{ backgroundColor: dark ? "#202124" : "white" }}
      >
        <section className="container-somos">
        <div className="img-cont2">
        <div className={imageClass}>
      <button className="slider-dots"  onClick={() => changeImage('antes')}></button>
      <button className="slider-dots"  onClick={() => changeImage('next')}></button>
      <button className="slider-dots"  onClick={() => changeImage('otra')}></button>
    </div>
        </div>
          <div className="texto">
            <h2 className="h2">¿Como Funcionamos?</h2>
            <p className="p">
              Con ayuda del webscraping somos capaces de obtener informacion sobre productos en distintas distribuidoras
              para luego agregar esa informacion en nuestra base de datos utilizando operaciones SQL, luego renderizamos los productos y mostramos similares con ayuda del framework React JS para la{" "}
            </p>
          </div>
        </section>
      </section>
      <section
        className="distribuidoras"
        style={{ backgroundColor: dark ? "#202124" : "white" }}
      >
        <div className="distri-container">
          <h2 className="h2">Distribuidoras</h2>
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
      <Footer />
    </div>
  );
};

export default Index;
