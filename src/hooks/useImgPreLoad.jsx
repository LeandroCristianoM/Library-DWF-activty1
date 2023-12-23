import { useEffect, useState } from "react";
//Hook para que cargue la imagen antes de renderizar el componente.
// La funcionalidad la podemos observar a detalle dejando a setImagenCargada(false) en estado false;

export const useImgPreLoad = (src) => {
  const [imagenCargada, setImagenCargada] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    const handleLoad = () => {
      setImagenCargada(true);
    };

    image.addEventListener("load", handleLoad);
    return () => {
      image.removeEventListener("load", handleLoad);
    };
  }, [src]);

  return { imagenCargada };
};
