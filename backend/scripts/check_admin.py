from app.database.session import SessionLocal
from app.models.admin import Admin
from app.core.security import verify_password, needs_rehash

if __name__ == '__main__':
    db = SessionLocal()
    admin = db.query(Admin).filter(Admin.email == 'ad@gmail.com').first()
    print('admin present:', bool(admin))
    if admin:
        h = getattr(admin, 'hashed_password', None)
        print('hash:', h)
        print('verify admin123 ->', verify_password('admin123', h))
        print('needs_rehash ->', needs_rehash(h))
    db.close()
