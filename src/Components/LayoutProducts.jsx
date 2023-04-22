import React from "react";
import { useState } from "react";

const LayoutProducts = ({ children, change, state}) => {
    
  return (
    
   <section className="lay-cont">
    
    <header className="top-sec">
        <h1>PRODUCTOS</h1>
        <div className="search-container">
        <i  className="fa-solid fa-magnifying-glass search"></i> 
        <input  type="search" placeholder="Buscar" onChange={change} value={state}/>

        </div>
    </header>

    <section className="products-container">
        {children}
    </section>

   </section>
  );
};

export default LayoutProducts;
