import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Community from './pages/Community';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import EditProductPage from './pages/EditProductPage';
import Checkouts from './pages/Checkouts';

import { UserProvider } from './components/UserContext';

function App() {
  return (
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single/:id" element={<SingleProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/community" element={<Community />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/edit/:id' element={<EditProductPage />} />
            <Route path='/checkouts' element={<Checkouts />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
  );
}

export default App;
