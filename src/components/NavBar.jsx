import CartWidget from "./CartWidget"
import logo from "../assets/logo2.png"

function NavBar() {
  return (
    <header className="sticky-top">
      <section className="container-fluid p-0 overflow-hidden">
        <div className="row g-0">
          {/* Columna del logo */}
          <div className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center bg1">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt="Logo"
                width="140"
                className="d-inline-block align-text-top"
              />
            </a>
          </div>

          {/* Columna del menú y redes */}
          <div className="col-12 col-md-10 p-0">
            {/* Redes sociales (fila superior) */}
            <div className="d-flex justify-content-end p-2 bg1">
              <a href="https://www.facebook.com" className="me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" className="me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" className="me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="me-4">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

            {/* Nav principal */}
            <nav className="navbar navbar-expand-lg bg1">
              <section className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto align-items-lg-center">
                    <li className="nav-item me-4">
                      <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item me-4">
                      <a className="nav-link" href="#">Quienes somos</a>
                    </li>
                    <li className="nav-item me-4">
                      <a className="nav-link" href="#">Productos y servicios</a>
                    </li>
                    <li className="nav-item me-4">
                      <a className="nav-link" href="#">Clientes</a>
                    </li>
                    <li className="nav-item me-4">
                      <a className="nav-link" href="#">Contacto</a>
                    </li>

                    {/* Carrito */}
                    <li className="nav-item">
                      <CartWidget />
                    </li>
                  </ul>
                </div>
              </section>
            </nav>
          </div>
        </div>
      </section>
    </header>
  )
}

export default NavBar