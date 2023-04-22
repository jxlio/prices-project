import "./App.css";
import Product from "./Components/Product";
import LayoutProducts from "./Components/LayoutProducts";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Coca Cola",
    price: 4400,
    img: "https://static.merqueo.com/images/products/large/6206481c-0642-449e-894b-acfda98045a4.png",
    precioD1: 3000,
    precioAra: 2000,
    cantidad: 19
  },
  {
    id: 2,
    name: "Arroz Blanco Diana",
    price: 8900,
    img: "https://d1cft8rz0k7w99.cloudfront.net/n/2/e/2/9/2e29e87e795a3fab95fb47ce78469b03ca6193d8_Grains_292918_01.jpg",
    precioAra: 2323,
    precioD1: 9999,
  },
  {
    id: 3,
    name: "Café Sello Rojo",
    price: 2200,
    img: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/195510/7702032252114.jpg?v=637814059279500000g",
    precioAra: 2323,
    precioD1: 9999,
  },
  {
    id: 4,
    name: "Sal Refisal",
    price: 3200,
    img: "https://static.compreloadomicilio.com/baratonpaisa/products/029/604ea9e524818135162209.webp",
    precioAra: 2323,
    precioD1: 9999,
  },
  {
    id: 5,
    name: "Doritos",
    price: 2100,
    img: "https://cdn.shopify.com/s/files/1/0492/2458/1274/products/supermercados_la_vaquita_supervaquita_doritos_185gr_mega_queso_familiar_pasabocas_700x700.jpg?v=1620489636",
    precioAra: 2323,
    precioD1: 9999,
  },
  {
    id: 6,
    name: "Pescado",
    price: 4900,
    img: "https://st4.depositphotos.com/1068090/39894/i/600/depositphotos_398948462-stock-photo-fresh-raw-fish-rudd-isolated.jpg",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13
  }
  


];

function App() {
  const [info, setInfo] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [resultado, setResultado] = useState("");
  const [producto, setProducto] = useState(products);

  const show = (prod) => {
    setInfo(true);
    selectProd(prod);
  };

  const map = producto.map((prod) => {
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

  function handleChange(event) {
    setResultado(event.target.value);
    if (event.target.value === "") {
      setProducto(products);
    } else {
      filtro(event.target.value);
    }
  }
  const filtro = (busqueda) => {
    var result = producto.filter((produ) => {
      if (
        produ.name.toString().toLowerCase().includes(busqueda.toLowerCase())
      ) {
        return produ;
      }
    });
    setProducto(result);
  };

  return (
    <div className="dad">
      <LayoutProducts change={handleChange} value={resultado}>
        {map}
      </LayoutProducts>
      {info && <InfoPage selectedProduct={selectedProduct} />}
    </div>
  );
}

const InfoPage = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return null;
  }

  return (
    <div className="info">
      <div className="main-info">
        <h1>{selectedProduct.name}</h1>
        <div className="price-info">{`$${selectedProduct.price}`}</div>
        <img src={selectedProduct.img} alt="" />
        <span>{` Precio D1:  ${selectedProduct.precioD1}`} </span>
        <span>{` Precio Ara:  ${selectedProduct.precioAra}`} </span>
        <span>{` Cantidad:  ${selectedProduct.cantidad}`} </span>
      </div>
     
    </div>
  );
};

export default App;
