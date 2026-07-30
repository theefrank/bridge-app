# Bridge Flask API

This backend service provides a REST API for the Bridge application using Flask, SQLAlchemy, SQLite, JWT authentication, and Pipenv.

## Setup

```bash
cd backend
pipenv install
pipenv run python run.py
```

## Seed demo data

```bash
cd backend
pipenv run python seed.py
```

## Run tests

```bash
cd backend
pipenv run python -m unittest discover -s tests -v
```

## Endpoints

- `GET /health`
- `POST /auth/register`
- `POST /auth/login`
- `GET /users` (protected)
- `PUT /users/<id>` (protected)
- `DELETE /users/<id>` (protected)
- `GET /skills`
- `POST /skills` (protected)
- `PUT /skills/<id>` (protected)
- `DELETE /skills/<id>` (protected)
- `GET /requests`
- `POST /requests` (protected)
- `PUT /requests/<id>` (protected)
- `DELETE /requests/<id>` (protected)
- `GET /reviews`
- `POST /reviews` (protected)
- `PUT /reviews/<id>` (protected)
- `DELETE /reviews/<id>` (protected)
