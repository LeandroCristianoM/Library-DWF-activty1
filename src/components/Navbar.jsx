import { Link } from "react-router-dom";

function Navbar({ onBuscarLibros }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/detalle/:libroId">
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  bus
                >
                  Libros
                </Link>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/detalle/:libroId">
                    Libros
                  </Link>
                  <Link className="dropdown-item" to="/ebooks">
                    eBooks
                  </Link>
                  <Link className="dropdown-item" to="/audiolibros">
                    Audio Libros
                  </Link>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/acercaDe">
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
