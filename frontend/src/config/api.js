const apiBaseUrl = import.meta.env.VITE_API_URL

if (
  typeof apiBaseUrl !== "string" ||
  apiBaseUrl.length === 0
) {
  throw new Error(
    "A variável VITE_API_URL não foi configurada. " +
      "Crie frontend/.env.local com base em frontend/.env.example.",
  )
}

export const API_BASE_URL = apiBaseUrl