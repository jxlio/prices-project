import React from "react";
import Product from "../Components/Product"
import LayoutProducts from "../Components/LayoutProducts";
import { useState } from "react";
import "../App.css";

const products = [
  {
    id: 1,
    name: "Coca Cola",
    price: 4400,
    img: "https://static.merqueo.com/images/products/large/6206481c-0642-449e-894b-acfda98045a4.png",
    precioD1: 3000,
    precioAra: 2000,
    cantidad: 19,
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
    name: "AREPA CON QUESO MOZZARELLA MASMAI 400 GRS",
    price: 4900,
    img: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000030.png?tr=w-449",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13,
  },
  {
    id: 7,
    name: "AREPA DE MAÍZ BLANCO CON AVENA Y CHÍA MASMAÍ 5 UND - 400 G",
    price: 4900,
    img: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12002550.png?tr=w-449",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13,
  },
  {
    id: 8,
    name: "MANTEQUILLA CON SAL ALPINA 125",
    price: 4900,
    img: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000337.png?tr=w-449",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13,
  },
  {
    id: 9,
    name: "BANANO UNIDAD",
    price: 4900,
    img: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12005468.png?tr=w-449",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13,
  },
  {
    id: 10,
    name: "ESPONJILLA DE BRILLO TIDY HOUSE 6 UND",
    price: 4900,
    img: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000212.png?tr=w-449g",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13,
  },
  {
    id: 11,
    name: "FÓRMULA LÁCTEA EN POLVO ENFAMIL HIERRO ETAPA 2 - 375G",
    price: 4900,
    img: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12001309.png?tr=w-449",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13,
  },
  {
    id: 12,
    name: "KOLA GRANULADA TARRITO ROJO 210 G",
    price: 4900,
    img: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12002088.png?tr=w-449",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13,
  },
  {
    id: 13,
    name: "AGUA NATURAL CON ALOE OMI 500 ML",
    price: 4900,
    img: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000730.png?tr=w-449",
    precioAra: 7009,
    precioD1: 4223,
    cantidad: 13,
  },
];

const ProdsPrices = () => {
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

      <>
        <div className="dad">
          <LayoutProducts change={handleChange} value={resultado}>
            {producto.length === 0 && "Este producto aun no esta disponible"}
            {map}
          </LayoutProducts>
          {info && <InfoPage selectedProduct={selectedProduct} />}
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
          <span>{` Precio D1:  ${selectedProduct.precioD1}`} </span>
          <span>{` Precio Ara:  ${selectedProduct.precioAra}`} </span>
          <span>{` Cantidad:  ${selectedProduct.cantidad}`} </span>
        </div>
      </div>
    );
  };
  


export default ProdsPrices;


