
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.models.user import User
from app.schemas.user import UserCreate
from app.utils.security import hash_password

def get_user_by_email(db: Session, email: str) -> User | None:
    stmt = select(User).where(User.email == email)
    return db.execute(stmt).scalar_one_or_none()

def create_user(db: Session, payload: UserCreate) -> User:
    hashed = hash_password(payload.password)
    user = User(
        email=payload.email,
        full_name=payload.full_name,
        hashed_password=hashed,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
