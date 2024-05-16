import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Community from './pages/Community';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/product/:id" element={<SingleProduct />} /> */}
      <Route path="/singleproduct" element={<SingleProduct />} />
      <Route path="/products" element={<Products />} />
      <Route path="/community" element={<Community />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
