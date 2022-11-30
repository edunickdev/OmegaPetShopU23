import Bienvenida from "./Componentes/general/Bienvenida"
import Header from "./Componentes/general/Header";
import Footer from "./Componentes/general/Footer";
import Carousel from "./Componentes/general/Carousel";
import Cards from "./Componentes/general/Cards";
import FormAdmin from "./Componentes/Formulario_admin/Formulario_Admin";
import FormClients from "./Componentes/formRegistro/formRegistroCliente";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div>
        <Bienvenida />
        <Header />
        <Carousel />
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Bienvenida />} exact></Route>
            <Route path="/products" element={<Cards />} exact></Route>
            <Route path="/admin" element={<FormAdmin/>} exact></Route>
            <Route path="/client" element={<FormClients/>} exact></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
