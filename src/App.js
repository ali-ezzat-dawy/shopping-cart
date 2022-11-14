import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Store from "./Components/Store";
import About from "./Components/About";
import ShoppingCartProvider from "./Context/ShoppingCartContext";

const App = () => {
  return (
    
      <Router  basename="/shopping-cart">
        <ShoppingCartProvider>
          <Navbar />
          <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </ShoppingCartProvider>
      </Router>

  );
};

export default App;
