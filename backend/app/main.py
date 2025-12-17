from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.session import engine, Base
from app.api.routes import auth
from app.api.routes import admin
from app.core.config import settings  # <-- import the settings object

# Create all database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="ZOC Backend")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.API_CORS_ORIGINS,  # <-- use settings
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(admin.router)
