import coverAudioLibro from "../assets/libros-audiolibros.jpg";
import useAudioPlay from "../hooks/useAudioPlay";
import { FaVolumeUp } from "react-icons/fa";
import "./../styles/audiolibros.css";
import AudioPlayer from "./AudioPlayer";
import audioTest from "../assets/audios/Audiolibro_test.mp3";

function AudioLibros() {
  const {isPlaying, audioElement} = useAudioPlay();

  const handlePlayPause = () => {
    if(audioElement){
      if(isPlaying){
        audioElement.pause();
      }else{
        audioElement.play();
      }
    }
  }

  return (
    <div className="audio-libros-container">
      <div className="imagen-container">
        <img src={coverAudioLibro} alt="Portada audiolibros" />
      </div>
      <div className="descripcion-container">
        <h2>Explora tus conocimientos sin límites con nuestros AudioLibros</h2>
      <div className={`audio-animation ${isPlaying ? "active" : ""}`}>
        <FaVolumeUp />
      </div>
      <AudioPlayer
        audioSrc={audioTest}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
      />
        <p>
          Descubre una nueva forma de sumergirte en fascinantes historias y
          conocimientos con los audiolibros. En la era acelerada en la que
          vivimos, encontrar tiempo para la lectura puede ser un desafío, pero
          con los audiolibros, puedes disfrutar de tus libros favoritos en
          cualquier momento y lugar. Imagina poder disfrutar de una emocionante
          novela mientras conduces, aprendiendo de expertos mientras haces
          ejercicio o relajándote con una historia cautivadora antes de dormir.
          Los audiolibros ofrecen la flexibilidad de integrar la lectura en tu
          ajetreada vida diaria. Además de la conveniencia, los audiolibros
          ofrecen una experiencia sensorial única. La narración cautivadora, la
          música y los efectos de sonido transportan la historia a otro nivel,
          permitiéndote sumergirte completamente en el mundo del autor. Es como
          tener un teatro personalizado en la palma de tu mano. Explora nuestra
          selección de audiolibros que abarcan desde los bestsellers más
          emocionantes hasta obras maestras literarias, y descubre cómo los
          audiolibros pueden enriquecer tu tiempo y mejorar tu conocimiento.
          ¡Conviértete en un oyente ávido y abre las puertas a un universo
          ilimitado de aprendizaje y entretenimiento con los audiolibros!
        </p>
      </div>
    </div>
  );
}

export default AudioLibros;
