import ItemCount from "./ItemCount"

function ItemDetail({ item }) {
  return (
    <article className="container my-4">
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <img src={item.thumbnail} className="img-fluid rounded" alt={item.title} />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column">
          <h2 className="mb-2">{item.title}</h2>
          <p className="text-secondary mb-2">Categoría: {item.category}</p>
          <p className="fs-4 fw-bold mb-3">${item.price.toLocaleString('es-CO')}</p>
          <p className="mb-4">{item.description}</p>
          <ItemCount initial={1} stock={item.stock} onAdd={(qty) => console.log('Agregar al carrito:', item.id, qty)} />
        </div>
      </div>
    </article>
  )
}
export default ItemDetail
