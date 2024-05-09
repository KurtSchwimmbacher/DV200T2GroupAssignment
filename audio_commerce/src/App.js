import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Community from './pages/Community';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/product/:id" element={<SingleProduct />} /> */}
      <Route path="/singleproduct" element={<SingleProduct />} />
      <Route path="/products" element={<Products />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
