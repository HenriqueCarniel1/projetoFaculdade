
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import FormLogin from "./pages/formlogin";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<FormLogin/>} />
        <Route path="/" element={<Header/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
