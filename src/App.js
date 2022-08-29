import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CartPage from "./components/cart-page/cart-page";
import MainPage from "./components/main-page/main-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
