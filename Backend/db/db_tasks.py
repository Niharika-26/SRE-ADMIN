from sqlalchemy.orm.session import Session
from sqlalchemy.sql import func
from schemas import TaskBase
from db.models import DbEnvironment,DbJob,DbJobEnvironment,DbTask
from datetime import date, timedelta
import json

file=open("data.json")
file=json.load(file)

def get_all_tasks(db: Session):
    job = db.query(DbJob.name,DbJob.job_id).filter(DbJob.job_id.in_(db.query(DbJobEnvironment.job_id).distinct().all())).all()
    job = [{
      "value": data["name"],
      "label": data["name"],
      "key": data['job_id']
    } for data in job]
    tasks = tasks = db.query(DbEnvironment.name.label("environmentname"),DbJob.name.label("taskname"),func.to_char(DbTask.last_modified_date,"DD/MM/YY HH:MI:SS").label("modifiedat"),func.to_char(DbTask.due_date,"DD/MM/YY HH:MI:SS").label("dueat"),DbTask.status,DbTask.resultant_data.label('responsedata')).filter(DbJobEnvironment.job_environment_id ==DbTask.createdby_job_environment_id ).filter(DbTask.createdby_job_environment_id=="ca89ae2e-74ed-4eb0-9c63-6f5f9f3f4142").all()
    return {"jobs": job, "tasks":tasks}

def get_environments(db: Session, request:str):
    environment = db.query(DbJobEnvironment.environment_id).filter(DbJobEnvironment.job_id == request).all()
    environment = [data["environment_id"] for data in environment]
    environment = db.query(DbEnvironment.name).filter(DbEnvironment.environment_id.in_(environment)).all()
    environment = [{
      "value": data["name"],
      "label": data["name"],
    } for data in environment]
    return environment


def create_task(db: Session,request: TaskBase):
    modifieddate = date.today().strftime("%d-%m-%y")
    duedate = date.today()+timedelta(5)
    if request.currenttask:
        newTask = dict(
            taskname= request.taskname,
            environmentname= request.environmentname,
            responsedata= request.currenttask["responsedata"],
            dueat= duedate.strftime("%d-%m-%y"),
            modifiedat= modifieddate,
            status= "pending",
            )
    else:
        newTask = dict(
            taskname = request.taskname,
            environmentname = request.environmentname,
            responsedata ="fvfdvxc",
            dueat=duedate.strftime("%d-%m-%y"),
            modifiedat=modifieddate,
            status="success",
        )
    file.insert(0,newTask)
    overridedata=[]
    for data in file:
        overridedata.append(json.dumps(data,indent=4))
    overridedata = str(overridedata)
    with open("data.json", "w") as outfile:
        outfile.write(overridedata)
    return file
    # db.add(new_task)
    # db.commit()
    # db.refresh(new_task)
    # return db.query(DbTask).all()