import Navbar from "./Navbar";
import '../styles/header.css'
import Buscador from "./Buscador";

function Header({ onBuscarLibros, dataLibros }) {
  return (
    <div>
      <header className="bg-dark text-white py-3">
      <h1>Mi Libreria</h1>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
          </div>
        </div>
      </div>
      </header>
      <Navbar />
      <Buscador  onBuscarLibros={onBuscarLibros} dataLibros={dataLibros} />
    </div>
  );
}

export default Header;
