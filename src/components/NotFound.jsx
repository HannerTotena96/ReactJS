import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="container text-center my-5">
      <h1 className="display-5">404 – Página no encontrada</h1>
      <p className="mb-4">El enlace está roto o la página ya no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </section>
  )
}
