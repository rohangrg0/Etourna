from app.database.session import SessionLocal, Base, engine
from app.models.admin import Admin
from app.core.security import hash_password

# Create tables
Base.metadata.create_all(bind=engine)

db = SessionLocal()

try:
    admin_email = "admin@gmail.com"
    admin_name = "Super Admin"
    admin_password = "admin123"  # any length

    existing_admin = db.query(Admin).filter(Admin.email == admin_email).first()
    if existing_admin:
        print(f"⚠ Admin with email '{admin_email}' already exists.")
    else:
        # Use the model's `hashed_password` field (the DB column is `password`)
        new_admin = Admin(
            email=admin_email,
            full_name=admin_name,
            hashed_password=hash_password(admin_password)
        )
        db.add(new_admin)
        db.commit()
        db.refresh(new_admin)
        print(f"✅ Admin created successfully: {new_admin.email}")

except Exception as e:
    print("❌ Failed to create admin:", e)
finally:
    db.close()
