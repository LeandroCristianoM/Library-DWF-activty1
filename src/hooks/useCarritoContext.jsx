import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [libroAlquilar, setLibroAlquilar] = useState(null);

  return (
    <CarritoContext.Provider value={{ libroAlquilar, setLibroAlquilar }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
