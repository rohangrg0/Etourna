from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.admin import Admin
from app.schemas.admin import AdminLogin, Token
from app.core.security import verify_password, create_access_token

router = APIRouter(prefix="/admin", tags=["Admin Auth"])

@router.post("/login", response_model=Token)
def admin_login(data: AdminLogin, db: Session = Depends(get_db)):
    admin = db.query(Admin).filter(Admin.email == data.email).first()

    if not admin or not verify_password(data.password, admin.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )


    token = create_access_token({"sub": str(admin.id), "role": "admin"})

    return {"access_token": token}
