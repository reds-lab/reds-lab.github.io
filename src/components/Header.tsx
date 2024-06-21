// Header.tsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import redsLabIcon from '../assets/reds-lab-logo.png'
import "../styles/Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen, isMobile])

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <img src={redsLabIcon} alt="ReDS Lab Icon" className="header-icon" />
          <h1 className="header-title">ReDS Lab</h1>
        </Link>
        {isMobile ? (
          <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        ) : null}
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''} ${isMobile ? 'mobile' : ''}`}>
          <ul>
            <li><Link to="/people" onClick={isMobile ? toggleMenu : undefined}>People</Link></li>
            <li><Link to="/research" onClick={isMobile ? toggleMenu : undefined}>Research</Link></li>
            <li><Link to="/publications" onClick={isMobile ? toggleMenu : undefined}>Publications</Link></li>
            <li><Link to="/contact" onClick={isMobile ? toggleMenu : undefined}>Contact</Link></li>
            <li><Link to="/photos" onClick={isMobile ? toggleMenu : undefined}>Photos</Link></li>
          </ul>
        </nav>
        <a href="https://github.com/reds-lab" target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub size={24} />
        </a>
      </div>
    </header>
  )
}

export default Header