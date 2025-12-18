# app/models/users.py
from sqlalchemy import Column, Integer, String, Text, ForeignKey, TIMESTAMP
from sqlalchemy.sql import func
from app.database.session import Base
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class User(Base):
    __tablename__ = "users"
    __table_args__ = {"schema": "zoc"}

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    username = Column(String(100), unique=True, index=True, nullable=False)
    full_name = Column(String(150), nullable=False)
    password_hash = Column(Text, nullable=False)
    phone = Column(String(20), nullable=False)
    address = Column(Text, nullable=False)
    category_id = Column(Integer, ForeignKey("zoc.categories.id", ondelete="RESTRICT"), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())

    # --- Password helpers ---
    def set_password(self, password: str):
        self.password_hash = pwd_context.hash(password)

    def verify_password(self, password: str) -> bool:
        return pwd_context.verify(password, self.password_hash)
