import os
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
from sqlalchemy import inspect

load_dotenv()

basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, "..", "bridge.db")

app = Flask(__name__)

configured_origins = [origin.strip() for origin in os.getenv("CORS_ORIGINS", "").split(",") if origin.strip()]
default_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
origins = configured_origins or default_origins

CORS(app, origins=origins, supports_credentials=True)
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", f"sqlite:///{db_path}")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret")

app.config["JWT_SECRET_KEY"] = os.getenv(
    "JWT_SECRET_KEY",
    "dev-jwt-secret-change-this-in-production-32-chars",
)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app import models, routes


def ensure_profile_columns():
    inspector = inspect(db.engine)
    if "users" not in inspector.get_table_names():
        return

    columns = {column["name"] for column in inspector.get_columns("users")}
    with db.engine.begin() as connection:
        if "full_name" not in columns:
            connection.execute(db.text("ALTER TABLE users ADD COLUMN full_name VARCHAR(120)"))
        if "location" not in columns:
            connection.execute(db.text("ALTER TABLE users ADD COLUMN location VARCHAR(120)"))
        if "bio" not in columns:
            connection.execute(db.text("ALTER TABLE users ADD COLUMN bio TEXT"))
        if "profile_completed" not in columns:
            connection.execute(db.text("ALTER TABLE users ADD COLUMN profile_completed BOOLEAN DEFAULT 0"))


with app.app_context():
    db.create_all()
    ensure_profile_columns()

app.app_context().push()
