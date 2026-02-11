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
        
        <Route path="/" element={<Home />} />

        
        <Route path="/productos" element={<ItemListContainer />} />

       
        <Route path="/productos/categoria/:categoryId" element={<ItemListContainer />} />

        
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
