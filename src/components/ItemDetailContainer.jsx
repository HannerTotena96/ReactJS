import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../services/products"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    const run = async () => {
      try {
        const data = await getProductById(id)
        if (active) setItem(data)
      } catch (err) {
        if (active) setError(err.message)
      } finally {
        if (active) setLoading(false)
      }
    }
    run()
    return () => { active = false }
  }, [id]) // 
  if (loading) return <section className="container my-4"><p>Cargando...</p></section>
  if (error) return <section className="container my-4"><p className="text-danger">Error: {error}</p></section>
  if (!item) return null

  return <ItemDetail item={item} />
}
export default ItemDetailContainer
