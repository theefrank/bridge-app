# Bridge App

Bridge is a community support platform that helps users request help and volunteers respond with support.

## Local development

### Backend
- Create and activate a virtual environment.
- Install dependencies from the backend Pipfile.
- If you need a deployment-friendly environment, Render can install from Pipfile using Pipenv.
- Start the API with `python backend/run.py`.
- Initialize a clean database with `SEED_DEMO_DATA=false python backend/seed.py`.

### Frontend
- Install npm dependencies with `npm install`.
- Start the Vite app with `npm run dev`.
- Set the API base URL with `VITE_API_URL=http://127.0.0.1:5000`.

## Deployment notes
- The backend is wired for production-style startup via `gunicorn` and a configurable `PORT`.
- The frontend reads the API URL from `VITE_API_URL`, making it deployment-friendly.
