from __future__ import annotations

import os
from typing import List

from dotenv import load_dotenv

# Ensure we load the backend/.env regardless of the current working directory
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
dotenv_path = os.path.join(BASE_DIR, ".env")
load_dotenv(dotenv_path)

# Read raw values from environment (loaded from .env by python-dotenv)
DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./dev.db")
# Secret key used to sign tokens and other secrets. Keep this value secret in prod.
SECRET_KEY: str = os.getenv("SECRET_KEY", "change-me")
# Allow comma-separated origins in .env and fallback to localhost if missing
API_CORS_ORIGINS: List[str] = [o.strip() for o in os.getenv("API_CORS_ORIGINS", "http://localhost:5173").split(",") if o.strip()]


