from app.database.session import engine
from sqlalchemy import text

with engine.connect() as conn:
    conn.execute(text("CREATE SCHEMA IF NOT EXISTS zoc"))
    conn.commit()