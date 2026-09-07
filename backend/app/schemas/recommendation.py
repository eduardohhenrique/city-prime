# To explain the rules
from typing import Annotated 

# BaseModel é a classe principal usada para criar
# modelos de dados no Pydantic.

# ConfigDict configura o comportamento do modelo.

# StringConstraints adiciona regras específicas
# para valores do tipo string.
from pydantic import BaseModel, ConfigDict, StringConstraints

# Regras da query qye será enviada pelo usuário
SearchQuery = Annotated[
  str,
  StringConstraints(
    strict=True, # Deve ser str
    strip_whitespace=True, # Similar ao .strip()
    min_length=1,
    max_length=300
  )
]

# Enviado
class RecommendationRequest(BaseModel):
  model_config = ConfigDict(
    extra='forbid'
  )
  
  query: SearchQuery
  
# Resposta
class RecommendationResponse(BaseModel):
  query: str
  
  message: str