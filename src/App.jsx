import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Collection from "./Pages/Collection";
import Orders from "./Pages/Orders";
import Placeorders from "./Pages/Placeorders";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/placeorders" element={<Placeorders />}></Route>
        <Route path="/product/:ProductId" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
