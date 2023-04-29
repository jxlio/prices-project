import React from "react";
import { Link } from "react-router-dom";

const LayoutProducts = ({ children, change, state }) => {
  return (
    <>
      <section className="lay-cont">
        <div>
          <Link to={"/"}>
            {" "}
            <i className="fa-solid fa-house back"></i>{" "}
          </Link>
        </div>

        <header className="top-sec">
          <h1>PRODUCTOS</h1>
          <div className="search-container">
            <i className="fa-solid fa-magnifying-glass search"></i>
            <input
              type="search"
              placeholder="Buscar"
              onChange={change}
              value={state}
            />
          </div>
        </header>

        <section className="products-container">{children}</section>
      </section>
    </>
  );
};

export default LayoutProducts;
