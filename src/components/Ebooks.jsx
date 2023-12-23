import ebookImg from "../assets/ebooks_library.png";
import { useImgPreLoad } from "../hooks/useImgPreLoad";

function Ebooks() {
  const { imagenCargada } = useImgPreLoad(ebookImg);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            {imagenCargada ? (
              <img
                src={ebookImg}
                alt="acerca de"
                className="img-fluid rounded"
              />
            ) : (
              <div>Cargando...</div>
            )}
          </div>
          <div className="col-md-6">
            <h2>EBooks</h2>
            <p>
              Sumérgete en una nueva era de lectura con nuestro servicio de
              libros electrónicos (eBooks). En nuestra librería online, te
              ofrecemos una extensa colección de títulos digitales que puedes
              llevar contigo a cualquier parte en tu dispositivo preferido.
              Experimenta la comodidad de tener toda una biblioteca al alcance
              de tus manos, sin preocuparte por el peso o el espacio. Los eBooks
              ofrecen funciones adicionales, como búsqueda instantánea, ajuste
              de tamaño de fuente y la posibilidad de sincronizar tu progreso de
              lectura en varios dispositivos. Además, con actualizaciones
              automáticas, siempre tendrás acceso a las últimas novedades.
              Descubre la flexibilidad y la practicidad de la lectura digital
              mientras te sumerges en historias inolvidables con solo un clic.
            </p>
            <p>
              Explora la revolución de la lectura con nuestra destacada
              colección de libros electrónicos (eBooks). En nuestra librería
              online, los eBooks no son solo archivos digitales; son portales
              que te transportan a mundos infinitos. Disfruta de la portabilidad
              sin esfuerzo al llevar contigo toda una biblioteca en tu
              dispositivo favorito. La iluminación personalizable, la capacidad
              de ajustar el tamaño del texto y la posibilidad de acceder a un
              sinfín de títulos al instante son solo algunas de las ventajas que
              ofrecen nuestros eBooks. Sumérgete en una experiencia de lectura
              envolvente y descubre cómo la tecnología puede potenciar tu amor
              por la narrativa. Con nuestra biblioteca electrónica, el acceso a
              conocimientos y emociones está al alcance de tus dedos, redefine
              tu manera de disfrutar de la lectura.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ebooks;
