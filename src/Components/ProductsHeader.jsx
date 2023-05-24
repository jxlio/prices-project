import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/shoping logo.1je.png";
import Tooltip from "@mui/material/tooltip";
import {MdOutlineDarkMode} from "react-icons/md"
import {MdDarkMode} from "react-icons/md"
import { DarkMode } from "../context/darkMode";


const ProductsHeader = ({ handleCategory, size, toggleCart }) => {
  const [dark, setDark, toggleDarkMode] = useContext(DarkMode)

  return (
    <div className="home-container">
      <Tooltip title="Volver al inicio" arrow>
        <Link to={"/"} className="home-button">
          <i className="fas fa-home"></i>
        </Link>
      </Tooltip>

      <Tooltip title="Agregar un producto" arrow>
        <Link to={"/add"} className="home-button">
          <i className="fa-solid fa-file-circle-plus"></i>
        </Link>
      </Tooltip>

      <img className="logo" src={logo} alt="" width={200} height={80} />

      <div className="cates">
        {dark ? (
          <MdDarkMode className="darkMode" onClick={toggleDarkMode} />
        ) : (
          <MdOutlineDarkMode className="darkMode" onClick={toggleDarkMode} />
        )}

        <Tooltip title="Carrito de compras" arrow>
          <div className="cart">
            <span onClick={toggleCart}>
              {" "}
              <FiShoppingCart className="cart-icon" />{" "}
            </span>
            <strong>{size} </strong>
          </div>
        </Tooltip>
        <h4>Categorias</h4>
        <select onChange={(event) => handleCategory(event.target.value)}>
          <option value="">Todos</option>
          <option value="bebida">Bebidas</option>
          <option value="abasicos">Alimentos Basicos</option>
          <option value="mecato">Mecatos</option>
          <option value="lacteos">Lacteos y huevos</option>
          <option value="aseo">Productos de limpieza</option>
          <option value="cuidadoperso">Aseo personal</option>
          <option value="fruta">Frutas</option>
          <option value="carne">Carnes y pescados</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
