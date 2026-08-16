function Navbar() {
  return (
    <header className="navbar">

      {/* Logo também leva para o início. */}
      <a 
        className="navbar-logo" 
        href="#inicio"
        aria-label="City Prime - início"
        >
          City

          <span> Prime</span>
        </a>

      <nav 
        className="navbar-links"
        aria-label="Navegação principal"
        >

        <a href="#">Início</a>
        <a href="#">Explorar</a>
        <a href="#">Favoritos</a>
        <a href="#">Histórico</a>
        <a href="#">Sobre</a>
      </nav>
    </header>
  )
}

export default Navbar 