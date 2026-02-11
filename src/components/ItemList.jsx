import ItemCard from "./ItemCard"
import { useNavigate } from "react-router-dom"

function ItemList({ items }) {
  const navigate = useNavigate()
  return (
    <div className="row g-3">
      {items.map(item => (
        <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
          <ItemCard item={item} onClick={() => navigate(`/item/${item.id}`)} />
        </div>
      ))}
    </div>
  )
}
export default ItemList
