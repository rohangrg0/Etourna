from sqlalchemy import Column, Integer, String
from app.database.session import Base

class Category(Base):
    __tablename__ = "categories"
    __table_args__ = {"schema": "zoc"}  # same schema as User

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
