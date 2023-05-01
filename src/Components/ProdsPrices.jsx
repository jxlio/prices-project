import React, { useEffect } from "react";
import Product from "../Components/Product";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import InfoModal from "../Components/InfoModal";

const ProdsPrices = ({ setProducto, producto }) => {
  useEffect(() => {
    fetch("http://localhost/products/index.php")
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setOriginalProduct(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [selectedProduct, setSelectedProduct] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (prod) => {
    setOpenModal(true);
    selectProd(prod);
    setIsSelected(true);
    console.log(openModal);
  };

  const CloseModal = () => {
    setOpenModal(false);
    setIsSelected(false);
  };

  const map = producto.map((prod) => {
    if (prod == selectedProduct) {
      return (
        <Product
          isSelected={isSelected}
          name={prod.name}
          price={prod.price}
          img={prod.img1}
          key={prod.id}
          modalFn={() => handleModal(prod)}
        />
      );
    }

    return (
      <Product
        name={prod.name}
        price={prod.price}
        img={prod.img1}
        key={prod.id}
        modalFn={() => handleModal(prod)}
      />
    );
  });

  function selectProd(prod) {
    setSelectedProduct(prod);
  }

  function handleChange(event) {
    const resultado = event.target.value.trim().toLowerCase();
    if (resultado === "") {
      setProducto(originalProduct);
    } else {
      filtro(resultado);
    }
  }

  const filtro = (busqueda) => {
    const result = originalProduct.filter((produ) =>
      produ.name.toString().toLowerCase().includes(busqueda.toLowerCase())
    );
    setProducto(result);
  };

  return (
    <>
      <div className="main">
        <div className="home-container">
          <Link to={"/"} className="home-button">
            <i className="fas fa-home"></i>
          </Link>

          <Link to={"/add"} className="home-button">
            <i class="fa-solid fa-file-circle-plus"></i>
          </Link>
        </div>

        <div className="input-container">
          <input
            type="search"
            placeholder="Busca un producto..."
            onChange={handleChange}
          />
        </div>

        {producto.length === 0 && (
          <h2 className="no-ava"> Este producto aun no esta disponible</h2>
        )}
        <section className="products-container ">{map}</section>
        {openModal && (
          <InfoModal close={CloseModal}>
            {" "}
            <InfoPage selectedProduct={selectedProduct} />{" "}
          </InfoModal>
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
      <h2>{selectedProduct.name}</h2>
      <p>{`${selectedProduct.description}`}</p>
      <div className="price-info">{`Mas barato: $ ${
        selectedProduct.precio_d1 > selectedProduct.precio_ara
          ? selectedProduct.precio_ara
          : selectedProduct.precio_d1
      }`}</div>
      <section className="sec-images">
        <img src={selectedProduct.img1} alt="" />
      </section>

      <span>{` Precio D1:  ${selectedProduct.precio_d1}`} </span>
      <span>{` Precio Ara:  ${selectedProduct.precio_ara}`} </span>
      <span>{` Cantidad:  ${selectedProduct.quantity}`} </span>
    </div>
  );
};

export default ProdsPrices;
