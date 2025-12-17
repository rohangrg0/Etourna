# create_admin.py
from app.database.session import SessionLocal, Base, engine
from app.models.admin import Admin
from app.core.security import hash_password

# Create tables if they don't exist
Base.metadata.create_all(bind=engine)

# Create a new database session
db = SessionLocal()

try:
    # Define admin details
    admin_email = "admin@admin.com"
    admin_name = "Super Admin"
    admin_password = "1234"

    # Check if admin already exists
    existing_admin = db.query(Admin).filter(Admin.email == admin_email).first()
    if existing_admin:
        print(f"⚠ Admin with email '{admin_email}' already exists.")
    else:
        # Create new admin
        new_admin = Admin(
            email=admin_email,
            full_name=admin_name,
            password=hash_password(admin_password)
        )
        db.add(new_admin)
        db.commit()
        db.refresh(new_admin)
        print(f"✅ Admin created successfully: {new_admin.email}")

except Exception as e:
    print("❌ Failed to create admin:", e)
finally:
    db.close()
