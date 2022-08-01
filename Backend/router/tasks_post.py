from fastapi import APIRouter,Depends
from schemas import TaskBase,TaskData
from sqlalchemy.orm import Session
from db.database import get_db
from db import db_tasks

# Create a FastAPI subrouter
router = APIRouter(
  prefix='/data',
  tags=['tasks']
)

# To handle task creation post request
@router.post('/',response_model= TaskData)
def create_task(request: TaskBase,db: Session = Depends(get_db)):
  return db_tasks.create_task(db,request)