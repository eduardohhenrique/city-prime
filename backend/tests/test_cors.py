from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


# Verifica se o frontend executado em localhost
# recebe permissão para enviar um POST.
def test_cors_preflight_allows_localhost_frontend() -> None:
    response = client.options(
        "/recommendations",
        headers={
            "Origin": "http://localhost:5173",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "content-type",
        },
    )

    assert response.status_code == 200

    assert (
        response.headers["access-control-allow-origin"]
        == "http://localhost:5173"
    )


# Verifica também a origem que utiliza 127.0.0.1.
def test_cors_preflight_allows_loopback_frontend() -> None:
    response = client.options(
        "/recommendations",
        headers={
            "Origin": "http://127.0.0.1:5173",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "content-type",
        },
    )

    assert response.status_code == 200

    assert (
        response.headers["access-control-allow-origin"]
        == "http://127.0.0.1:5173"
    )


# Verifica se uma origem desconhecida não recebe permissão.
def test_cors_preflight_rejects_unknown_origin() -> None:
    response = client.options(
        "/recommendations",
        headers={
            "Origin": "https://site-desconhecido.example",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "content-type",
        },
    )

    assert response.status_code == 400

    assert (
        "access-control-allow-origin"
        not in response.headers
    )


# Verifica se uma resposta real também recebe
# o cabeçalho de permissão do CORS.
def test_cors_adds_header_to_recommendations_response() -> None:
    response = client.post(
        "/recommendations",
        headers={
            "Origin": "http://localhost:5173",
        },
        json={
            "query": "restaurante japonês",
        },
    )

    assert response.status_code == 200

    assert (
        response.headers["access-control-allow-origin"]
        == "http://localhost:5173"
    )