import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import dataLibros from "./data/libros";
import { useState } from "react";
import RoutesComponent from "./routes/RoutesComponent";

function App() {
  const [libros, setLibros] = useState(dataLibros);
  const [carrito, setCarrito] = useState([]);
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  const buscarLibros = (filtro) => {
    const librosFiltrados = dataLibros.filter((libro) => {
      return (
        libro.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        libro.autor.toLowerCase().includes(filtro.toLowerCase()) ||
        libro.isbn.includes(filtro)
      );
    });
    if (librosFiltrados.length > 0) {
      setLibros(librosFiltrados);
    } else {
      alert("Libro no encontrado");
      setLibros([]);
    }
  };

  const onAddCarrito = (item) => {
    console.log("añadiendo to cart...", item);
    setCarrito([...carrito, item]);
    setLibroSeleccionado(item.libro);
  };

  return (
    <div className="contenedor-principal">
      <Header onBuscarLibros={buscarLibros} dataLibros={dataLibros} />
      <RoutesComponent
        libros={libros}
        onAddCarrito={onAddCarrito}
        carrito={carrito}
        libroSeleccionado={libroSeleccionado}
      />
      <Footer />
    </div>
  );
}

export default App;
