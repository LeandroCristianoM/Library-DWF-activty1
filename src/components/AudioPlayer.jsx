import useAudioPlay from "../hooks/useAudioPlay";
import audioTest from "../assets/audios/Audiolibro_test.mp3";

const AudioPlayer = () => {
  const { isPlaying, audioElement } = useAudioPlay();

  const handlePlayPause = () => {
    // const audioElement = document.getElementById("audioElement");

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      }
    } else {
      audioElement.play();
    }
  };
  return (
    <div className="audio-player">
      <h3>Reproductor de AudioLibros</h3>
      <audio controls id="audioElement">
        <source src={audioTest} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <button className={`btn ${isPlaying ? "btn-danger" : "btn-success"}`} onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default AudioPlayer;
