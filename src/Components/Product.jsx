import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Product = ({ img, name, click, isSelected}) => {

  const location = useLocation()

  return (
    <div className={`cont-pro ${isSelected ? 'selected' : ''}`} onClick={click}>
        <div className="contenido">
        <img src={img} alt="" />
        <p>{name} </p>
        </div>
    </div>
  );
};

export default Product;
