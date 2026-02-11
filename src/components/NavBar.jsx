import { NavLink, Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import logo from "../assets/logo2.png"
import { getCategories } from "../services/products"

function NavBar() {
  const categories = getCategories()

  return (
    <header className="fixed-top">
       <section className="container-fluid p-0">
        <div className="row no-margin-padding">

          <div className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center bg1">
            <Link className="navbar-brand bgimg" to="/">
              <img src={logo} alt="Logo" width="140" className="d-inline-block align-text-top bgimg" />
            </Link>
          </div>

          <div className="col-12 col-md-10 no-margin-padding">
            <div className="social-media d-flex justify-content-end p-2 bg1">
              <a href="https://www.facebook.com" className="me-4"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.twitter.com" className="me-4"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com" className="me-4"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com" className="me-4"><i className="fab fa-linkedin-in"></i></a>
            </div>

            <nav className="navbar navbar-expand-lg bg1 no-margin-padding">
              <section className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-5">
                      <NavLink className="nav-link nav-hover letra" to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item me-5">
                      {/* Si aún no migras estas páginas, puedes dejar los href originales */}
                      <a className="nav-link nav-hover letra" href="pages/Nosotros.html">Quienes somos</a>
                    </li>

                    
                    <li className="nav-item me-5 dropdown">
                      <NavLink className="nav-link nav-hover letra dropdown-toggle" to="/productos" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                        Productos y servicios
                      </NavLink>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <NavLink className="dropdown-item" to="/productos">Catálogo completo</NavLink>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        {categories.map(cat => (
                          <li key={cat}>
                            <NavLink className="dropdown-item" to={`/productos/categoria/${cat}`}>
                              {cat}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li className="nav-item me-5">
                      <a className="nav-link nav-hover letra" href="pages/clientes.html">Clientes</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-hover letra" href="pages/Contacto.html">Contacto</a>
                    </li>

                    
                    <li className="nav-item ms-3">
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
