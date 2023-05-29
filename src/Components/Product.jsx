import { TbShoppingCartPlus } from "react-icons/tb";
import { BsCartCheckFill } from "react-icons/bs";
import Tooltip from "@mui/material/tooltip";
import { useContext } from "react";
import { DarkMode } from "../context/darkMode";
const Product = ({
  img,
  name,
  isSelected,
  modalFn,
  del,
  precio,
  addTo,
  cart,
  precio_olim,
  precio_exito
}) => {
  const [dark, setDark, toggleDarkMode] = useContext(DarkMode);
  return (
    <div
      className={`cont-pro ${isSelected ? "selected" : ""}`}
      style={{ backgroundColor: dark && "#303134 " }}
    >
      <button className="delete" onClick={del}>
        <i className="fa-solid fa-trash-can"></i>
      </button>

      {cart ? (
        <Tooltip title="Producto ya en el carrito" arrow>
          <button className="addToCart inCart" onClick={addTo}>
            <BsCartCheckFill />{" "}
          </button>
        </Tooltip>
      ) : (
        <Tooltip title="Agregar producto al carrito" arrow>
          <button className="addToCart " onClick={addTo}>
            <TbShoppingCartPlus />
          </button>
        </Tooltip>
      )}

      <div className="contenido" onClick={modalFn}>
        <img loading="lazy" className="img-main" src={img} alt="" />
        <h4 style={{ color: !dark && "black" }}> {name} </h4>
        <p className="mas-barato">{precio}</p>
        <p className="mas-barato">{precio_exito}</p>
        <p className="mas-barato">{precio_olim}</p>
      </div>
    </div>
  );
};

export default Product;
