import Product from "../Components/Product";
import { useState, useEffect } from "react";
import "../Styles/App.css";
import { Link } from "react-router-dom";
import InfoModal from "../Components/InfoModal";
import InfoPage from "../Components/InfoPage";
import ProductsHeader from "../Components/ProductsHeader";

const ProdsPrices = ({ setProducto, producto }) => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [noProduct, setNoProduct] = useState(false);

  useEffect(() => {
    fetch("http://localhost/products/index.php")
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setOriginalProduct(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost/products/index.php?id=${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Item deleted:", data);
        setProducto(producto.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  const handleCategory = (categoria) => {
    fetch(`http://localhost/products/index.php?category=${categoria}`)
      .then((response) => response.json())
      .then((categorico) => {
        if (categorico.length === 0) {
          setNoProduct(true);
          setProducto([]);
        } else {
          setNoProduct(false);
          setProducto(categorico);
          setOriginalProduct(categorico);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleModal = (prod) => {
    setOpenModal(true);
    selectProd(prod);
    setIsSelected(true);
  };

  const CloseModal = () => {
    setOpenModal(false);
    setIsSelected(false);
  };

  const selectProd = (prod) => {
    setSelectedProduct(prod);
  };

  const handleChange = (event) => {
    const resultado = event.target.value.trim().toLowerCase();
    if (resultado === "") {
      setProducto(originalProduct);
    } else {
      filtro(resultado);
    }
  };

  const filtro = (busqueda) => {
    const result = originalProduct.filter(
      (produ) =>
        produ.name
          .toString()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(busqueda.toLowerCase()) ||
        produ.precio_ara
          .toString()
          .toLowerCase()
          .includes(busqueda.toLowerCase()) ||
        produ.precio_d1
          .toString()
          .toLowerCase()
          .includes(busqueda.toLowerCase())
    );
    setProducto(result);
  };

  const map = producto.map((prod) => {
    if (prod == selectedProduct) {
      return (
        <Product
          isSelected={isSelected}
          name={prod.name}
          precio={`Más barato: $ ${
            prod.precio_d1 > prod.precio_ara
              ? prod.precio_ara
              : prod.precio_d1
          }`}
          img={prod.img1}
          key={prod.id}
          modalFn={() => handleModal(prod)}
          del={() => handleDelete(prod.id)}
        />
      );
    }

    return (
      <Product
        name={prod.name}
        precio={`Mas barato: $ ${
          prod.precio_d1 > prod.precio_ara
            ? prod.precio_ara
            : prod.precio_d1
        }`}
        img={prod.img1}
        key={prod.id}
        modalFn={() => handleModal(prod)}
        del={() => handleDelete(prod.id)}
      />
    );
  });

  return (
    <>
      <div className="main">
        <ProductsHeader handleCategory={handleCategory} />
        <div className="input-container">
          <input
            type="search"
            placeholder="Busca un producto..."
            onChange={handleChange}
          />
        </div>

        {noProduct && <h2 className="no-ava">Categoria vacia</h2>}

        <section className="products-container "> {map}</section>
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

export default ProdsPrices;
