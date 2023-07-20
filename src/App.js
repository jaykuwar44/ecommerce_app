import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
