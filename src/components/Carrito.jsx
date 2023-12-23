import React, { useState } from "react";
import "./../styles/carrito.css";


function Carrito({ libroSeleccionado  }) {
  console.log("libro en carrito",libroSeleccionado );
  const [items, setItems] = useState([]);
  const [diasAlquiler, setDiasAlquiler] = useState(1);

  const agregarAlCarrito = () => {
    if (libroSeleccionado ) {
      setItems([
        ...items,
        { ...libroSeleccionado , plazoAlquiler: diasAlquiler },
      ]);
    }
  };

  const extenderPlazo = (index) => {
    setItems((prevItems) => {
      const nuevosItems = [...prevItems];
      nuevosItems[index].plazoAlquiler += diasAlquiler;
      return nuevosItems;
    });
  };

  const calcularPrestamoTotal = () => {
    return items.reduce(
      (total, libro) => total + libro.precioAlquiler * libro.plazoAlquiler,
      0
    );
  };

  console.log(items);
  console.log("aqui toy");

  return (
    <div className="carrito-container">

      <h2>Carrito de Alquiler</h2>
      {items.length > 0 && (
        <div className="carrito-tarjeta">
          <label>
            Días que lo vas a alquilar:
            <input
              type="number"
              value={diasAlquiler}
              onChange={(e) => setDiasAlquiler(parseInt(e.target.value))}
            />
          </label>
        </div>
      )}
      <ul className="lista-grupo">
        {items.map((libro, index) => (
          <li key={index} className="lista-grupo-item carrito-item">
            <div>
              <span>{libro.nombre} </span>- ${libro.precioAlquiler} - Plazo:{" "}
              {libro.plazoAlquiler}
            </div>

            <button
              className="btn btn-secondary"
              onClick={() => extenderPlazo(index)}
            >
              Extender plazo
            </button>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={agregarAlCarrito}>
        Calcular
      </button>
      <p>Total: ${calcularPrestamoTotal()}</p>
    </div>
  );
}

export default Carrito;


