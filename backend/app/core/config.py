from __future__ import annotations
import os
from typing import List
from dotenv import load_dotenv

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
dotenv_path = os.path.join(BASE_DIR, ".env")
load_dotenv(dotenv_path)

class Settings:
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "change-me")
    API_CORS_ORIGINS: List[str] = [
        o.strip() for o in os.getenv("API_CORS_ORIGINS", "http://localhost:5173").split(",") if o.strip()
    ]
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60)) 
    
settings = Settings()
