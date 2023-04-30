import React, { useEffect } from "react";

const Product = ({ img, name, click, isSelected, modalFn }) => {
  return (
    <div
      className={`cont-pro ${isSelected ? "selected" : ""}`}
      onClick={modalFn}
    >
      <div className="contenido">
        <img src={img} alt="" />
        <h4> {name} </h4>
      </div>
    </div>
  );
};

export default Product;
