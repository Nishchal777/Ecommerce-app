import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import History from "./Pages/History";
import Login from "./Pages/Login";
import Collections from "./Pages/Collections";
import Product from "./Components/Product";
import { useState } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  //Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  // Remove from cart function
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
  return (
    <div>
      <TopNav />
      <Navbar cart={cart} />
      <div className="px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/product/:id"
            element={<Product addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
