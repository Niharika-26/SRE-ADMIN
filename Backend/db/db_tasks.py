from sqlalchemy.orm.session import Session
from sqlalchemy.sql import func
from schemas import TaskBase
from db.models import DbEnvironment,DbJob,DbJobEnvironment,DbTask
from datetime import date, timedelta
import json


def get_all_tasks(db: Session):
    job = db.execute('select * from public.get_jobs()').all()
    job = [{
      "value": data["name"],
      "label": data["name"],
      "key": data['job_id']
    } for data in job]
    tasks = db.execute("select * from public.get_tasks()").all()
    return {"jobs": job,"tasks":tasks }

def get_environments(db: Session, request:str):
    environment = db.execute(f"select * from public.get_environment_list('{request}')").all()
    environment = environment = [{
      "value": data["name"],
      "label": data["name"],
      "key":data["environment_id"]
    } for data in environment]
    return environment


def create_task(db: Session,request: TaskBase):
    db.execute(f"select * from public.create_new_task('{request.job_id}','{request.environment_id}')")
    db.commit()
    tasks = db.execute("select * from public.get_tasks()").all()
    return tasks