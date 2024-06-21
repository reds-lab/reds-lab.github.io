function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} ReDS Lab. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer