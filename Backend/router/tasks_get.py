from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy.orm import Session
from db.database import get_db
from db import db_tasks
from schemas import LookUpData
from db.models import DbEnvironment,DbJobEnvironment

router = APIRouter(
  prefix='/data',
  tags=['tasks']
)

@router.get('/',response_model = LookUpData)
def get_tasks(db: Session = Depends(get_db)):
    return db_tasks.get_all_tasks(db)

@router.get('/{jobid}/environments',)
def get_tasks(jobid:str,db: Session = Depends(get_db)):
    return db_tasks.get_environments(db,jobid)


