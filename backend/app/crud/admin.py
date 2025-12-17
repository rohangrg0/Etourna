from sqlalchemy.orm import Session
from app.models.admin import Admin
from app.schemas.admin import AdminLogin
from app.core.security import verify_password, create_access_token

def authenticate_admin(db: Session, admin_data: AdminLogin):
    admin = db.query(Admin).filter(Admin.email == admin_data.email).first()
    if not admin or not verify_password(admin_data.password, admin.hashed_password):
        return None
    token = create_access_token({"sub": admin.email})
    return {"access_token": token, "token_type": "bearer"}
