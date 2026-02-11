import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NotFound from "./components/NotFound"
import "./App.css"

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Inicio con el diseño original */}
        <Route path="/" element={<Home />} />

        {/* Catálogo completo */}
        <Route path="/productos" element={<ItemListContainer />} />

        {/* Catálogo filtrado por categoría */}
        <Route path="/productos/categoria/:categoryId" element={<ItemListContainer />} />

        {/* Detalle */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
