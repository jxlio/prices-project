import React from "react";


const Product = ({ img, name, price, click}) => {
  return (
    <div className="cont-pro" onClick={click}>
        <div className="contenido">
        <img src={img} alt="" />
        <h4>{name} </h4>
        </div>
    </div>
  );
};

export default Product;
