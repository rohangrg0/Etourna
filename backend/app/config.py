
import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    API_CORS_ORIGINS: str = "http://localhost:5431"

    class Config:
        env_file = ".env"

settings = Settings()
