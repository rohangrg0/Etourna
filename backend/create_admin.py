# create_admin.py
from app.database.session import SessionLocal
from app.models.admin import Admin
from app.core.security import hash_password

db = SessionLocal()

new_admin = Admin(
    email="admin@gmail.com",
    password=hash_password("password")  # hashed password
)

db.add(new_admin)
db.commit()
db.close()

print("Admin user created successfully!")
