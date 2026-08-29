import { useState } from "react"

function SearchBar() {

  const [query, setQuery] = useState("")

  const [submttedQuery, setSubmittedQuery] = useState(null)

  function HandleQueryChange(event) {
    setQuery(event.target.value)

  /*
    Esta função será executada quando o formulário
    for enviado.

    O envio pode acontecer de duas maneiras:

    1. clicando no botão Buscar;
    2. pressionando Enter dentro do input.
  */
  }

  function handleSubmit(event) {
    event.preventDefault()

  /*
    Impede o comportamento padrão do formulário.

    Sem esta linha, o navegador poderia recarregar
    ou navegar para outra página ao enviar o form.
  */

    setSubmittedQuery(query)
  }

  return (
    <form
      className="search-form"
      role="search"
      onSubmit={handleSubmit}
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
          value={query}
          onChange={HandleQueryChange}
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

      <div
      className="search-status"
      aria-live="polite"
      aria-atomic="true"
      >
        {}
        {setSubmittedQuery !== null ? (
          <p className="search-result">
            Você pesquisou por: {" "}
            <strong>{submttedQuery}</strong>
          </p>
        ) : null}
      </div>
    </form>
  )
}

export default SearchBar