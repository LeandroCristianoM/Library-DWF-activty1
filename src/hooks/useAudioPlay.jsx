import { useState, useEffect } from "react";

//Hook para poder manejar un reproductor que se podría implementar para  escuchar fragmentos de audioLibros.
const useAudioPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);

  // Trae el audio para mostrarlo como prueba del audiolibro
  useEffect(() => {
    const audio = document.getElementById("audioElement");

    if (audio) {
      setAudioElement(audio);

      const handleAudioPlay = () => {
        setIsPlaying(true);
      };

      const handleAudioPause = () => {
        setIsPlaying(false);
      };

      audio.addEventListener("play", handleAudioPlay);
      audio.addEventListener("pause", handleAudioPause);

      return () => {
        audio.removeEventListener("play", handleAudioPlay);
        audio.removeEventListener("pause", handleAudioPause);
      };
    }
  }, []);
  return { isPlaying, audioElement };
};
export default useAudioPlay;
