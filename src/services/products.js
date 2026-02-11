
const wait = (ms = 600) => new Promise(res => setTimeout(res, ms))


const thumb = (file) => `/imagenes/productos/${file}`


const PRODUCTS = [
  { id: 'p1', title: 'Tamiz 200 mm #200',   price: 120000, stock: 8,  category: 'tamices',   thumbnail: thumb('tamiz_200.jpg'),        description: 'Tamiz de acero inoxidable malla #200 (75 µm).' },
  { id: 'p2', title: 'Reactivo AERO® XD-5002', price: 189000, stock: 12, category: 'reactivos', thumbnail: thumb('reactivo_xd5002.jpg'),  description: 'Colector para flotación selectiva de sulfuros.' },
  { id: 'p3', title: 'Balanza Marcy',        price: 650000, stock: 3,  category: 'equipos',    thumbnail: thumb('balanza_marcy.jpg'),     description: 'Balanza Marcy para determinación de densidad de pulpas.' },
  { id: 'p4', title: 'Tamiz 200 mm #100',    price: 115000, stock: 15, category: 'tamices',   thumbnail: thumb('tamiz_100.jpg'),         description: 'Tamiz de acero inoxidable malla #100 (150 µm).' },
  { id: 'p5', title: 'Sulfato de Cobre',     price: 79000,  stock: 20, category: 'reactivos', thumbnail: thumb('sulfato_cobre.jpg'),      description: 'Activador para flotación de sulfuros de zinc.' },
  { id: 'p6', title: 'Hidrociclón HC-75',    price: 980000, stock: 4,  category: 'equipos',   thumbnail: thumb('hidrociclon_hc75.jpg'),  description: 'Hidrociclón de proceso para clasificación de partículas.' },
]

export async function getProducts() {
  await wait()
  return PRODUCTS
}

export async function getProductsByCategory(category) {
  await wait()
  return PRODUCTS.filter(p => p.category === category) // uso de ===
}

export async function getProductById(id) {
  await wait()
  const prod = PRODUCTS.find(p => p.id === id)
  if (!prod) throw new Error('Producto no encontrado')
  return prod
}


export function getCategories() {
  return Array.from(new Set(PRODUCTS.map(p => p.category)))
}