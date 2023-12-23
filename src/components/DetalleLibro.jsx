import { Link, useParams, useNavigate } from "react-router-dom";
import "./../styles/detalleLibro.css";
import { useCarrito } from "../hooks/useCarritoContext";
import { useToastMessage } from "../hooks/useToastMessage";

function DetalleLibro({ dataLibros, onAddCarrito }) {
  const { setLibroAlquilar } = useCarrito;
  const { showToast } = useToastMessage();
  const navigate = useNavigate();
  const { libroId } = useParams();

  const libroSeleccionado = dataLibros.find(
    (libro) => libro.libroId === parseInt(libroId)
  );

  const alquilarLibro = () => {
    console.log("Libro añadido al carrito");
    if (libroSeleccionado) {
      onAddCarrito({
        libro: {
          id: libroSeleccionado.libroId,
          nombre: libroSeleccionado.nombre,
          precioAlquiler: libroSeleccionado.precioAlquiler,
        },
        diasAlquiler: 1,
      });
      showToast("Libro añadido con éxito al carrito de alquiler")
      navigate("/carrito");
      setLibroAlquilar(libroSeleccionado);
    } else {
      showToast("Error al añadir el libro al carrito de alquiler.")
      console.log(dataLibros);
    }
  };

  return (
    <div className="container-items">
      {dataLibros.map((libro) => (
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
            <p> Año: {libro.anioPublicacion} </p>
            <p>ISBN: {libro.isbn}</p>
            <p> Sinopsis: {libro.sinopsis} </p>
            <p>
              <strong>Precio alquiler: ${libro.precioAlquiler}</strong>
            </p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={alquilarLibro}
            >
              Alquilar
            </button>

            <Link to="/carrito">
              <button type="button" className="btn btn-secondary">
                Carrito de alquiler
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetalleLibro;
