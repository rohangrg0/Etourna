# app/models/admin.py
from sqlalchemy import Column, Integer, String, Boolean
from app.database.session import Base  # Must be the same Base as used to create tables

class Admin(Base):
    __tablename__ = "admins"
    __table_args__ = {"schema": "zoc"}

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    
