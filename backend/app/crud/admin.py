from sqlalchemy.orm import Session
from app.models.admin import Admin
from app.schemas.admin import AdminLogin
from app.core.security import verify_password, create_access_token, needs_rehash, rehash_password

def authenticate_admin(db: Session, admin_data: AdminLogin):
    admin = db.query(Admin).filter(Admin.email == admin_data.email).first()
    if not admin or not verify_password(admin_data.password, admin.hashed_password):
        return None
    # Rehash stored password with current algorithm if needed
    if needs_rehash(admin.hashed_password):
        admin.hashed_password = rehash_password(admin_data.password)
        db.add(admin)
        db.commit()
        db.refresh(admin)
    token = create_access_token({"sub": admin.email})
    return {"access_token": token, "token_type": "bearer"} 