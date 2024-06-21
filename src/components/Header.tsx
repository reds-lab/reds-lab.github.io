// Header.tsx
import redsLabIcon from '../assets/reds-lab logo.png' // Make sure to add this icon to your assets folder
import "../styles/Header.css"
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={redsLabIcon} alt="ReDS Lab Icon" className="header-icon" />
        <h1 className="header-title">ReDS Lab</h1>
      </div>
    </header>
  )
}

export default Header