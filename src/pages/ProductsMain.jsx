import Product from "../Components/Product";
import { useState, useEffect, useContext } from "react";
import "../Styles/ProductosPage.css";
import InfoModal from "../Components/InfoModal";
import InfoPage from "../Components/InfoPage";
import ProductsHeader from "../Components/ProductsHeader";
import Cart from "../Components/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { DarkMode } from "../context/darkMode";

const ProdsPrices = ({ setProducto, producto }) => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [noProduct, setNoProduct] = useState(false);

  const [dark, setDark] = useContext(DarkMode)

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const ToggleCart = () => {
    setShowCart(!showCart);
  };

  const handleCart = (prod) => {
    const index = cart.findIndex((item) => item.name === prod.name);
    if (index === -1) {
      setCart([
        ...cart,
        {
          name: prod.name,
          precio_ara: prod.precio_ara,
          precio_d1: prod.precio_d1,
          img: prod.img1,
          quantity: 1,
          id: prod.id,
        },
      ]);
      toast.success("Producto agregado al carrito", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
      });
      setIsSelected(false);
    } else {
      const updatedCart = cart.filter((item) => item.id !== prod.id);
      setCart(updatedCart);
      setCart(updatedCart);
      toast.error("Producto eliminado del carrito", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      setIsSelected(true);
    }
  };

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

  const itemInCard = (prod) => {
    return cart.some((item) => item.id == prod.id);
  };

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
    const priceD1 = parseFloat(prod.precio_d1);
    const priceAra = parseFloat(prod.precio_ara);
    const formattedPriceD1 = formatPrice(priceD1);
    const formattedPriceAra = formatPrice(priceAra);
    const formattedPrice =
      priceD1 > priceAra ? formattedPriceAra : formattedPriceD1;
    const checkedInCart = itemInCard(prod);
    console.log(checkedInCart);

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
    <>
      <div className="main" style={{ backgroundColor: dark ? 'black' : 'white' }}>
        <ProductsHeader
          handleCategory={handleCategory}
          toggleCart={ToggleCart}
          size={cart.length}
        />
        <div className="input-container">
          <input
            type="search"
            placeholder="Busca un producto..."
            onChange={handleChange}
          />
        </div>

        {noProduct && <h2 className="no-ava">Categoria vacia</h2>}

        <section className="products-container "> {map}</section>
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
    </>
  );
};

export default ProdsPrices;
