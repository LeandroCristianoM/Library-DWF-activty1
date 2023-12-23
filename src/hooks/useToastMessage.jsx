import { useState } from "react";

//Hook para mostrar un mensaje de éxito o error
export const useToastMessage = () => {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };
  return { toastMessage, showToast };
};
