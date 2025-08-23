import Nav from "./components/nav/Nav";
import Products from "./pages/Productsa.jsx";
import Cart from "./pages/cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/pages/Productsa.jsx" element={<Products/>} />
          <Route path="/pages/cart.jsx" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
