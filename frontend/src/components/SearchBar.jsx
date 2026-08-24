function SearchBar() {
  return (
    <form
      className="search-form"
      role="search"
    >
      <label 
        className="search-label"
        htmlFor="place-search"
      >
        O que você está procurando?
      </label>

      <div className="search-control">
        <span
          className="search-symbol"
          aria-hidden="true"
        >
          ✦
        </span>

        <input 
          id="place-search"
          className="search-input"
          name="query"
          type="search"
          placeholder="Ex.: restaurante japonês barato perto de mim"
        />

        <button
          className="search-button"
          type="submit"
        >
          Buscar
        </button>
      </div>

      <p className="search-help">
        Escreva do seu jeito. Você pode informar preço, distância, ocasião ou tipo de comida.
      </p>
    </form>
  )
}

export default SearchBar