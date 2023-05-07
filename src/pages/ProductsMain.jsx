import Product from "../Components/Product";
import { useState, useEffect } from "react";
import "../Styles/App.css";
import { Link } from "react-router-dom";
import InfoModal from "../Components/InfoModal";
import InfoPage from "../Components/InfoPage";

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
          price={prod.price}
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
        price={prod.price}
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
        <div className="home-container">
          <Link to={"/"} className="home-button">
            <i className="fas fa-home"></i>
          </Link>

          <Link to={"/add"} className="home-button">
            <i className="fa-solid fa-file-circle-plus"></i>
          </Link>

          <div className="cates">
            <span>Categorias </span>
            <select onChange={(event) => handleCategory(event.target.value)}>
              <option value="">Todos</option>
              <option value="bebida">Bebidas</option>
              <option value="abarrote">Abarrotes</option>
              <option value="carne">Carnes</option>
              <option value="mecato">Mecatos</option>
            </select>
          </div>
        </div>

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
