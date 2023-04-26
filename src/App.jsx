import { Routes, Route } from "react-router-dom";
import ProdsPrices from "./Components/ProdsPrices";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/products" element={<ProdsPrices/>} />
    </Routes>
  );
}

export default App;
