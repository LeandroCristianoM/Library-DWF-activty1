import { useState } from "react";
import "./../styles/buscador.css";
import { Link } from "react-router-dom";

function Buscador({ onBuscarLibros, dataLibros }) {
  const [filtro, setFiltro] = useState("");
  const [resultado, setResultado] = useState([]);

  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleClear = () => {
    setFiltro("");
    setResultado([]);
    onBuscarLibros("");
  };

  const handleBuscador = () => {
    const librosFiltrados = dataLibros.filter(
      (libro) =>
        libro.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        libro.autor.toLowerCase().includes(filtro.toLowerCase()) ||
        libro.isbn.includes(filtro)
    );
    setResultado(librosFiltrados);

    onBuscarLibros(filtro);
  };

  const action = (e) => {
    if (e.key === "Enter") {
      handleBuscador();
    }
  };

  return (
    <div className="buscador-container">
      <input
        type="text"
        placeholder="Buscar"
        value={filtro}
        onChange={handleChange}
        onKeyDown={action}
      />
      <button className="clear-button" onClick={handleClear}>
        Limpiar
      </button>

      {resultado.length > 0 && (
        <ul>
          {resultado.map((libro) => (
            <div className="tarjeta" key={libro.libroId}>
              <img
                src={`${libro.imagenPortada}`}
                alt="portada"
                className="imgPortada"
              />
              <div className="contenido-tarjeta">
                <h3>{libro.nombre}</h3>
                <p>
                  {" "}
                  <strong> {libro.autor} </strong>{" "}
                </p>

                <Link to="/carrito">
                  <button
                    type="button"
                    className="btn btn-secondary carrito-button"
                  >
                    Carrito de alquiler
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Buscador;
