import { useState } from "react"

/* Se a pesquisa for composta apenas por espaços */
const EMPTY_QUERY_ERROR =
  "Digite o que você está procurando antes de buscar."

function SearchBar() {
  const [query, setQuery] = useState("")

  const [feedback, setFeedback] = useState({
    type: "idle",
  })

  const hasValidationError =
    feedback.type === "error"

  const hasSuccessfulSearch =
    feedback.type === "success"

  const inputDescriptionIds = hasValidationError
    ? "search-help search-error"
    : "search-help"

  /*
    Define a classe visual da caixa de pesquisa.

    Quando existe um erro, adicionamos também
    a classe search-control--invalid.
  */
  const searchControlClassName = hasValidationError
    ? "search-control search-control--invalid"
    : "search-control"

  function handleQueryChange(event) {
    const nextQuery = event.target.value

    setQuery(nextQuery)

    if (
      hasValidationError &&
      nextQuery.trim().length > 0
    ) {
      setFeedback({
        type: "idle",
      })
    }
  }

  /*
    Esta função será executada quando o formulário
    for enviado.

    O envio pode acontecer de duas maneiras:

    1. clicando no botão Buscar;
    2. pressionando Enter dentro do input.
  */
  function handleSubmit(event) {
    /*
      Impede o comportamento padrão do formulário.

      Sem esta linha, o navegador poderia recarregar
      ou navegar para outra página ao enviar o form.
    */
    event.preventDefault()

    const normalizedQuery = query.trim()

    if (normalizedQuery.length === 0) {
      setFeedback({
        type: "error",
        message: EMPTY_QUERY_ERROR,
      })

      return
    }

    setQuery(normalizedQuery)

    setFeedback({
      type: "success",
      query: normalizedQuery,
    })
  }

  return (
    <form
      className="search-form"
      role="search"
      noValidate
      onSubmit={handleSubmit}
    >
      <label
        className="search-label"
        htmlFor="place-search"
      >
        O que você está procurando?
      </label>

      <div className={searchControlClassName}>
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
          required
          value={query}
          aria-invalid={
            hasValidationError
              ? "true"
              : "false"
          }
          aria-describedby={inputDescriptionIds}
          onChange={handleQueryChange}
        />

        <button
          className="search-button"
          type="submit"
        >
          Buscar
        </button>
      </div>

      <p
        id="search-help"
        className="search-help"
      >
        Escreva do seu jeito. Você pode informar preço,
        distância, ocasião ou tipo de comida.
      </p>

      <div
        id="search-error"
        className="search-error"
        role="alert"
      >
        {hasValidationError
          ? feedback.message
          : ""}
      </div>

      <div
        className="search-status"
        aria-live="polite"
        aria-atomic="true"
      >
        {hasSuccessfulSearch ? (
          <p className="search-result">
            Você pesquisou por:{" "}
            <strong>{feedback.query}</strong>
          </p>
        ) : null}
      </div>
    </form>
  )
}

export default SearchBar