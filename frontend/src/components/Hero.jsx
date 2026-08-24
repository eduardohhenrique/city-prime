import SearchBar from "./SearchBar"

function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-labelledby="hero-tittle"
    >
      <div className="hero-content">
        <p className="hero-label">
          Seu <span> guia</span> de recomendações
        </p>

        <h1
        id="hero-title"
        className="hero-title"
        >
          Me indica um lugar

          {/* destacar uma parte específica */}
          <span> que seja a minha cara.</span>
        </h1>

        <p className="hero-description">
          Conte o que está pensando e encontre lugares que combinam com o seu momento.
        </p>

        <SearchBar />
      </div>
    </section>
  )
}

export default Hero