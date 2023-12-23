import libreria from "../assets/covers/libreria.webp";

function AcerdaDe() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src={libreria} alt="acerca de" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2>Acerca de nosotros</h2>
            <p>
              Bienvenido a nuestra librería online, donde la pasión por la
              lectura se combina con la comodidad de acceder a una extensa
              variedad de libros. Nos enorgullece ofrecer un innovador servicio
              de préstamo que abarca tanto libros físicos como electrónicos, así
              como audiolibros, para satisfacer todos los gustos y preferencias
              de nuestros clientes. Nuestro catálogo diverso y cuidadosamente
              seleccionado abarca desde los clásicos atemporales hasta las
              últimas novedades literarias, asegurando que cada lector encuentre
              algo que capture su imaginación. Con la flexibilidad de alquilar
              libros en formato físico o digital, y la conveniencia de poder
              sumergirse en historias cautivadoras a través de audiolibros,
              estamos comprometidos a brindar una experiencia de lectura única y
              accesible para todos. Únete a nosotros en este viaje literario,
              donde la aventura está a solo un préstamo de distancia.
            </p>
            <p>
              Explora el fascinante mundo de la literatura con nuestra librería
              online, donde ofrecemos la posibilidad de alquilar libros en
              formato físico, sumergirte en la magia de los libros electrónicos
              o dejarte llevar por la narración envolvente de nuestros
              audiolibros. Con un catálogo que abarca desde clásicos
              intemporales hasta las últimas tendencias, nos esforzamos por
              hacer que la lectura sea accesible y emocionante para todos.
              Descubre el placer de la lectura con nosotros y experimenta la
              libertad de elegir cómo y cuándo disfrutar de tus historias
              favoritas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcerdaDe;
