from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

# Verifica se a query enviada é válida
def test_create_recommendations_returns_normalized_query() -> None:
  response = client.post(
    "/recommendations",
    json={
      "query": "  restaurante  "
    }
  )
  
  assert response.status_code == 200
  
  assert response.json() == {
    "query": "restaurante",
    "message": "Consulta recebida com sucesso. "
  }
  
# Verifica se rejeita query composta apenas por espaços
def test_create_recommendations_rejects_blank_query() -> None:
  response = client.post(
    "/recommendations",
    json={
      "query": "     "
    }
  )
  
  assert response.status_code == 422 # Conteúdo Não Processado
  
# Verifica se rejeita campos desconhecidos
def test_create_recommendations_rejects_extra_fields() -> None:
  response = client.post(
    "/recommendations",
    json={
      "query": "cafeteria",
      "uknown_field": "valor inesperado"
    }
  )
  
  assert response.status_code == 422
  
def test_create_recommendations_rejects_query_over_limit() -> None:
  response = client.post(
    "/recommendations",
    json={
      "query": "a" * 301
    }
  )
  
  assert response.status_code == 422