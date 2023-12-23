import { Route, Routes } from "react-router-dom";

import DetalleLibro from "../components/DetalleLibro";
import AcerdaDe from "../components/AcerdaDe";
import Ebooks from "../components/Ebooks";
import AudioLibros from "../components/AudioLibros";
import ErrorRecurso from "../components/ErrorRecurso";
import Carrito from "../components/Carrito";
import dataLibros from "../data/libros";

const RoutesComponent = ({
  libros,
  onAddCarrito,
  carrito,
  libroSeleccionado,
}) => {
  return (
    <Routes>
      <Route
        path="/detalle/:libroId"
        element={
          <DetalleLibro dataLibros={dataLibros} onAddCarrito={onAddCarrito} />
        }
      />
      <Route path="/acercaDe" element={<AcerdaDe />} />
      <Route path="/ebooks" element={<Ebooks />} />
      <Route path="/audiolibros" element={<AudioLibros />} />
      <Route
        path="/carrito"
        element={
          <Carrito carrito={carrito} libroSeleccionado={libroSeleccionado} />
        }
      />
      <Route path="*" element={<ErrorRecurso />} />
    </Routes>
  );
};

export default RoutesComponent;
