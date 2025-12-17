from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta
from app.core.config import SECRET_KEY

ALGORITHM = "HS256"
pwd_context = CryptContext(
    schemes=["bcrypt"],
    bcrypt__rounds=12,
    deprecated="auto"
)


def hash_password(password: str) -> str:
    """
    Hash a password safely with bcrypt (truncates to 72 bytes).

    Args:
        password (str): Plain text password.

    Returns:
        str: Hashed password.
    """
    password_bytes = password.encode("utf-8")[:72]  # truncate to 72 bytes
    return pwd_context.hash(password_bytes)


def verify_password(password: str, hashed: str) -> bool:
    """
    Verify a plain password against a hashed password.

    Args:
        password (str): Plain text password.
        hashed (str): Hashed password.

    Returns:
        bool: True if password matches, False otherwise.
    """
    password_bytes = password.encode("utf-8")[:72]
    return pwd_context.verify(password_bytes, hashed)


def create_access_token(
        data: dict, expires_hours: int = 2
) -> str:
    """
    Create a JWT access token.

    Args:
        data (dict): Data to encode into the token (e.g., {"sub": email}).
        expires_hours (int): Expiration time in hours.

    Returns:
        str: JWT token string.
    """
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(hours=expires_hours)
    to_encode.update({"exp": expire})
    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return token
