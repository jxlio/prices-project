import { Routes, Route } from "react-router-dom";
import ProdsPrices from "./Components/ProdsPrices";
import Index from "./pages/Index";
import { useState } from "react";

function App() {
  const [producto, setProducto] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/products"
        element={<ProdsPrices setProducto={setProducto} producto={producto} />}
      />
    </Routes>
  );
}

export default App;
