from fastapi import FastAPI
from app.schemas.recommendation import (
  RecommendationRequest,
  RecommendationResponse
)

app = FastAPI()

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