import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import User from "./pages/user/User";

import './App.css';
import Header from "./components/header/Header";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/compte" element={<User />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
