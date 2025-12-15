
import os
from pydantic import BaseSettings
import psycopg2
from psycopg2.extras import RealDictCursor
from passlib.context import CryptContext

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://postgres:password@localhost:5432/zoc_db"
    class Config:
        env_file = ".env"

settings = Settings()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def main():
    conn = psycopg2.connect(settings.DATABASE_URL, cursor_factory=RealDictCursor)
    cur = conn.cursor()

    # Ensure table exists (basic schema)
    cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR UNIQUE NOT NULL,
        full_name VARCHAR NOT NULL,
        hashed_password VARCHAR NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
    );
    """)

    email = "rohan@example.com"
    full_name = "Rohan Gurung"
    password = "supersecret"
    hashed = pwd_context.hash(password)

    try:
        cur.execute(
            "INSERT INTO users (email, full_name, hashed_password) VALUES (%s, %s, %s) RETURNING id, email, full_name, created_at;",
            (email, full_name, hashed)
        )
        row = cur.fetchone()
        conn.commit()
        print("[SUCCESS] Inserted:", row)
    except psycopg2.Error as e:
        conn.rollback()
        print("[ERROR] Insert failed:", e.pgerror or str(e))
    finally:
        cur.close()
        conn.close()

if __name__ == "__main__":
    main()
