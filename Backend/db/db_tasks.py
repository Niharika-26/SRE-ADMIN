from sqlalchemy.orm.session import Session
from sqlalchemy.sql import func
from schemas import TaskBase
from db.models import DbEnvironment,DbJob,DbJobEnvironment,DbTask
from datetime import date, timedelta
import json


def get_all_tasks(db: Session):
    job = db.execute('select * from public.get_admin_job()').all()
    job = [{
      "value": data["name"],
      "label": data["name"],
      "key": data['job_id']
    } for data in job]
    tasks = db.execute("select * from get_admin_task()").all()
    return {"jobs": job,"tasks":tasks }

def get_environments(db: Session, request:str):
    environment = db.execute(f"select * from public.get_admin_environment_list('{request}')").all()
    environment = environment = [{
      "value": data["name"],
      "label": data["name"],
      "key":data["environment_id"]
    } for data in environment]
    return environment


def create_task(db: Session,request: TaskBase):
    job_environment_id = db.query(DbJobEnvironment.job_environment_id).filter(DbJobEnvironment.job_id == request.job_id).filter(DbJobEnvironment.environment_id == request.environment_id).first()
    job_environment_id = job_environment_id["job_environment_id"]
    db.execute(f"select * from public.create_admin_task('{job_environment_id}')")
    db.commit()
    tasks = db.execute("select * from public.get_admin_task()").all()
    return tasks