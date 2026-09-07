from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_check_returns_ok() -> None: 
  # None indica que não precisa retornar nada, resultado decidido pelos 'assert'
  
  # Simula requisição
  response = client.get("/health")
  
  #Verifica se o servidor respondeu 200 (200 = bem sucedida)
  assert response.status_code == 200
  
  # verifica se o JSON está retornando o esperado
  assert response.json() == {
    "status": "ok" # Tem que retonar explicitamente isso
  }