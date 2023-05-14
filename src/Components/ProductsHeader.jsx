import React from "react";
import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";

const ProductsHeader = ({ handleCategory, size, toggleCart}) => {
  return (
    <div className="home-container">
      <Link to={"/"} className="home-button">
        <i className="fas fa-home"></i>
      </Link>

      <Link to={"/add"} className="home-button">
        <i className="fa-solid fa-file-circle-plus"></i>
      </Link>

    

      <div className="cates">
      <div className="cart">
        <span onClick={toggleCart}>
          {" "}
          <TbShoppingCartPlus />{" "}
        </span>
        <span>{size} </span>
      </div>
        <h4>Categorias</h4>
        <select onChange={(event) => handleCategory(event.target.value)}>
          <option value="">Todos</option>
          <option value="bebida">Bebidas</option>
          <option value="abarrote">Abarrotes</option>
          <option value="carne">Carnes</option>
          <option value="mecato">Mecatos</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
