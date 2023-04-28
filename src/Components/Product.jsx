import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Product = ({ img, name, click, isSelected}) => {

  const location = useLocation()

  return (
    <div className={`cont-pro ${isSelected ? 'selected' : ''}`} onClick={click}>
        <div className="contenido">
        <img src={img} alt="" />
        <h5>{name} </h5>
        </div>
    </div>
  );
};

export default Product;
