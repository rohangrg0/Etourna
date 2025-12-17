from sqlalchemy import Column, Integer, String
from app.database.session import Base


class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    # Historically the DB used a `password` column. Map it here to the
    # `hashed_password` attribute so existing databases remain compatible.
    hashed_password = Column("password", String, nullable=False)
    # The table also contains an optional full_name column in older schema.
    full_name = Column(String, nullable=True)
