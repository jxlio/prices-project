import React, { useContext, useState } from "react";
import logo from "../assets/shoping logo.1je.png";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { DarkMode } from "../context/darkMode";
import Tooltip from "@mui/material/tooltip";
import { Link } from "react-router-dom";
import {AiOutlineHome, AiOutlineFileAdd} from "react-icons/ai"


const Sidebar = ({ handleCates, handleInput, toggleCart, size }) => {
  const categorias = [
    { id: 0, nombre: "Todos", call: "" },
    { id: 1, nombre: "Bebidas", call: "bebida" },
    { id: 2, nombre: "Alimentos Basicos", call: "abasicos" },
    { id: 3, nombre: "Mecatos", call: "mecato" },
    { id: 4, nombre: "Lacteos y huevos", call: "lacteos" },
    { id: 5, nombre: "Productos de limpieza", call: "aseo" },
    { id: 6, nombre: "Aseo personal", call: "cuidadoperso" },
    { id: 7, nombre: "Frutas", call: "fruta" },
    { id: 8, nombre: "Carnes", call: "Carne" },
  ];

  const [dark, setDark, toggleDarkMode] = useContext(DarkMode);

  const [selectedCate, setSelectedCate] = useState();

  const handleCatesClick = (category) => {
    handleCates(category.call);
    setSelectedCate(category.id);
  };

  return (
    <div
      className="sidebar"
      style={{ backgroundColor: dark && "#202124", color: dark && "white" }}
    >
      <img src={logo} alt="" height={90} />
      <div className="input-container">
        <input
          type="search"
          placeholder="Busca un producto"
          onChange={handleInput}
          style={{ backgroundColor: dark && "#303134" }}
        />
      </div>

      <div className="cart">
        <span onClick={toggleCart}>
          {" "}
          <FiShoppingCart
            style={{ color: dark && "white" }}
            className="cart-icon"
          >
            {" "}
          </FiShoppingCart>{" "}
          <strong style={{ color: dark && "white" }}>{size} </strong>
        </span>
      </div>
      <h2 style={{ color: dark && "white" }}>Categorias</h2>
      <div className="cates" style={{ color: dark && "white" }}>
        {categorias.map((cates) => {
          return (
            <span
              key={cates.id}
              onClick={() => handleCatesClick(cates)}
              className={cates.id === selectedCate ? "selectedCategory" : ""}
            >
              {cates.nombre}
            </span>
          );
        })}
      </div>


      <div className="home-container">

        
      {dark ? (
        <MdDarkMode className="darkMode" onClick={toggleDarkMode} />
      ) : (
        <MdOutlineDarkMode className="darkMode" onClick={toggleDarkMode} />
      )}

        <Tooltip title="Volver al inicio" arrow>
          <Link to={"/"} className="darkMode">
           <AiOutlineHome/>
          </Link>
        </Tooltip>

        <Tooltip title="Agregar un producto" arrow>
          <Link to={"/add"} className="darkMode">
          <AiOutlineFileAdd/>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
