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
  precio_exito,
  formattedPriceD1,
  formattedPriceExito,
  formattedPriceOlim,
  
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
        {!isNaN(precio) && precio > 0 && (
  <p className="mas-barato">{formattedPriceD1}</p>
)}
{!isNaN(precio_exito) && precio_exito > 0 && (
  <p className="mas-barato">{formattedPriceExito}</p>
)}
{!isNaN(precio_olim) && precio_olim > 0 && (
  <p className="mas-barato">{formattedPriceOlim}</p>
)}

      </div>
    </div>
  );
};

export default Product;
