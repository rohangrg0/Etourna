# app/schemas/user.py
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    full_name: str
    password: str
    phone: str
    address: str
    category_id: int  # must exist in categories table

class UserResponse(BaseModel):
    id: int
    email: str
    username: str
    full_name: str
    phone: str
    address: str
    category_id: int

class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
    class Config:
        orm_mode = True
