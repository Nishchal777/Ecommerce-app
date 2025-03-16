import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./Components/TopNav";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import History from "./Pages/History";
import Login from "./Pages/Login";
import Collections from "./Pages/Collections";

function App() {
  return (
    <div>
      <TopNav />
      <Navbar />
      <div className="px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collections" element={<Collections />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
