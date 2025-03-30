import { useState, Suspense, lazy } from 'react'
import './App.css'

// 🔹 Importaciones dinámicas (Lazy Loading)
const Header = lazy(() => import('./components/layout/header'))
const Home = lazy(() => import('./pages/home'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Header />
      <Home />
    </Suspense>
  )
}

export default App
