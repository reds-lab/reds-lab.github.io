// App.jsx or App.tsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import People from './pages/People'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Contact from './pages/Contact'
import Photos from './pages/Photos'
import "./App.css"
function App() {
  return (
      <>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </main>
        <Footer />
      </>
  )
}

export default App