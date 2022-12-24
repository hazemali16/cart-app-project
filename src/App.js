
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
