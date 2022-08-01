from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.database import get_db
from db import db_tasks
from schemas import LookUpData,EnvironmentListData

# Create a FastAPI subrouter
router = APIRouter(
  prefix='/data',
  tags=['tasks']
)

#To handle lookup get request
@router.get('/',response_model = LookUpData)
def get_tasks(db: Session = Depends(get_db)):
    return db_tasks.get_all_tasks(db)

#To handle environment list get request
@router.get('/{jobid}/environments',response_model = EnvironmentListData)
def get_tasks(jobid:str,db: Session = Depends(get_db)):
    return db_tasks.get_environments(db,jobid)
