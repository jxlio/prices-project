import Product from "../Components/Product";
import { useState, useEffect, useContext } from "react";
import "../Styles/Main.css";
import InfoModal from "../Components/InfoModal";
import InfoPage from "../Components/InfoPage";
import Cart from "../Components/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { DarkMode } from "../context/darkMode";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

const ProdsPrices = ({ setProducto, producto }) => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [noProduct, setNoProduct] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [dark, setDark, toggleDarkMode] = useContext(DarkMode);

  /* UseEffect para cargar todos los productos de la BD una vez la pagina carga */

  useEffect(() => {
    fetch("http://localhost/products/index.php")
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setOriginalProduct(data);
      });
  }, []);

  /* Funcion para realizar metodo delete, y asi borrar un producto pasando su id en el fetch */
  const handleDelete = (id) => {
    fetch(`http://localhost/products/index.php?id=${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Item deleted:", data);
        setProducto(producto.filter((item) => item.id !== id));
      });
    toast
      .error("Producto eliminado", {
        position: "top-center",
        autoClose: 400,
        theme: "colored",
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  /* Funcion para filtrar los productos por categorias, trayendo los productos de la BD que tengan la categoria pasada en el fetch  */

  const handleCategory = (categoria) => {
    fetch(`http://localhost/products/index.php?category=${categoria}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setNoProduct(true);
          setProducto([]);
          setOriginalProduct([]);
        } else {
          setNoProduct(false);
          setProducto(data);
          setOriginalProduct(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /* Aqui realizo se realiza el filtro de busqueda, tiene un funcionamiento muy sencillo, se pasa lo que se escriba en el input a una variable
  luego se hace un filter a los productos que su nombre contenga eso escrito en el filter (se puede filtrar por precios tambien pero no es tan efectivo xd) */

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
        produ.precio_d1
          .toString()
          .toLowerCase()
          .includes(busqueda.toLowerCase())
    );
    setProducto(result);
  };

  /* Funcion para carrito de compras: primero revisa si el producto que se quiere agregar ya esta en el carrito, en caso de que no
  lo agrega al carrito con toda su info, y en caso de que si se encuentre en el carrito se eliminara (anteriormente lo tenia que aumentaba su cantidad si ya estaba
    pero no me parecia practico o.O) la ultima es la que controla el modal del carrito, si es true se muestra, sino no*/

  const handleCart = (prod) => {
    const index = cart.findIndex((item) => item.name === prod.name);
    if (index === -1) {
      setCart([
        ...cart,
        {
          name: prod.name,
          precio_d1: prod.precio_d1,
          precio_olim: prod.precio_olim,
          precio_exito: prod.precio_exito,
          img: prod.img1,
          quantity: 1,
          id: prod.id,
        },
      ]);
      toast.success("Producto agregado al carrito", {
        position: "top-center",
        autoClose: 400,
        theme: "colored",
      });
      setIsSelected(false);
    } else {
      const updatedCart = cart.filter((item) => item.id !== prod.id);
      setCart(updatedCart);
      setCart(updatedCart);
      toast.error("Producto eliminado del carrito", {
        position: "top-center",
        autoClose: 400,
        theme: "colored",
      });
      setIsSelected(true);
    }
  };

  const ToggleCart = () => {
    setShowCart(!showCart);
  };

  /* Estas funciones son para aumentar o disminuir la cantidad de un producto del carrito */

  const AddQuant = (prod) => {
    const updatedCart = cart.map((item) => {
      if (item.name === prod.name) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const minusQuant = (prod) => {
    const updatedCart = cart.map((item) => {
      if (item.name === prod.name && item.quantity >= 2) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  /* Estas funciones controlan el modal que se muestra al darle click a un producto. La de itemInCard es para verificar si un item ya esta en el carrito
la use para hacer una renderizacion condicional para el icono del carrito (si ya esta en el carrito sale un icono, sino esta sale otro. 
  La de selectProd tiene la misma funcion, pero para manejar si un producto esta seleccionado (se abrio su modal)*/

  const handleModal = (prod) => {
    setOpenModal(true);
    selectProd(prod);
    setIsSelected(true);
  };

  const CloseModal = () => {
    setOpenModal(false);
    setIsSelected(false);
  };

  const itemInCard = (prod) => {
    return cart.some((item) => item.id == prod.id);
  };

  const selectProd = (prod) => {
    setSelectedProduct(prod);
  };

  /* Esta es una funcion para "formatear" o volver el precio de los productos a peso colombiano, se utiliza toLocaleString */
  const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });

    const decimalIndex = formattedPrice.indexOf(".");
    if (decimalIndex !== -1) {
      const priceWithoutTrailingZeros = formattedPrice.slice(
        0,
        decimalIndex + 4
      );
      return priceWithoutTrailingZeros;
    }

    return formattedPrice;
  };

  /* Estas funciones son para filtrar en la pagina de los productos por distribuidora*/

  const filtrarD1 = () => {
    const filteredD1 = [...originalProduct].filter((prod) => {
      return prod.precio_d1 > 0;
    });
    setProducto(filteredD1);
  };
  const filtrarExito = () => {
    const filteredD1 = [...originalProduct].filter((prod) => {
      return prod.precio_exito > 0;
    });
    setProducto(filteredD1);
  };
  const filtrarOlimpica = () => {
    const filteredD1 = [...originalProduct].filter((prod) => {
      return prod.precio_olim > 0;
    });
    setProducto(filteredD1);
  };

  /* Este map es el encargado de mostrar o renderizar todos los productos que traigo de la BD */

  const map = producto.map((prod) => {
    const priceD1 = parseFloat(prod.precio_d1);
    const priceOlim = parseFloat(prod.precio_olim);
    const priceExito = parseFloat(prod.precio_exito);
    const formattedPriceD1 = formatPrice(priceD1);
    const formattedPriceOlim = formatPrice(priceOlim);
    const formattedPriceExito = formatPrice(priceExito);

    /* esto era para mostrar el precio mas bajo en la tarjeta del producto */

    let formattedPrice;

    if (priceD1 > priceOlim && priceOlim > priceExito) {
      formattedPrice = formattedPriceExito;
    } else if (priceOlim > priceExito && priceExito > priceD1) {
      formattedPrice = formattedPriceD1;
    } else {
      formattedPrice = formattedPriceOlim;
    }

    /* Esto es para verificar si un producto tiene al menos dos precios, es decir esta en 2 o mas distribuidoras */


    if (prod === selectedProduct) {
      return (
        <Product
          isSelected={isSelected}
          name={prod.name}
          precio={`Mas barato: ${formattedPrice}`}
          img={prod.img1}
          key={prod.id}
          modalFn={() => handleModal(prod)}
          del={() => handleDelete(prod.id)}
          addTo={() => handleCart(prod)}
          cart={itemInCard(prod)}
        />
      );
    }
    return (
      <Product
        name={prod.name}
        precio={`Mas barato: ${formattedPrice}`}
        img={prod.img1}
        key={prod.id}
        modalFn={() => handleModal(prod)}
        del={() => handleDelete(prod.id)}
        addTo={() => handleCart(prod)}
        cart={itemInCard(prod)}
      />
    );
  });

  return (
    <div className="main" style={{ backgroundColor: dark && "#202124 " }}>
      <Sidebar
        handleCates={handleCategory}
        handleInput={handleChange}
        toggleCart={ToggleCart}
        size={cart.length}
        filtrarPrecios={() => filtrarPrecios(producto)}
        filtrarPreciosExito={() => filtrarPreciosExito(producto)}
        filtrarPreciosD1={() => filtrarPreciosD1(producto)}
        filtrarD1={filtrarD1}
        filtrarExito={filtrarExito}
        filtrarOlimpica={filtrarOlimpica}
      />

      {noProduct && (
        <div className="no-ava-cont">
          {" "}
          <h2 className="no-ava" style={{ color: !dark && "black" }}>
            Categoria vacia
          </h2>{" "}
        </div>
      )}

      <div className="products-container"> {map}
      </div>

      <ToastContainer />
      {showCart && (
        <Cart
          cartItems={cart}
          setCartItems={setCart}
          toggleCart={ToggleCart}
          plus={AddQuant}
          minus={minusQuant}
          formatPrice={formatPrice}
        />
      )}

      {openModal && (
        <InfoModal close={CloseModal}>
          {" "}
          <InfoPage
            selectedProduct={selectedProduct}
            formatPrice={formatPrice}
          />{" "}
        </InfoModal>
      )}
      
    </div>
  );
};

export default ProdsPrices;
