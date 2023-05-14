import { Routes, Route } from "react-router-dom";
import ProductsMain from "./pages/ProductsMain.jsx";
import Index from "./pages/Index";
import { useState } from "react";
import AddProduct from "./pages/AddProduct.jsx";

function App() {
  const [producto, setProducto] = useState([]);
  

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/products"
        element={<ProductsMain setProducto={setProducto} producto={producto} />}
      />
      <Route
        path="/add"
        element={<AddProduct producto={producto} setProducto={setProducto} />}
      />
    </Routes>
  );
}

export default App;
