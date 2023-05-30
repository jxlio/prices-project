import React, { useContext, useState } from "react";
import logo from "../assets/shoping logo.1je.png";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { DarkMode } from "../context/darkMode";
import Tooltip from "@mui/material/tooltip";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFileAdd } from "react-icons/ai";
import { TbMeat, TbPaperBag } from "react-icons/tb";

const Sidebar = ({
  handleCates,
  handleInput,
  toggleCart,
  size,
  filtrarPrecios,
  filtrarPreciosD1,
  filtrarPreciosExito,
  filtrarD1,
  filtrarExito,
  filtrarOlimpica,
  orderD1,
}) => {
  const categorias = [
    {
      id: 0,
      nombre: "Todos",
      call: "",
      icon: <i class="fa-solid fa-list"></i>,
    },
    {
      id: 1,
      nombre: "Bebidas",
      call: "bebidas",
      icon: <i class="fa-solid fa-champagne-glasses"></i>,
    },
    {
      id: 2,
      nombre: "Alimentos Basicos",
      call: "Alimentos Basicos",
      icon: <i class="fa-solid fa-bowl-food"></i>,
    },
    {
      id: 4,
      nombre: "Lacteos",
      call: "Lacteos y huevos",
      icon: <i class="fa-solid fa-egg"></i>,
    },
    {
      id: 6,
      nombre: "Aseo personal",
      call: "Aseo personal",
      icon: <i class="fa-solid fa-hand-sparkles"></i>,
    },
    { id: 8, nombre: "Carnes", call: "Carnes", icon: <TbMeat /> },
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
          style={{
            backgroundColor: dark && "#303134",
            color: !dark && "black",
          }}
        />
      </div>

      <div className="cart">
        <span>
          {" "}
          <FiShoppingCart
            onClick={toggleCart}
            style={{ color: dark && "white" }}
            className="cart-icon"
          >
            {" "}
          </FiShoppingCart>{" "}
          <strong style={{ color: dark && "white" }}>{size} </strong>
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
    </div>
  );
};

export default Sidebar;
