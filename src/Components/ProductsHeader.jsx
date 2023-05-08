import React from "react";
import { Link } from "react-router-dom";

const ProductsHeader = ({ handleCategory }) => {
  return (
    <div className="home-container">
      <Link to={"/"} className="home-button">
        <i className="fas fa-home"></i>
      </Link>

      <Link to={"/add"} className="home-button">
        <i className="fa-solid fa-file-circle-plus"></i>
      </Link>

      <div className="cates">
        <span>Categorias </span>
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
