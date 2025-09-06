import Nav from "./components/nav/Nav";
import Products from "./pages/Productsa.jsx";
import Cart from "./pages/cart.jsx";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
