from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.session import engine, Base
from app.api.routes import auth
from app.api.routes import admin
from app.core.config import API_CORS_ORIGINS

Base.metadata.create_all(bind=engine)

app = FastAPI(title="ZOC Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=API_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(admin.router)
