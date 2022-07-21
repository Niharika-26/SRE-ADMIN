from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy.orm import Session
from db.database import get_db
from db import db_tasks
from schemas import LookUpData

router = APIRouter(
  prefix='/data',
  tags=['tasks']
)

@router.get('/',response_model = LookUpData)
def get_tasks(db: Session = Depends(get_db)):
    return db_tasks.get_all_tasks(db)
