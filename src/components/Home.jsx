import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    
  }, [])

  const carouselImgs = [
    "Wallpaperempresa.jpg",
    "minerales.jpg",
    "reactivos.jpg"
  ]

  const industriasImgs = [
    { file: "metalurgia.jpg", title: "Beneficio / Metalurgia" },
    { file: "mineria2.jpg", title: "Minería / consultoría" },
    { file: "aguas2.jpg", title: "Tratamiento de aguas" }
  ]

  const banderas = [
    "colombia.png",
    "Argentina.png",
    "chile.png",
    "peru.png"
  ]

  return (
    <>
      <br />
      {/* Título principal centrado y grande */}
      <h1 className="intro text-center display-5 fw-bold" data-aos="fade-up">
        Somos líderes en optimización de procesos metalúrgicos
      </h1>
      <br />

      {/* Carousel */}
      <main>
        <div
          id="carouselExample"
          className="carousel slide carousel-fade home-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {carouselImgs.map((img, i) => (
              <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={img}>
                <img
                  src={`/imagenes/${img}`}
                  className="d-block w-100 custom-carousel-img"
                  alt={img}
                />
                {/* Eliminado el <p> con el nombre del archivo */}
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>

        <br />
        {/* Subtítulo centrado */}
        <h2 className="intro text-center" data-aos="fade-right">Industrias</h2>

        <div className="container mt-4">
            <div className="row g-3">
  {industriasImgs.map(({ file, title }) => (
    <div className="col-12 col-md-6 col-lg-4 equal-col" key={file} data-aos="zoom-in">
      <div className="card bg1 bgimg custom-card uniform-card h-100">
        <div className="img-frame">
          <img src={`/imagenes/${file}`} alt={file} />
        </div>
        <div className="card-body text-center">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>

        {/* Simulador */}
        <section className="container my-5">
          <h2 className="intro text-center" data-aos="fade-up">Simulador de Cotización</h2>
          <div className="alert alert-secondary mt-3">
            (Opcional) 
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-2">
        <section className="container">
          <div className="row text-center mb-4">
            {banderas.map(flag => (
              <div key={flag} className="col-12 col-md-3 col-lg-3 mb-2">
                <img src={`/imagenes/${flag}`} alt={flag} className="flag-img" />
                {/* Eliminado el <p> con el nombre del archivo */}
              </div>
            ))}
          </div>
        </section>
        <div className="row">
          <div className="col-12 text-center intro">
            <h5 className="mt-2">Más de 10 años de experiencia optimizando procesos en distintas empresas a nivel mundial</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-2">
            <p className="small">Todos los derechos reservados &copy; 2024</p>
          </div>
        </div>
      </footer>
    </>
  )
}