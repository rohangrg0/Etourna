from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.session import Base, engine  # ✅ only these
from app.api.routes import auth, admin, users
from app.models.category import Category
# from app.api.routes import users
from app.core.config import settings

# Create all database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="ZOC Backend")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.API_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users.router) 
app.include_router(auth.router)
app.include_router(admin.router)

