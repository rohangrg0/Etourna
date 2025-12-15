from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    email: EmailStr
    full_name: str = Field(min_length=2, max_length=100)
    password: str = Field(min_length=8)

class UserOut(BaseModel):
    id: int
    email: EmailStr
    full_name: str
    created_at: str | None = None

    class Config:
        orm_mode = True  # required if you want to return SQLAlchemy models directly
