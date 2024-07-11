// App.jsx or App.tsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import People from './pages/People'
import Publications from './pages/Publications'
import Research from './pages/Research'
import DataCentricAI from "./pages/DataCentricAI"
import SafetySecurityAlignment from "./pages/SafetySecurityAlignment"
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Photos from './pages/Photos'
import "./App.css"
import NewsPage from './pages/News'
function App() {
  return (
      <>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/people" element={<People />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research/data-centric-ai" element={<DataCentricAI />} />
            <Route path="/research/safety-security-alignment" element={<SafetySecurityAlignment />} />
            <Route path="/research/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </main>
        <Footer />
      </>
  )
}

export default App