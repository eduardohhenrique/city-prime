from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas.recommendation import (
  RecommendationRequest,
  RecommendationResponse
)

FRONTEND_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]


app = FastAPI()

# Adiciona o middleware responsável pelo CORS.
app.add_middleware(
  CORSMiddleware,
  allow_origins=FRONTEND_ORIGINS,
  allow_credentials=False,
  allow_methods=[
    "GET",
    "POST"
  ],
  allow_headers=[
    "content-type"
  ]
)

# Checar se o backend está respondendo
@app.get("/health")
def health_check() -> dict[str, str]:
  return {
    "status": "ok",
  }
  
@app.post("/recommendations")
def create_recommendations(
  request: RecommendationRequest,
) -> RecommendationResponse:
  return RecommendationResponse(
    query=request.query,
    message="Consulta recebida com sucesso. "
  )