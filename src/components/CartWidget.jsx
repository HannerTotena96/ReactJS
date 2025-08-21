function CartWidget() {
  const itemsCount = 2 // luego lo conectamos a estado/contexto

  return (
    <button type="button" className="btn btn-outline-light position-relative">
      <i className="fas fa-shopping-cart"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {itemsCount}
      </span>
    </button>
  )
}

export default CartWidget
