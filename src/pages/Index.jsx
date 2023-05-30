import React, { useContext } from "react";
import "../Styles/indexStyles.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { DarkMode } from "../context/darkMode";
import { Typewriter } from "react-simple-typewriter";

const Index = () => {
  const [dark] = useContext(DarkMode);

  /* Pagina principal, full stilos, nada importante realmente*/

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
        <section className="container-somos">
          <div className="img-cont"></div>
          <div className="texto">
            <h2 className="h2">Somos Compara!</h2>
            <p className="p">
              Esta web fue creada por un grupo de estudiantes para facilitar el
              acceso a las compras en toda la region del Caribe sucreño{" "}
            </p>
          </div>
        </section>
      </section>

      <section
        className="somos-compara"
        style={{ backgroundColor: dark ? "#202124" : "white" }}
      >
        <section className="container-somos">
          <div className="texto">
            <h2 className="h2">¿Como Funcionamos?</h2>
            <p className="p">
              Esta web fue creada por un grupo de estudiantes para facilitar el
              acceso a las compras en toda la region del Caribe sucreño{" "}
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
