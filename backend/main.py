"""Top-level runner for uvicorn compatibility.

This file re-exports the FastAPI `app` defined in `app/main.py` so commands
like `uvicorn main:app --reload` (when run in `backend/`) will work.
"""

from app.main import app  # re-export for uvicorn

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
