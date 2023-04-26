import React from "react";


const Product = ({ img, name, click}) => {
  return (
    <div className="cont-pro" onClick={click}>
        <div className="contenido">
        <img src={img} alt="" />
        <h5>{name} </h5>
        </div>
    </div>
  );
};

export default Product;
