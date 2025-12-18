from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.user import UserLogin
from app.crud.user import login_user
from app.dependencies.db import get_db
from app.core.security import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])


# --- Login ---
@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = login_user(db, user.email, user.password)
    token = create_access_token({"sub": db_user.email})
    return {"access_token": token, "token_type": "bearer"}
