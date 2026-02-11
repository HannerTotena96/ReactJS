function ItemCard({ item, onClick }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={item.thumbnail} className="card-img-top" alt={item.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text mb-1">Categoría: {item.category}</p>
        <p className="fw-bold mb-3">${item.price.toLocaleString('es-CO')}</p>
        <button className="btn btn-primary mt-auto" onClick={onClick}>
          Ver detalle
        </button>
      </div>
    </div>
  )
}
export default ItemCard
