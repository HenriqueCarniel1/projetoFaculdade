import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import FormLogin from "./pages/formlogin";
import Home from "./pages/Home";
import Carrinho from "./pages/carrinho";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<FormLogin/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/carrinho" element={<Carrinho/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
