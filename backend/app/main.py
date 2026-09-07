from fastapi import FastAPI

app = FastAPI()

# Para o endereço /health

@app.get("/health")
def health_check() -> dict[str, str]:
  return {
    "status": "ok",
  }