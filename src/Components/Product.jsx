import { TbShoppingCartPlus } from "react-icons/tb";
import { BsCartCheckFill } from "react-icons/bs";
import Tooltip from "@mui/material/tooltip";
const Product = ({
  img,
  name,
  isSelected,
  modalFn,
  del,
  precio,
  addTo,
  cart,
}) => {
  return (
    <div className={`cont-pro ${isSelected ? "selected" : ""}`}>
      <button className="delete" onClick={del}>
        <i className="fa-solid fa-trash-can"></i>
      </button>

      {cart ? (
        <Tooltip title="Producto ya en el carrito" arrow >
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
        <img src={img} alt="" />
        <h4> {name} </h4>
        <span className="mas-barato">{precio}</span>
      </div>
    </div>
  );
};

export default Product;
