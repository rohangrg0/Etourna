# app/api/routes/users.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.user import User  # your SQLAlchemy User model

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/count")
def count_users(db: Session = Depends(get_db)):
    total_users = db.query(User).count()
    return {"count": total_users}
