import Header from "./general/Header";
import Footer from "./general/Footer";
import Carousel from "./general/Carousel";
import Cards from "./general/Cards";
import FormAdmin from "./Formulario_admin/Formulario_Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Cards />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/Formulario_Admin" element={<FormAdmin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
