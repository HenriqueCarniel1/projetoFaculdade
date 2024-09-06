
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import FormLogin from "./pages/formlogin";
import Header from "./components/header";
import Carrinho from "./pages/carrinho";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<FormLogin/>} />
        {/* <Route path="/criarconta" element={<Form/>} /> */}
        <Route path="/" element={<Header/>} />
        <Route path="/carrinho" element={<Carrinho/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
