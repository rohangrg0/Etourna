
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.utils.config import settings

# Postgres engine via psycopg2
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,         # helps with stale connections
    pool_size=5,                # tune as needed
    max_overflow=10             # tune as needed
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
