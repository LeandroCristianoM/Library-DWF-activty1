import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="bg-dark text-white py-2 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="contact-info mb-4">
              <h3>Contacto</h3>
              <p>Teléfono: 989-09897-62514</p>
              <p>Email: milibreria@correo.com</p>
            </div>
            <div className="copyright">
              <p>&copy; 2023 Tu Librería. Todos los derechos reservados.</p>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="social-icons mb-4">
              <h3>Síguenos en Redes Sociales</h3>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ms-4"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ms-4"
              >
                <FaTwitter />
              </Link>
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ms-4"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
