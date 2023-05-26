import React, { useContext, useState } from "react";
import logo from "../assets/shoping logo.1je.png";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { DarkMode } from "../context/darkMode";
import Tooltip from "@mui/material/tooltip";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFileAdd } from "react-icons/ai";
import { TbMeat, TbPaperBag } from "react-icons/tb";

const Sidebar = ({ handleCates, handleInput, toggleCart, size }) => {
  const categorias = [
    { id: 0, nombre: "Todos", call: "", icon: <i class="fa-solid fa-list"></i>},
    { id: 1, nombre: "Bebidas", call: "bebidas", icon: <i class="fa-solid fa-champagne-glasses"></i> },
    { id: 2, nombre: "Alimentos Basicos", call: "Alimentos Basicos", icon: <i class="fa-solid fa-bowl-food"></i> },
    { id: 3, nombre: "Mecatos", call: "Mecatos", icon: <img src="https://static.thenounproject.com/png/1134821-200.png" width={20} height={18}/> },
    { id: 4, nombre: "Lacteos y huevos", call: "Lacteos y huevos", icon: <i class="fa-solid fa-egg"></i> },
    { id: 5, nombre: "Productos de limpieza", call: "Productos de limpieza", icon: <i class="fa-solid fa-spray-can-sparkles"></i> },
    { id: 6, nombre: "Aseo personal", call: "Aseo personal", icon: <i class="fa-solid fa-hand-sparkles"></i> },
    { id: 7, nombre: "Frutas", call: "Frutas", icon: <i class="fa-solid fa-apple-whole"></i> },
    { id: 8, nombre: "Carnes", call: "Carnes", icon: <TbMeat/> },
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
             <span> {cates.icon}</span>

              {cates.nombre}
            </span>
          );
        })}
      </div>

      <div className="home-container">
        {dark ? (
          <MdDarkMode
            className="darkMode"
            onClick={toggleDarkMode}
            style={{ color: dark && "white" }}
          />
        ) : (
          <MdOutlineDarkMode
            className="darkMode"
            onClick={toggleDarkMode}
            style={{ color: dark && "black" }}
          />
        )}

        <Tooltip title="Volver al inicio" arrow>
          <Link to={"/"} className="darkMode">
            <AiOutlineHome style={{ color: dark && "white" }} />
          </Link>
        </Tooltip>

        <Tooltip title="Agregar un producto" arrow>
          <Link to={"/add"} className="darkMode">
            <AiOutlineFileAdd style={{ color: dark && "white" }} />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
