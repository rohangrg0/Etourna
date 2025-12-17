from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.admin import AdminLogin
from app.crud import admin as crud_admin
from app.dependencies.db import get_db

router = APIRouter(prefix="/admin", tags=["Admin"])

@router.post("/login")
def admin_login(admin_data: AdminLogin, db: Session = Depends(get_db)):
    token_data = crud_admin.authenticate_admin(db, admin_data)
    if not token_data:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    return token_data
