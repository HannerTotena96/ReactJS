import { useState } from "react"

function ItemCount({ initial = 1, stock = 0, onAdd }) {
  const [qty, setQty] = useState(initial)
  const inc = () => setQty(q => Math.min(q + 1, stock))
  const dec = () => setQty(q => Math.max(q - 1, 1))

  return (
    <div className="d-flex align-items-center gap-2">
      <button className="btn btn-outline-secondary" onClick={dec} disabled={qty <= 1}>-</button>
      <span className="px-3 py-2 border rounded">{qty}</span>
      <button className="btn btn-outline-secondary" onClick={inc} disabled={qty >= stock}>+</button>
      <button className="btn btn-success ms-3" onClick={() => onAdd?.(qty)} disabled={stock === 0}>
        Agregar al carrito
      </button>
      {stock === 0 && <span className="text-danger ms-2">Sin stock</span>}
    </div>
  )
}
export default ItemCount
