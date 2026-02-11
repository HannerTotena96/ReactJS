import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getProducts, getProductsByCategory } from "../services/products"

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
        const data = categoryId ? await getProductsByCategory(categoryId) : await getProducts()
        if (active) setItems(data)
      } catch (err) {
        if (active) setError(err.message)
      } finally {
        if (active) setLoading(false)
      }
    }
    fetchData()
    return () => { active = false }
  }, [categoryId]) // ← importante para actualizar al navegar por categorías

  if (loading) return <section className="container my-4"><p>Cargando...</p></section>
  if (error) return <section className="container my-4"><p className="text-danger">Error: {error}</p></section>

  return (
    <section className="container mt-4">
      {greeting && <h1 className="mb-3">{greeting}</h1>}
      {categoryId && <h2 className="h5 text-secondary mb-3">Filtrado por categoría: {categoryId}</h2>}
      {items.length === 0 ? <p>No hay productos para esta categoría.</p> : <ItemList items={items} />}
    </section>
  )
}

export default ItemListContainer
