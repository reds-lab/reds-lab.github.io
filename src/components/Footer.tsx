// Footer.tsx
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} ReDS Lab. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer