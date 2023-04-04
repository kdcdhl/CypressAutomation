import pytest
import requests


def test_api_top_rated_movies_valid():
    token = requests.get("https://api.themoviedb.org/3/movie/550?api_key=aaa4bfd23ae0db6348221ed6665489f3")
    resp = requests.get("https://developers.themoviedb.org/3/movies/get-top-rated-movies")
    assert resp.status_code == 200
    # response_body = resp.json()
    print(resp.text)

@pytest.mark.skip()
def test_api_top_rated_movies_invalid():
    resp = requests.get("https://fdevelopers.themoviedb.org/3/movies/get-top-rated-movies")
    assert resp.status_code == 400
    # response_body = resp.json()
    print(resp.text)



def test_api_rate_move_valid():
    response = requests.get("https://developers.themoviedb.org/3/movies/rate-movie")
    assert response.status_code == 200
    # response_body = response.json()
    print(response.text)


@pytest.mark.skip
def test_api_rate_move_invalid():
    response = requests.get("https://fsdevelopers.themoviedb.org/3/movies/rate-movie")
    assert response.status_code == 401
    # response_body = response.json()
    print(response.text)
