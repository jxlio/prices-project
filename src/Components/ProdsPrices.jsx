import React, { useEffect } from "react";
import Product from "../Components/Product";
import LayoutProducts from "../Components/LayoutProducts";
import { useState } from "react";
import "../App.css";
import NoProductSelected from "./NoProductSelected";

/* const ProdsPrices = () => {
  useEffect(() => {
    fetch("http://localhost/products/index.php")
      .then((response) => response.json())
      .then((data) => 
        setProducto(data))
      .catch((error) => console.error(error));
  }, []); */

const ProdsPrices = ({ setProducto, producto }) => {
  useEffect(() => {
    fetch("http://localhost/products/index.php")
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setOriginalProduct(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [info, setInfo] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [resultado, setResultado] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [originalProduct, setOriginalProduct] = useState([]);

  const show = (prod) => {
    setInfo(true);
    selectProd(prod);
    setIsSelected(true);
  };

  const map = producto.map((prod) => {
    if (producto) {
      if (prod == selectedProduct) {
        return (
          <Product
            isSelected={isSelected}
            name={prod.name}
            price={prod.price}
            img={prod.img}
            key={prod.id}
            click={() => show(prod)}
          />
        );
      }
    }
    return (
      <Product
        name={prod.name}
        price={prod.price}
        img={prod.img}
        key={prod.id}
        click={() => show(prod)}
      />
    );
  });

  function selectProd(prod) {
    setSelectedProduct(prod);
  }

  function handleChange(event, data) {
    setResultado(event.target.value);
    if (event.target.value === "") {
      setProducto(originalProduct);
    } else {
      filtro(event.target.value);
    }
  }

  const filtro = (busqueda) => {
    var result = producto.filter((produ) =>
      produ.name.toString().toLowerCase().includes(busqueda.toLowerCase())
    );
    setProducto(result);
  };

  return (
    <>
      <div className="dad">
        <LayoutProducts change={handleChange} value={resultado}>
          {producto.length === 0 && "Este producto aun no esta disponible"}
          {map}
        </LayoutProducts>
        {info ? (
          <InfoPage selectedProduct={selectedProduct} />
        ) : (
          <NoProductSelected />
        )}
      </div>
    </>
  );
};

const InfoPage = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return null;
  }
  return (
    <div className="info">
      <div className="main-info">
        <h2>{selectedProduct.name}</h2>
        <div className="price-info">{`$${selectedProduct.price}`}</div>
        <img src={selectedProduct.img} alt="" />
        <span>{` Precio D1:  ${selectedProduct.precio_d1}`} </span>
        <span>{` Precio Ara:  ${selectedProduct.precio_ara}`} </span>
        <span>{` Cantidad:  ${selectedProduct.quantity}`} </span>
      </div>
    </div>
  );
};

export default ProdsPrices;
